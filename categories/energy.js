var category = {
    value:"ENERGY",
    title:"Énergie: du joule à la bombe atomique",
    style:""
};

AppConversions.AddCategory(category.value, category.title, category.style);

/* Unité de base : le joule.
 * Les valeurs en notation exponentielle ("1.602176634e-19") sont lues sans
 * problème par parseFloat, et restent lisibles là où l'écriture décimale
 * serait une file de zéros.
 * ATTENTION : le watt est une PUISSANCE, pas une énergie. Seuls les
 * watt-heures ont leur place ici. */

var conversions = [
    ["Joule (J)","1", ""],
    ["Kilojoule (kJ)","1000", ""],
    ["Mégajoule (MJ)","1000000", ""],
    ["Watt-heure (Wh)","3600", ""],
    ["Kilowattheure (kWh)","3600000", ""],
    ["Mégawattheure (MWh)","3600000000", ""],
    ["Gigawattheure (GWh)","3600000000000", ""],
    ["Térawattheure (TWh)","3600000000000000", ""],
    ["Tonne équivalent pétrole (tep)","41868000000", ""],
    ["Baril équivalent pétrole (bep)","6117863200", ""],
    ["Kilogramme de TNT","4184000", ""],
    ["Bombe A (Hiroshima)","62760000000000", ""],
    ["Bombe H (Tsar Bomba)","209200000000000000", ""],
    ["Pile alcaline AA (LR6)","14400", ""],
    ["Litre d'essence","33600000", ""],
]

AppConversions.AddGroup(category.value, "Unités standard", "", conversions);

var conversions = [
    ["Kilotonne équivalent pétrole (ktep)","41868000000000", ""],
    ["Million de tep (Mtep)","41868000000000000", ""],
    ["Tonne équivalent charbon (tec)","29300000000", ""],
    ["Plein d'essence (50 L)","1680000000", ""],
    ["Litre de gazole","35800000", ""],
]

AppConversions.AddGroup(category.value, "Énergies fossiles", "", conversions);

/* La tonne de TNT vaut EXACTEMENT 4,184 GJ : c'est une définition
 * conventionnelle, pas une mesure. Toutes les puissances d'explosion en
 * découlent par simple multiplication. */
var conversions = [
    ["Tonne de TNT","4184000000", ""],
    ["Kilotonne de TNT","4184000000000", ""],
    ["Mégatonne de TNT","4184000000000000", ""],
    ["Explosion de Beyrouth (2020)","4602400000000", ""],
    ["Trinity, premier essai (1945)","87864000000000", ""],
    ["Bombe de Nagasaki (Fat Man)","87864000000000", ""],
    ["Castle Bravo, essai US (1954)","62760000000000000", ""],
]

AppConversions.AddGroup(category.value, "Explosifs et bombes", "", conversions);

var conversions = [
    ["Électron-volt (eV)","1.602176634e-19", ""],
    ["Erg","0.0000001", ""],
    ["BTU","1055.06", ""],
    ["Pied-livre (ft·lb)","1.3558179483", ""],
]

AppConversions.AddGroup(category.value, "Physique", "", conversions);

/* Bouilloire : 4 186 J/kg/K x 1 kg x 80 K, soit 20 à 100 degrés. */
var conversions = [
    ["Minute de micro-ondes","60000", ""],
    ["Trois minutes de grille-pain","180000", ""],
    ["Une bouilloire (1 L d'eau bouillie)","334880", ""],
    ["Un café filtre","108000", ""],
    /* Appareil a raclette standard : 1 200 W (fourchette 1 000 a 1 400 selon
     * les modeles), pendant 45 minutes, soit 1 200 W x 2 700 s = 0,9 kWh. */
    ["Une raclette pour 6","3240000", ""],
    ["Une heure de plaques à induction","5400000", ""],
    ["Une heure de four électrique","9000000", ""],
]

AppConversions.AddGroup(category.value, "Cuisine", "", conversions);

var conversions = [
    ["Un quart d'heure d'aspirateur","900000", ""],
    ["Un cycle de lave-linge à 30 °C","1800000", ""],
    ["Un cycle de lave-vaisselle","3600000", ""],
    ["Un cycle de lave-linge à 60 °C","4680000", ""],
    ["Un cycle de sèche-linge","9000000", ""],
    ["Un frigo pendant un an","828000000", ""],
    ["Un congélateur pendant un an","990000000", ""],
    ["Conso élec. annuelle d'un foyer français","15120000000", ""],
]

AppConversions.AddGroup(category.value, "Électroménager", "", conversions);

/* Le clou du groupe : la box internet, 15 W qui ne s'éteignent jamais,
 * dépasse dans l'année l'aspirateur et le lave-vaisselle. */
