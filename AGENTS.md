# Instructions pour les assistants IA — TheKlem.github.io

Ces instructions s'appliquent à toute intervention sur ce dépôt.

## Ce qu'est ce projet

« Convertisseur stupide » — une page web unique qui convertit des unités. Elle fait les
conversions conventionnelles (mètres, grammes, joules), mais sa raison d'être est la
conversion vers des **unités drôles ou absurdes**, parce que ces unités aident à
**visualiser un ordre de grandeur**.

Ce dernier point est la spécification, pas une plaisanterie. « 50 000 m » ne dit rien à
un lecteur ; « Calais → Douvres » lui parle immédiatement. L'absurdité est une
conséquence du choix de références concrètes et universellement connues, pas un but.

**Le test pour une nouvelle unité : le lecteur peut-il se la représenter instantanément ?**

- Une référence parlante bat une référence drôle. « Tour Eiffel » et « terrain de foot »
  marchent parce que tout le monde en a vu.
- Privilégier les références de taille fixe et connue : monuments, objets du quotidien,
  personnalités, trajets familiers.
- Une catégorie est d'autant plus utile que ses unités couvrent beaucoup d'ordres de
  grandeur. Voir `distance.js`, de la feuille de papier à la distance Terre-Soleil.

Public visé : journalistes français cherchant une comparaison que leurs lecteurs
ressentiront. Publié sur <https://theklem.github.io> via GitHub Pages, branche `main`.

- **La langue du produit est le français**, accents compris.
- **Les chiffres doivent être défendables.** Le cadre est absurde, l'arithmétique non.
  Un journaliste peut citer un résultat : préférer une approximation sourcée à un chiffre
  rond inventé. Voir « Qualité des données » plus bas.

## Pile technique — à lire avant toute proposition

- **JavaScript nu, aucun framework, aucune étape de build, aucune dépendance, pas de
  `package.json`.**
- Ne pas introduire npm, bundler, TypeScript, React, préprocesseur CSS ou générateur de
  site. Tout l'intérêt du dépôt est qu'`index.html` ouvert dans un navigateur fonctionne.
- **Aucune dépendance distante, à une exception près.** `index.html` charge le script
  Matomo depuis `cdn.matomo.cloud` ; c'est le seul appel externe, et il est là pour la
  mesure d'audience conforme RGPD. Ne rien ajouter d'autre, et surtout **pas de Google
  Fonts** : une police distante réintroduirait exactement le problème que Matomo
  auto-hébergé sert à éviter. La typographie utilise une pile système.
- Déploiement = `git push` sur `main`. Pas de CI, pas de tests automatisés, pas de linter.

## Organisation des fichiers

```
index.html          Markup, plus deux scripts inline : le tracker Matomo et l'appel
                    final à init(). Charge app.js, puis les categories, puis init()
app.js              Moteur de conversion et interface (671 lignes)
styles.css          Jetons de design, mise en page, mode sombre
categories/*.js     Données de conversion, un fichier par catégorie
favicon.svg         Banane sur fond bleu
og-image.png        Carte de partage 1200x630
logo-ziplo.png      Logos des encarts d'auto-promo
logo-kayz.png
img/                Deux images non référencées, voir "Chantiers ouverts"
```

## Le moteur (`app.js`)

`AppConversions` est un objet exposé sur `window` par une IIFE. **L'ordre de chargement est
contraint** : `app.js` doit être chargé **avant** les fichiers de catégories, qui appellent
son API au parsing, et `AppConversions.init()` doit être appelé **après** eux.

Tout repose sur la **valeur-pivot** : chaque unité déclare combien elle vaut dans l'unité
de base de sa catégorie. La conversion se réduit à `(valeur × pivotDépart) / pivotArrivée`.
Les unités d'une même catégorie n'ont donc jamais besoin de se référencer entre elles.

API appelée par les fichiers de données :

- `AppConversions.AddCategory(value, title, style)` — enregistre une catégorie.
- `AppConversions.AddGroup(category, group_label, group_style, conversions)` — ajoute un
  groupe d'unités. `conversions` est un tableau de triplets `[libellé, valeur, style]`,
  où **`valeur` est une chaîne** contenant le nombre pivot.

## Ajouter une catégorie

1. Créer `categories/<nom>.js` sur le modèle exact d'un fichier existant :

   ```js
   var category = {
       value:"MACATEGORIE",
       title:"Titre court: précisions drôles",
       style:""
   };

   AppConversions.AddCategory(category.value, category.title, category.style);

   var conversions = [
       ["Unité de base","1", ""],
       ["Banane","0.16", "font-weight: bold; color: limegreen;"],
   ]

   AppConversions.AddGroup(category.value, "Unités standard", "", conversions);
   ```

