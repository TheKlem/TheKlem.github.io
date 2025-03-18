var category = {
    value:"WEIGHT", 
    title:"Masse (le poids des moldus): pratique c'est tout !", 
    style:""
};

AppConversions.AddCategory(category.value, category.title, category.style);

var conversions = [
    ["Gramme","1", ""],
["Carat","0.2", ""],
["Banane","120", "font-weight: bold; color: limegreen;"],
["Livre (lb)","453.5", ""],
["Kilogramme","1000", ""],
["Quintal / Quintaux (Qt)","100000", ""],
["Tonne","1000000", ""],
["Once anglo-saxonne (oz)","28", ""],
["Once romaine","27.264", ""],
["Once française (Ancien Régime)","30.594", ""],
["Once troy (ozt)","31.1034768", ""],
["Once néerlandaise (ons)","100", ""],
]

AppConversions.AddGroup(category.value, "Unités standard", "", conversions);


var conversions = [
    ["Tomate cerise","10", ""],
["Grain de blé","0.05", ""],
["Blé tendre/ha en France 2022","7200000", ""],
["Blé dur/ha en France 2022","5300000", ""],
["Blé tendre/ha en agri conventionnelle","8000000", ""],
["Blé tendre/ha en France en  agri bio","3000000", ""],
["Blé nécessaire pour fabriquer 1kg de pain","800", ""],
["Blé nécessaire pour fabriquer 1 baguette","200", ""],
["Orge d'hiver/ha en France 2022","6600000", ""],
["Colza/ha en France 2022","3700000", ""],
["Tournesol/ha en France 2022","2100000", ""],
["Soja/ha en France 2022","2200000", ""],
["Maïs/ha en Illinois (USA) 2022","13431661.12", ""],
["Maïs grain irrigué/ha en France 2022","10300000", ""],
["Maïs grain non irrigué/ha en France 2022","7100000", ""],
["Meule de Comté (grande)","45000", ""],
["Laine produite par an par mouton","4500", ""],
["Phytosanitaires agri conventionnelle (Fce 2022)","43013000000", ""],
["Phytosanitaires agri bio (Fce 2022)","25000000000", ""],
["Un boisseau US de blé/soja","27210", ""],
["Un boisseau US de maïs","25400", ""],
]

AppConversions.AddGroup(category.value, "Agriculture", "", conversions);


var conversions = [
    ["Pièce de un centime","1.67", ""],
["Pièce de cinq centimes","3.92", ""],
["Pièce de un euro","7.5", ""],
["Pièce de deux euros","8.5", ""],
["Balle de ping-pong","2.7", ""],
["Cigarette","0.8", ""],
["Grain de riz","0.28", ""],
["Coquillette","0.07", ""],
["Spaghetti Barilla n°3","0.57012", ""],
["Cacahuète","1", ""],
["Mini-Carambar","3.5", ""],
["Dragibus","4.23", ""],
["Fraise Tagada","5.71", ""],
["Barre de Kinder Bueno","8.57"],
["Rouleau de reglisse Rotella", "21.25"],
["Nugget de poulet Macdo","18", ""],
["Tender de poulet KFC","40", ""],
["Oeuf de poule","60", ""],
["Cordon bleu Père Dodu","100", ""],
["Baton de berger, Justin Bridou","100", ""],
]

AppConversions.AddGroup(category.value, "Divers", "", conversions)


var conversions = [
    ["Herisson commun","120", ""],
["Ecureuil roux","330", ""],
["Marmotte des Alpes","3000", ""],
["Raton laveur","9000", ""],
["Lapin nain","1250", ""],
["Lapin géant des Flandres","8000", ""],
["Grizzli","180000", ""],
["Ours blanc","450000", ""],
["Pigeon parisien","310", ""],
["Chihuahua","1500", ""],
["Basset Hound femelle","27000", ""],
["Basset Hound mâle","34000", ""],
["Bouvier Bernois femelle","50000", ""],
["Bouvier Bernois mâle","60000", ""],
["Dogue du Tibet","80000", ""],
["Poney Shetland","180000", ""],
["Cheval Percheron","850000", ""],
["Grand Requin Blanc","890000", ""],
["Elephant d'Afrique mâle","6000000", ""],
["Elephant d'Asie mâle","4000000", ""],

]


AppConversions.AddGroup(category.value, "Animaux" , "",conversions)


var conversions = [
    ["Kate Moss à 20 ans","45000", ""],
["Emily Ratajkowsi","52000", ""],
["Charlie Chaplin","62000", ""],
["Tom Cruise","68000", ""],
["Beyoncé","69000", ""],
["Emmanuel Macron","70000", ""],
["Novak Djokovic","77000", ""],
["DrScratch","80000", ""],
["Carlos Alcaraz","81000", ""],
["Rafael Nadal","85000", ""],
["Roger Federer","85000", ""],
["Mike Tyson","105000", ""],
["Mohamed Ali","107000", ""],

]

AppConversions.AddGroup(category.value, "Personnes" , "",conversions)

var conversions = [
    ["2 CV","520000", ""],
    ["Twingo","981000", ""],
    ["Kangoo 3","1475000", ""],
    ["Tesla Modèle 3","1800000", ""],
    ["Tesla Modèle S","2100000", ""],
    ["Tesla Modèle X","2400000", ""],
    ["Ford F-Series","2363000", ""],
    ["Ram Pickup","2177000", ""],
    ["Paquebot Titanic","46000000000", ""],
    ["Paquebot Le France","55000000000", ""],
    ["Paquebot Costa Concordia","114000000000", ""],
    ["Porte Avions Charles de Gaulle","75000000000", ""],
    ["Porte Avions USS Gerald Ford","100000000000", ""],
    ["Sous-marin Le Redoutable","9500000000", ""],
    ["Camion poubelle","26000000", ""],
    ["Boeing 737 à vide","66000000", ""],
    ["Boeing 747 à vide","183500000", ""],
    ["Boeing 747-8 à vide","442000000", ""],
    ["Airbus A320 à vide","40300000", ""],
    ["Airbus A330 à vide","120000000", ""],
    ["Rafale","9979000", ""],

]

AppConversions.AddGroup(category.value, "Véhicules" , "",conversions)

var conversions = [
    ["Tour Montparnasee","150000000000", ""],
    ["Empire State Building","365000000000", ""],
    ["Tour Eiffel","10100000000", ""],
    ["Pyramide de Gizeh","5750000000000", ""],

]

AppConversions.AddGroup(category.value, "Monuments" , "",conversions)