var conversions = [
    ["Pile alcaline AAA (LR03)","6480", ""],
    ["Une heure d'ampoule LED","36000", ""],
    ["Charge d'un smartphone","54000", ""],
    ["Une heure d'ampoule à incandescence","216000", ""],
    ["Une heure de télévision","360000", ""],
    ["Une heure de console de jeu","540000", ""],
    ["Une box internet pendant un an","334800000", ""],
]

AppConversions.AddGroup(category.value, "Écrans et lumière", "", conversions);

/* "Soulever une pomme d'un mètre" vaut 1 joule (0,1 kg x 9,81 x 1 m) : c'est
 * volontairement le même pivot que le joule lui-même, comme repère concret. */
var conversions = [
    ["Soulever une pomme d'un mètre","1", ""],
    ["Monter dix étages à pied","23544", ""],
    ["Une heure de vélo","360000", ""],
    ["Banane (89 kcal)","372376", "font-weight: bold; color: limegreen;"],
    /* 400 kcal : valeur pour 70 kg a allure moyenne. La fourchette reelle va
     * de 400 a 600 kcal selon le poids et le rythme. Coherence interne : cela
     * fait bien 20 % de la journee d'un adulte (2 000 kcal). */
    ["Marche quotidienne recommandée (10K pas)","1673600", ""],
    ["Un cheval-vapeur pendant une heure","2647800", ""],
    ["Une journée d'être humain","8368000", ""],
]

AppConversions.AddGroup(category.value, "Corps et mouvement", "", conversions);

var conversions = [
    ["Recharge d'une voiture électrique","180000000", ""],
    ["Un Paris-New York, par passager","6300000000", ""],
]

AppConversions.AddGroup(category.value, "Transports", "", conversions);

/* Data center OVHcloud Roubaix 8 : 36 MW de capacite electrique installee,
 * environ 17 MW reellement consommes (source OVHcloud via Next, mai 2023).
 * On retient l'usage reel et non la capacite : c'est ce que le site tire
 * effectivement du reseau.
 *   1 h  : 17 000 000 W x 3 600 s
 *   1 an : 17 000 000 W x 31 536 000 s, soit environ 149 GWh */
var conversions = [
    ["Éclair (ordre de grandeur)","500000000", ""],
    /* Les deux unites "reacteur" ne suivent PAS la meme convention, et leurs
     * libelles le disent :
     *   - 1 heure a pleine puissance : 900 MW x 3 600 s, une puissance nominale
     *   - un an en production reelle : 21,55 TWh du Tricastin divises par ses
     *     4 reacteurs, soit 5,39 TWh
     * Le rapport entre les deux vaut 5 986 et non 8 760, ce qui est normal :
     * un reacteur ne tourne pas a pleine puissance toute l'annee (facteur de
     * charge d'environ 68 %). Sans ces mentions le resultat semblerait faux. */
    ["Un réacteur nucléaire pendant 1 h (pleine puissance)","3240000000000", ""],
    ["Data center OVH Roubaix 8 pendant 1 heure","61200000000", ""],
    ["Data center OVH Roubaix 8 pendant un an","536112000000000", ""],
    ["Un réacteur nucléaire pendant un an (production réelle)","19395000000000000", ""],
    ["Tous les data centers français pendant un an","36000000000000000", ""],
    ["Conso élec. annuelle de la France (2025)","1623600000000000000", ""],
]

AppConversions.AddGroup(category.value, "Grande échelle", "", conversions);

/* Energie PRODUITE, et non consommee. Toutes ces valeurs sont des productions
 * reelles constatees, pas des puissances nominales : une eolienne de 3 MW ne
 * produit pas 3 MW en continu, elle tourne a environ 26 % de facteur de charge.
 *   Panneau PV  : 240 kWh/m2/an (fourchette francaise 220-328 selon la region)
 *   Eolienne    : 6,9 GWh/an pour une 3 MW terrestre (donnees 2023)
 *   Tricastin   : 21,55 TWh/an, moyenne constatee 2015-2019, 4 x 915 MW
 * Les valeurs journalieres sont les annuelles divisees par 365. */
var conversions = [
    ["Panneau photovoltaïque de 1 m² pendant un jour","2367123", ""],
    ["Panneau photovoltaïque de 1 m² pendant un an","864000000", ""],
    ["Éolienne terrestre de 3 MW pendant un jour","68055000000", ""],
    ["Éolienne terrestre de 3 MW pendant un an","24840000000000", ""],
    ["Centrale du Tricastin pendant un jour","212550000000000", ""],
    ["Centrale du Tricastin pendant un an","77580000000000000", ""],
]

AppConversions.AddGroup(category.value, "Production d'énergie", "", conversions);
