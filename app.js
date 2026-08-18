/*
 * Convertisseur stupide — moteur de conversion.
 *
 * Les fichiers categories/*.js appellent AppConversions.AddCategory() et
 * AppConversions.AddGroup() au chargement. Ce fichier doit donc être chargé
 * AVANT eux, et AppConversions.init() appelé APRÈS.
 *
 * Principe : chaque unité déclare une valeur-pivot, c'est-à-dire combien elle
 * vaut dans l'unité de base de sa catégorie. La conversion se réduit alors à
 * (valeur * pivotDépart) / pivotArrivée.
 */
(function () {
    'use strict';

    /* ------------------------------------------------------------------ */
    /* Utilitaires                                                         */
    /* ------------------------------------------------------------------ */

    /* Les libellés historiques contiennent des entités HTML ("-&gt;") parce
     * qu'ils étaient injectés via innerHTML. On les décode une fois à
     * l'ingestion pour pouvoir ensuite travailler en textContent partout. */
    var decoder = document.createElement('textarea');
    function decodeEntities(str) {
        decoder.innerHTML = String(str);
        return decoder.value;
    }

    /* Comparaison insensible à la casse ET aux accents : chercher "unite"
     * doit trouver "Unité", chercher "eiffel" doit trouver "Tour Eiffel". */
    function fold(str) {
        return String(str)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim();
    }

    /* Formatage adaptatif : le nombre de décimales dépend de l'ordre de
     * grandeur. L'ancien moteur utilisait un seuil fixe qui produisait
     * "5,363 Tour Eiffel" (précision absurde) ou "0,00000012" (illisible). */
    function formatNumber(n) {
        if (n === null || n === undefined || !isFinite(n)) { return '—'; }
        var abs = Math.abs(n);
        if (abs === 0) { return '0'; }

        if (abs >= 1e15 || abs < 1e-9) {
            return new Intl.NumberFormat('fr-FR', {
                notation: 'scientific',
                maximumFractionDigits: 2
            }).format(n);
        }

        var maxFrac;
        if (abs >= 1000) { maxFrac = 0; }
        else if (abs >= 100) { maxFrac = 1; }
        else if (abs >= 1) { maxFrac = 2; }
        else if (abs >= 0.01) { maxFrac = 4; }
        else if (abs >= 0.0001) { maxFrac = 6; }
        else { maxFrac = 9; }

        return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: maxFrac }).format(n);
    }

    function parseValue(raw) {
        /* Accepte la virgule décimale française et les espaces de milliers. */
        var cleaned = String(raw).replace(/\s/g, '').replace(',', '.');
        return Number.parseFloat(cleaned);
    }

    /* ------------------------------------------------------------------ */
    /* Modèle                                                              */
    /* ------------------------------------------------------------------ */

    function NewConversion(title, value, style) {
        return { label: decodeEntities(title).trim(), value: value, style: style || '' };
    }

    function NewGroup(title, style) {
        return {
            label: decodeEntities(title).trim(),
            style: style || '',
            conversions: [],
            pushConversions: function (arrConv) {
                arrConv.forEach(function (con) {
                    this.conversions.push(NewConversion(con[0], con[1], con[2] ? con[2] : ''));
                }, this);
            }
        };
    }

    /* ------------------------------------------------------------------ */
    /* Combobox : champ de recherche filtrant remplaçant un <select>        */
    /* ------------------------------------------------------------------ */

    function Combo(root, onSelect) {
        this.root = root;
        this.input = root.querySelector('.combo-input');
        this.toggle = root.querySelector('.combo-toggle');
        this.list = root.querySelector('.combo-list');
        this.onSelect = onSelect;

        this.items = [];        /* [{label, value, style, groupLabel, folded}] */
        this.filtered = [];
        this.activeIndex = -1;
        this.selected = null;
        this.open = false;

        this.bind();
    }

    Combo.prototype.bind = function () {
        var self = this;

        this.input.addEventListener('focus', function () {
            self.input.select();
            self.show('');
        });

        this.input.addEventListener('input', function () {
            self.show(self.input.value);
        });

        this.input.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                if (!self.open) { self.show(''); }
                self.move(e.key === 'ArrowDown' ? 1 : -1);
            } else if (e.key === 'Enter') {
                if (self.open && self.activeIndex >= 0) {
                    e.preventDefault();
                    self.choose(self.filtered[self.activeIndex]);
                }
            } else if (e.key === 'Escape') {
                if (self.open) { e.stopPropagation(); }
                self.close(true);
            } else if (e.key === 'Tab') {
                self.close(true);
            }
        });

        this.toggle.addEventListener('click', function () {
            if (self.open) {
                self.close(true);
            } else {
                self.input.focus();
                self.show('');
            }
        });

        /* Un clic hors du composant referme et restaure le libellé choisi. */
        document.addEventListener('mousedown', function (e) {
            if (!self.root.contains(e.target)) { self.close(true); }
        });
    };

    Combo.prototype.load = function (groups) {
        this.items = [];
        var self = this;
        groups.forEach(function (group) {
            group.conversions.forEach(function (c) {
                self.items.push({
                    label: c.label,
                    value: c.value,
                    style: c.style,
                    groupLabel: group.label,
                    groupStyle: group.style,
                    folded: fold(c.label + ' ' + group.label)
                });
            });
        });
        this.selected = null;
        this.input.value = '';
        this.close(false);
    };

    Combo.prototype.filter = function (query) {
        var q = fold(query);
        if (!q) { return this.items.slice(); }
        var terms = q.split(/\s+/);
        return this.items.filter(function (item) {
            return terms.every(function (t) { return item.folded.indexOf(t) !== -1; });
        });
    };

    Combo.prototype.show = function (query) {
        this.filtered = this.filter(query);
        this.render();
        this.open = true;
        this.list.hidden = false;
        this.input.setAttribute('aria-expanded', 'true');

        /* Repositionne le curseur sur l'élément déjà choisi s'il est visible. */
        var idx = -1;
        if (this.selected) {
            for (var i = 0; i < this.filtered.length; i++) {
                if (this.filtered[i].label === this.selected.label) { idx = i; break; }
            }
        }
        this.setActive(idx === -1 && this.filtered.length ? 0 : idx);
    };

    Combo.prototype.render = function () {
        var self = this;
        this.list.textContent = '';

        if (!this.filtered.length) {
            var empty = document.createElement('li');
            empty.className = 'combo-empty';
            empty.textContent = 'Aucune unité ne correspond';
            this.list.appendChild(empty);
            return;
        }

        var currentGroup = null;
        this.filtered.forEach(function (item, i) {
            if (item.groupLabel !== currentGroup) {
                currentGroup = item.groupLabel;
                var head = document.createElement('li');
                head.className = 'combo-group';
                head.setAttribute('role', 'presentation');
                head.textContent = currentGroup;
                self.list.appendChild(head);
            }
            var li = document.createElement('li');
            li.className = 'combo-option';
            li.id = self.list.id + '-opt-' + i;
            li.setAttribute('role', 'option');
            li.setAttribute('aria-selected', 'false');
            li.dataset.index = String(i);
            if (item.style) { li.setAttribute('style', item.style); }
            li.textContent = item.label;
            li.addEventListener('mousedown', function (e) {
                e.preventDefault();          /* évite de perdre le focus avant le clic */
                self.choose(item);
            });
            li.addEventListener('mousemove', function () { self.setActive(i); });
            self.list.appendChild(li);
        });
    };

    Combo.prototype.setActive = function (i) {
        var opts = this.list.querySelectorAll('.combo-option');
        opts.forEach(function (o) {
            o.classList.remove('is-active');
            o.setAttribute('aria-selected', 'false');
        });
        this.activeIndex = i;
        if (i < 0 || i >= opts.length) {
            this.input.removeAttribute('aria-activedescendant');
            return;
        }
        var el = opts[i];
        el.classList.add('is-active');
        el.setAttribute('aria-selected', 'true');
        this.input.setAttribute('aria-activedescendant', el.id);

        /* Défilement minimal pour garder l'option active visible. */
        var lb = this.list.getBoundingClientRect();
        var eb = el.getBoundingClientRect();
        if (eb.bottom > lb.bottom) { this.list.scrollTop += eb.bottom - lb.bottom; }
        else if (eb.top < lb.top) { this.list.scrollTop -= lb.top - eb.top; }
    };

    Combo.prototype.move = function (delta) {
        if (!this.filtered.length) { return; }
        var next = this.activeIndex + delta;
        if (next < 0) { next = this.filtered.length - 1; }
        if (next >= this.filtered.length) { next = 0; }
        this.setActive(next);
    };

    Combo.prototype.choose = function (item) {
        if (!item) { return; }
        this.selected = item;
        this.input.value = item.label;
        this.close(false);
        if (this.onSelect) { this.onSelect(item); }
    };

    Combo.prototype.close = function (restoreLabel) {
        this.open = false;
        this.list.hidden = true;
        this.input.setAttribute('aria-expanded', 'false');
        this.input.removeAttribute('aria-activedescendant');
        if (restoreLabel) {
            this.input.value = this.selected ? this.selected.label : '';
        }
    };

    /* Sélection programmatique par libellé (utilisée par l'URL et l'inversion). */
    Combo.prototype.selectByLabel = function (label, silent) {
        if (!label) { return false; }
        var target = fold(label);
        for (var i = 0; i < this.items.length; i++) {
            if (fold(this.items[i].label) === target) {
                this.selected = this.items[i];
                this.input.value = this.items[i].label;
                if (!silent && this.onSelect) { this.onSelect(this.items[i]); }
                return true;
            }
        }
        return false;
    };

    /* ------------------------------------------------------------------ */
    /* Application                                                         */
    /* ------------------------------------------------------------------ */

    var AppConversions = {

        Categories: [],
        Conversions: {},

        AddCategory: function (value, title, style) {
            this.Categories.push({ value: value, title: decodeEntities(title), style: style || '' });
        },

        AddGroup: function (category, group_label, group_style, conversions) {
            var categoryExists = this.Categories.some(function (cat) { return cat.value === category; });
            if (!categoryExists) {
                return console.log("La catégorie du groupe de conversion n'existe pas. Catégorie : ", category);
            }
            var group = NewGroup(group_label, group_style);
            group.pushConversions([].concat(conversions));
            if (this.Conversions[category]) { this.Conversions[category].push(group); }
            else { this.Conversions[category] = [group]; }
        },

        /* --- état --- */
        Category: '',
        Value: 1,

        init: function () {
            this.categorySelect = document.getElementById('conversion-type');
            this.details = document.getElementById('conversion-details');
            this.valueInput = document.getElementById('initial-value');
            this.resultBox = document.getElementById('result-container');
            this.swapButton = document.getElementById('swap-units');

            if (!this.categorySelect) { return console.log('No Select Category Html Element'); }

            var self = this;
            this.fromCombo = new Combo(document.getElementById('combo-from'), function () { self.update(); });
            this.toCombo = new Combo(document.getElementById('combo-to'), function () { self.update(); });

            this.loadCategories();
            this.bindEvents();
            this.collapsePromoOnMobile();
            this.restoreFromUrl();
        },

        /* Le bloc d'auto-promo est ouvert par défaut (et le reste sans JS),
         * mais sur mobile il occupait plus de hauteur que le convertisseur
         * lui-même : on le replie pour laisser la place à l'outil. */
        collapsePromoOnMobile: function () {
            var promo = document.getElementById('promo');
            if (promo && window.matchMedia('(max-width: 756px)').matches) {
                promo.removeAttribute('open');
            }
        },

        loadCategories: function () {
            var self = this;
            this.categorySelect.textContent = '';
            var first = document.createElement('option');
            first.value = '';
            first.selected = true;
            first.disabled = true;
            first.textContent = 'Convertir quoi ?';
            this.categorySelect.appendChild(first);

            this.Categories.forEach(function (cat) {
                var opt = document.createElement('option');
                opt.value = cat.value;
                opt.textContent = cat.title;
                if (cat.style) { opt.setAttribute('style', cat.style); }
                self.categorySelect.appendChild(opt);
            });
        },

        bindEvents: function () {
            var self = this;

            this.categorySelect.addEventListener('change', function (e) {
                self.selectCategory(e.target.value, true);
            });

            this.valueInput.addEventListener('input', function () {
                self.Value = parseValue(self.valueInput.value);
                self.update();
            });

            this.swapButton.addEventListener('click', function () {
                var from = self.fromCombo.selected;
                var to = self.toCombo.selected;
                if (!from || !to) { return; }
                self.fromCombo.selectByLabel(to.label, true);
                self.toCombo.selectByLabel(from.label, true);
                self.update();
            });

            document.addEventListener('click', function (e) {
                var copyBtn = e.target.closest ? e.target.closest('#copy-result') : null;
                if (copyBtn) { self.copyResult(copyBtn); }
            });
        },

        selectCategory: function (category, pickDefaults) {
            if (!category || !this.Conversions[category]) {
                this.details.hidden = true;
                this.resultBox.hidden = true;
                return;
            }
            this.Category = category;
            this.categorySelect.value = category;

            var groups = this.Conversions[category];
            this.fromCombo.load(groups);
            this.toCombo.load(groups);
            this.details.hidden = false;

            if (pickDefaults) {
                /* Départ : l'unité de base, c'est-à-dire celle dont le pivot vaut 1.
                 * Attention : ce n'est PAS toujours la première déclarée — distance.js
                 * commence par "Centimètres" (0.01) avant "Mètre(s)" (1).
                 * Arrivée : la Banane si la catégorie en a une — c'est le running
                 * gag du site et ça montre immédiatement à quoi il sert. */
                var base = this.fromCombo.items.filter(function (i) {
                    return Number.parseFloat(i.value) === 1;
                })[0] || this.fromCombo.items[0];
                if (base) { this.fromCombo.selectByLabel(base.label, true); }

                var funny = this.toCombo.items.filter(function (i) {
                    return fold(i.label).indexOf('banane') !== -1;
                })[0];

                /* Pas de banane dans cette catégorie (POPULATION) : on choisit
                 * l'unité qui donne le résultat le plus lisible pour 1 unité de
                 * base, en visant un ordre de grandeur autour de 10. Sinon la
                 * première impression est un truc du genre "0,000011236". */
                if (!funny && base) {
                    var basePivot = Number.parseFloat(base.value);
                    var best = null;
                    var bestScore = Infinity;
                    this.toCombo.items.forEach(function (i) {
                        var pivot = Number.parseFloat(i.value);
                        if (!pivot || i.label === base.label) { return; }
                        var score = Math.abs(Math.log10(basePivot / pivot) - 1);
                        if (score < bestScore) { bestScore = score; best = i; }
                    });
                    funny = best || this.toCombo.items[1];
                }
                if (funny) { this.toCombo.selectByLabel(funny.label, true); }
            }
            this.update();
        },

        compute: function () {
            var from = this.fromCombo.selected;
            var to = this.toCombo.selected;
            if (!from || !to || Number.isNaN(this.Value)) { return null; }

            var fromPivot = Number.parseFloat(from.value);
            var toPivot = Number.parseFloat(to.value);
            if (!fromPivot || !toPivot) { return null; }

            var result = (this.Value * fromPivot) / toPivot;
            return {
                from: from,
                to: to,
                result: result,
                /* Combien d'unités de départ pour faire UNE unité d'arrivée. */
                perOne: toPivot / fromPivot
            };
        },

        update: function () {
            var c = this.compute();
            if (!c) {
                this.resultBox.hidden = true;
                this.syncUrl();
                return;
            }
            this.renderResult(c);
            this.syncUrl();
        },

        plainSentence: function (c) {
            return this.Value.toLocaleString('fr-FR') + ' ' + c.from.label +
                ' = ' + formatNumber(c.result) + ' ' + c.to.label;
        },

        renderResult: function (c) {
            var box = this.resultBox;
            box.textContent = '';
            box.hidden = false;

            var head = document.createElement('p');
            head.className = 'result-headline';

            var big = document.createElement('span');
            big.className = 'result-number';
            big.textContent = formatNumber(c.result);
            var unit = document.createElement('span');
            unit.className = 'result-unit';
            unit.textContent = ' ' + c.to.label;

            var lead = document.createElement('span');
            lead.className = 'result-lead';
            lead.textContent = this.Value.toLocaleString('fr-FR') + ' ' + c.from.label + ' = ';

            head.appendChild(lead);
            head.appendChild(big);
            head.appendChild(unit);
            box.appendChild(head);

            var inverse = document.createElement('p');
            inverse.className = 'result-inverse';
            inverse.textContent = 'Autrement dit, il faut ' + formatNumber(c.perOne) + ' ' +
                c.from.label + ' pour faire 1 ' + c.to.label + '.';
            box.appendChild(inverse);

            var actions = document.createElement('p');
            actions.className = 'result-actions';

            var copy = document.createElement('button');
            copy.type = 'button';
            copy.id = 'copy-result';
            copy.className = 'btn';
            copy.textContent = 'Copier le résultat';
            actions.appendChild(copy);

            var share = this.plainSentence(c) + '\n\nJ\'ai fait une conversion stupide via ' + this.shareUrl();

            var bsky = document.createElement('a');
            bsky.className = 'btn btn-share';
            bsky.target = '_blank';
            bsky.rel = 'noopener';
            bsky.href = 'https://bsky.app/intent/compose?text=' + encodeURIComponent('Le Sachiez-tu ???\n\n' + share);
            bsky.textContent = 'Partager sur Bluesky';
            actions.appendChild(bsky);

            var x = document.createElement('a');
            x.className = 'btn btn-share';
            x.target = '_blank';
            x.rel = 'noopener';
            x.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('Le Sachiez-tu ???\n\n' + share);
            x.textContent = 'Partager sur X';
            actions.appendChild(x);

            box.appendChild(actions);
        },

        copyResult: function (button) {
            var c = this.compute();
            if (!c) { return; }
            var text = this.plainSentence(c) + '\n' + this.shareUrl();
            var done = function () {
                var old = button.textContent;
                button.textContent = 'Copié !';
                setTimeout(function () { button.textContent = old; }, 1800);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(done, function () {});
            }
        },

        /* --- état dans l'URL ------------------------------------------- */

        syncUrl: function () {
            if (!this.Category) { return; }
            var params = new URLSearchParams();
            params.set('c', this.Category);
            if (this.fromCombo.selected) { params.set('de', this.fromCombo.selected.label); }
            if (this.toCombo.selected) { params.set('vers', this.toCombo.selected.label); }
            if (!Number.isNaN(this.Value)) { params.set('v', String(this.Value)); }
            history.replaceState(null, '', '?' + params.toString());
        },

        shareUrl: function () {
            return location.origin + location.pathname + location.search;
        },

        restoreFromUrl: function () {
            var params = new URLSearchParams(location.search);
            var cat = params.get('c');
            if (!cat || !this.Conversions[cat]) { return; }

            /* On pose d'abord les défauts, puis l'URL les écrase si elle en
             * fournit. Ainsi un lien partiel (?c=DISTANCE) reste utilisable, et
             * un libellé disparu du jeu de données ne casse pas la page. */
            this.selectCategory(cat, true);

            var v = params.get('v');
            if (v !== null && v !== '') {
                this.Value = parseValue(v);
                this.valueInput.value = v;
            }

            this.fromCombo.selectByLabel(params.get('de'), true);
            this.toCombo.selectByLabel(params.get('vers'), true);
            this.update();
        }
    };

    window.AppConversions = AppConversions;
}());