2. Ajouter `<script src="./categories/<nom>.js"></script>` dans `index.html`, **après**
   `app.js` et **avant** l'appel à `init()`. L'ordre des balises détermine l'ordre des
   badges.

3. **Vérifier le nombre de teintes de badges.** `styles.css` définit `.badge-c0` à
   `.badge-c9` et `app.js` porte `NB_TEINTES`. Le cycle doit rester **strictement plus
   long que le nombre de catégories**, sinon deux badges partagent une couleur. C'est
   arrivé en passant de 8 à 9 catégories.

## Conventions de données

- `category.value` est en MAJUSCULES et **unique parmi les fichiers chargés**.
  `calories.js` et `caloriescourte.js` déclarent tous deux `CALORIES` : c'est pourquoi
  `calories.js` est commenté dans `index.html`. Un seul peut être actif.
- **Le titre est de la forme `"Titre court: précisions"`.** La partie gauche du premier
  deux-points devient le libellé du badge, la droite son infobulle. Garder le titre court —
  au-delà d'une vingtaine de caractères les badges débordent sur plusieurs lignes.
  Attention : `population.js` écrit `"Population : ..."` avec une espace avant le
  deux-points, le découpage applique un `trim()` des deux côtés.
- Redéclarer `var conversions = [...]` avant chaque `AddGroup` est le motif établi partout.
  Le suivre plutôt qu'inventer de nouveaux noms de variables.
- **Les pivots sont des chaînes** : `["Tour Eiffel","300", ""]`. La notation exponentielle
  est acceptée et préférable pour les extrêmes : `"1.602176634e-19"`.
- **L'unité de base vaut `"1"`, mais ce n'est PAS forcément la première déclarée.**
  `distance.js` commence par « Centimètres » (0.01) avant « Mètre(s) » (1). Le code
  sélectionne le pivot 1 explicitement, ne pas supposer l'ordre.
- **Pas de tabulation dans les chaînes.** 1 103 tabulations parasites ont été retirées des
  fichiers de calories ; elles se voyaient à l'écran et polluaient les URL de partage.
- **Pas de libellés en double**, même entre groupes différents d'une même catégorie. Les
  doublons ne faussent aucun calcul mais affichent deux fois la même entrée dans la liste.
- Regrouper par thème avec `AddGroup`. Réutiliser les noms de groupes existants quand ils
  conviennent.
- **La banane est un running gag, pas une règle.** 8 catégories sur 9 en ont une. Ne pas
  en ajouter là où ça n'a aucun sens : `population.js` n'en a pas, délibérément, parce
  qu'une banane n'est pas une quantité de personnes. La cohérence prime sur le gag.

## Qualité des données

Le site sert à produire des chiffres que des journalistes citent. Trois règles.

**Sourcer, et dater dans le libellé.** Écrire `"Dette publique française (fin 2025)"` et
non `"Dette française"`. La péremption doit être visible du lecteur. Mettre la source et
le raisonnement en commentaire dans le fichier.

**Vérifier la cohérence interne, pas seulement la valeur.** Une valeur peut être juste
isolément et contredire ses voisines. Exemples de contrôles qui ont détecté de vraies
erreurs : le déficit rapporté au PIB doit redonner les 5,1 % de l'INSEE ; les retraites
rapportées aux prestations sociales tombent à 39,7 % là où la DREES annonce 41,6 %, parce
que les deux chiffres portent sur des années différentes — un écart explicable n'est pas
une erreur, mais il doit être expliqué ; un réacteur doit valoir exactement le quart du
Tricastin. Un écart inexpliqué signale une erreur de saisie ou de convention.

**Écarter les chiffres indéfendables.** Ont été volontairement exclus : l'énergie d'une
recherche Google ou d'une requête IA, une transaction Bitcoin, une heure de streaming,
l'énergie d'un séisme de magnitude donnée. Tous varient d'un ordre de grandeur ou plus
selon la méthodologie retenue.

## Pièges rencontrés, à ne pas reproduire

**Le sens des taux de change.** Le pivot doit dire **combien d'euros vaut une unité**.
Les deux devises de `money.js` contenaient l'inverse — des dollars par euro — et le site
affichait 1 € = 0,919 $ au lieu de 1,153.

**Le watt n'est pas une unité d'énergie**, c'est une puissance. Seuls les watt-heures ont
leur place dans `ENERGY`. Convertir des joules en watts n'a pas plus de sens que des
kilomètres en km/h.

**Puissance nominale contre production réelle.** Une éolienne de 3 MW ne produit pas
3 MW × 8 760 h : son facteur de charge est de 26 %. Un réacteur non plus. Quand deux
unités suivent des conventions différentes, **le dire dans le libellé** — voir
« Un réacteur nucléaire pendant 1 h (pleine puissance) » et « pendant un an (production
réelle) », dont le rapport vaut 5 986 et non 8 760.

