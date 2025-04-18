var category = {
    value:"SURFACE", 
    title:"Surfaces: agriculture, architecture...", 
    style:""
};

AppConversions.AddCategory(category.value, category.title, category.style);

var conversions = [
    ["m2","1", ""],
["Square feet (sd ft)","0.0929", ""],
["ares","100", ""],
["toise carrée","3.8", ""],
["vergée","1276", ""],
["arpent","5107", ""],
["hectare","10000", ""],
["km2","1000000", ""],
["acres","4046.85", ""],
    
]

AppConversions.AddGroup(category.value, "Unités standard", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["Banane","0.003", "font-weight: bold; color: limegreen;"],
["Pièce de 1 euro","0.000541", ""],
["Carte de visite classique","0.0048", ""],
["Carte à jouer","0.00522", ""],
["Carte de Tarot","0.00672", ""],
["Pleïade","0.01925", ""],
["Livre de poche","0.0198", ""],
["Feuille A4","0.0623", ""],
["Format Berlinois (Le Mondde, L'Humanité...)","0.1504", ""],
["Format Tabloïd (The Sun, Libération...)","0.23575", ""],
["Logement moyen en France","91", ""],
["Logement moyen en France (proprétaire)","109", ""],
["Logement moyen en France (locataire)","68", ""],
]

AppConversions.AddGroup(category.value, "Objets et divers", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["Table de ping-pong","4.183", ""],
["Tatami","1.6562", ""],
["Terrain de pétanque","60", ""],
["Terrain de badminton","69.68", ""],
["Terrain de tennis","195.629", ""],
["Terrain de basket","420", ""],
["Terrain de handball","195.629", ""],
["Terrain de football","7266", ""],
["Terrain de Golf 18 trous","500000", ""],

]

AppConversions.AddGroup(category.value, "Sports", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["Eolienne, emrpise au sol (2MW)","2000", ""],
["Eolienne, emprise physique (2MW)","20000", ""],
["Exploitation agricole moyenne en France","690000", ""],
["Exploitation agricole moyenne DOM-TOM","50000", ""],
["Exploitation viticole moyenne en Champagne","54000", ""],
["Exploitation viticole moyenne en Bourgogne","85000", ""],
["Exploitation viticole moyenne en Bordelais","170000", ""],
["Exploitation viticole moyenne en Espagne","18000", ""],
["Exploitation viticole moyenne en Italie","20000", ""],
["Exploitation viticole moyenne en Californie","300000", ""],
["Mega Bassine de Sainte-Soline","100000", ""],

]

AppConversions.AddGroup(category.value, "Agriculture", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["Ikea Grand Parilly","40000", ""],
["Le Bon Marché, Paris","10000", ""],
["Galerie Lafayette, Paris","70000", ""],
["Parc des expositions de Villepinte","46000", ""],
["Casino Mandala Bay, Las Vegas, surface jeux","12541", ""],
["Parc Asterix","340000", ""],
["Disneyland Paris","22300000", ""],
["Le Louvre, surface au sol","360000", ""],
["Le Louvre, surface de plancher","243000", ""],
["Le Louvre, surface visitable","60000", ""],
["Chateau de Versaille, surface de plancher","63154", ""],
["Chateau de Versaille, surface totale","8150000", ""],
["Notre-Dame de Paris","6000", ""],
["Notre-Dame d'Amiens","7700", ""],
["Pyramide de Khéops","52900", ""],
["Aéroport Roissy Charles de Gaulle","32380000", ""],

]

AppConversions.AddGroup(category.value, "Monuments et bâtiments", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["Place du Trocadéro","21000", ""], 
    ["Place de l'Etoile","45500", ""], 
    ["Place de la Concorde","86400", ""],
    ["Place Bellecour, Lyon","62000", ""],
    ["Place Rouge, Moscou","23100", ""],
    ["Place du Tien An Men, Pekin","400000", ""],
    ["Cimetière du Pêre Lachaise","439300", ""],
    ["Ensemble des cimetières parisiens","926600", ""],
    ["Cîté des morts, Le Caire","7000000", ""],
    ["Champs de mars","245000", ""],
    ["Bois de Boulogne","8460000", ""],
    ["Bois de Vincennes","9950000", ""],
    ["Forêt de Fontainebleau","177020000", ""],
    ["Parc Monceau (Paris)","80000", ""],
    ["Parc de la Tête d'or (Lyon)","1050000", ""],
    ["Central Park","3410000", ""],
["Vatican","440000", ""],
["Las Vegas","352000000", ""],
["Paris","105000000", ""],
["Lyon","48870000", ""],
["Marseille","240600000", ""],
["Normandie","30627000000", ""],
["France","550000000000", ""],
["Suisse","41285000000", ""],
["Superficie terrestre : terres émergées","148000000000000", ""],
["Superficie terrestre : oceans et mers","362000000000000", ""],
["Superficie  terrestre","510000000000000", ""],

]

AppConversions.AddGroup(category.value, "Géographie", "font-weight: bold; color: red;", conversions);