**Les libellés servent d'identifiants d'URL.** L'état de la conversion est encodé dans
l'URL par libellé. Renommer une unité casse les liens déjà partagés vers elle. À faire
en connaissance de cause.

## Interface

- **Badges de catégorie en desktop, menu déroulant sous 756 px.** Les deux contrôles
  existent en permanence dans le DOM, un seul est visible via CSS, et `markActiveBadge`
  les synchronise. Ne pas remplacer par une construction conditionnelle en JS : l'état
  serait perdu au redimensionnement.
- **Champ de recherche filtrant** à la place des `<select>` d'unités : insensible aux
  accents et à la casse, multi-termes, navigation au clavier, ARIA `combobox`/`listbox`.
- Bouton d'inversion, état dans l'URL, bouton copier, partage X et Bluesky.

## CSS

- Jetons dans `:root` : palette, échelle d'espacement en multiples de 4, rayons, ombres.
  Modifier une couleur se fait à un seul endroit.
- Le bleu d'identité `#232BC4` porte le bandeau ; les cartes sont blanches et le
  chevauchement crée la profondeur.
- **Les contrastes sont vérifiés WCAG AA en clair et en sombre.** Toute nouvelle couleur
  doit être mesurée. Attention : à luminosité HSL égale, le vert et le jaune sont perçus
  bien plus clairs que le bleu.
- **`[hidden] { display: none !important }` est nécessaire** : une règle de classe comme
  `.conversion-container { display: flex }` bat sinon le `display:none` du navigateur.
- **`form` a un `z-index` supérieur à `#result-container`.** Le formulaire crée un
  contexte d'empilement, donc le `z-index` élevé de la liste de recherche ne vaut qu'à
  l'intérieur. Sans cette précédence, la liste s'affiche tronquée sous le résultat.
- Mode sombre via `prefers-color-scheme`, `prefers-reduced-motion` respecté.

## Prévisualisation locale

Aucun build. Ouvrir `index.html`, ou depuis la racine :

```bash
python -m http.server 8000
```

## Fins de ligne

`.gitattributes` porte `* text=auto` : la copie de travail Windows est en CRLF, le dépôt
stocke du LF. Un diff qui montre toutes les lignes modifiées est presque toujours une
histoire de fins de ligne, pas de contenu. Normaliser avant de conclure.

## Commits

- **Ne jamais attribuer un commit à l'assistant.** Pas de `Co-Authored-By` pour Claude ou
  un autre LLM, pas de ligne « Generated with ». Les commits sont signés par le
  développeur humain.
- **Pousser sur `main` déploie en production immédiatement.** Le dire avant de pousser.
- Toujours modifier les fichiers **du dépôt**, jamais une copie téléchargée ailleurs. Un
  `index.html` restauré depuis une vieille copie a déjà effacé plusieurs semaines de
  travail en un commit.
- Regarder la volumétrie du diff avant de valider. Un commit qui annonce 248 insertions
  pour un changement d'une ligne est un signal.

## Chantiers ouverts

- **Affichage des nombres.** La notation scientifique (`1,48E-11`) est illisible pour le
  public visé. Une proposition en trois règles existe — mots plutôt qu'exposants,
  suppression de la ligne « autrement dit » quand elle est redondante, bascule
  d'affichage sous 10⁻⁶ — non implémentée.
- **7 fichiers médias orphelins**, 3,32 Mo au total, référencés nulle part :
  `img/basset.jpg` (3,10 Mo), `img/scratch.jpg` (157 ko), `Twitter-Logo.png` (25 ko),
  `logo-mesvolontes.png` (18 ko), `Bluesky.jpeg`, `Bluesky.webp` et `Twitter-Logo-100.png`.
  Les icônes de partage ne servent plus depuis que les boutons sont en texte, et
  `img/scratch.jpg` était l'ancienne image sociale remplacée par `og-image.png`.
  Les supprimer allège le clone mais pas l'historique git.
- **`calories.js` est du code mort** tant que `caloriescourte.js` est actif.
- **`dosimetry.js` est la catégorie la plus maigre** : 30 unités, contre 168 pour
  Population et 164 pour Argent. C'est pourtant une des plus utiles au journalisme, la
  dose de radiation en bananes étant exactement ce que ce site sait faire mieux que
  personne. C'est là que l'ajout de contenu rapporterait le plus.
  (`surface.js`, longtemps soupçonnée d'être pauvre, ne l'est pas : sur ses 85 unités,
  76 sont des repères concrets — terrains de football, Central Park, Khéops.)
- **`money.js` : la fortune de la famille Mulliez n'a pas pu être vérifiée** — son
  libellé est le seul du groupe sans année, ce qui le signale.
