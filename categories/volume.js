
var category = {
                value:"VOLUME", 
                title:"Contenances et volumes: pour soirées arrosées", 
                style:""
};

AppConversions.AddCategory(category.value, category.title, category.style);


var conversions = [
    ["mm3","0.000001", ""],
    ["cm3","0.001", ""],
    ["dm3","1", ""],
    ["m3","1000", ""],
    ["hm3 (hectometre cube)","1000000000", ""],
    ["km3","1000000000000", ""],
    ["Banane","0.113", "font-weight: bold; color: limegreen;"]
]

AppConversions.AddGroup(category.value, "Unités standard", "", conversions);


var conversions = [
    ["millilitre","0.001", ""],
    ["centilitre","0.01", ""],
    ["décilitre","0.1", ""],
    ["litre","1", ""],
    ["hectolitre","100", ""],
    ["Cuillère à café","0.005", ""],
    ["Cuillère à soupe","0.014", ""],
    ["Tasse (fr) ou chopine (ca)","0.237", ""],
]

AppConversions.AddGroup(category.value, "Unités de cuisine", "", conversions);



var conversions = [
    ["Galopin","0.125", ""],
    ["Demi","0.25", ""],
    ["Pinte (US Pint)","0.473176", ""],
    ["Pinte (UK Pint)","0.568", ""],
    ["Chopine","0.375", ""],
    ["Bouteille de vin standard","0.75", ""],
    ["Bouteille d'Evian","1.5", ""],
    ["Jéroboam ","3", ""],
    ["Réhoboam ","4.5", ""],
    ["Mathusalem ","6", ""],
    ["Salmanazar ","9", ""],
    ["Balthazar ","12", ""],
    ["Nabuchodonosor  ","15", ""],
    ["Melchior  ","18", ""],
]

AppConversions.AddGroup(category.value, "Verres et Bouteilles", "", conversions);



var conversions = [
    ["Dé à coudre","0.004", ""],
    ["Éjaculat d'un humain","0.003", ""],
    ["Éjaculat d'un taureau","0.007", ""],
    ["Éjaculat d'un étalon","0.070", ""],
    ["Éjaculat du lion","0.250", ""],
    ["Éjaculat de la baleine bleue","20", ""],
    ["Gallon (US Gallon)","3.78541", ""],
    ["Baril de pétrole","159", ""],
    ["Notre-Dame de Paris","100000000", ""],
    ["Notre-Dame d'Amiens","200000000", ""],
    ["Pyramide de Kheops","2592341000", ""],
    ["Toilettes (par chasse tirée)","10", ""],
    ["Toilettes double-flux (par chasse tirée)","5", ""],
    ["Lave-vaisselle (par cycle de lavage)","15", ""],
    ["Lave-linge (par cycle de lavage)","50", ""],
    ["Douche","70", ""],
    ["Bain","126", ""],
    ["Production d'urine / vache / jour","15", ""],
    ["Montgolfière","2200", ""],
    ["Piscine municpale (25x12,5x2m)","600000", ""],
    ["Piscine olympique (50x25x3m)","3750000", ""],
    ["Mega bassine de Sainte-Soline","650000000", ""],
    ["Bassin de La Vilette","127218000", ""],
    ["Canal de l'Ourq","56940000", ""],
    ["Lac du Bourget","3620300000000", ""],
    ["Lac d'Annecy","1124000000000", ""],
    ["Lac Leman","89000000000000", ""],
    ["Lac du Drennec (Bretagne)","8700000000", ""],
    ["Lac du Graon (Vendée)","3600000000", ""],
    ["Lac de Serre-Ponçon","1272000000000", ""],
    ["Etang de saint-Quentin en Yvelines","3000000000", ""],
    ["Etang de Berre","980000000000", ""],
    ["Etang de Cazaux (Gironde)","500000000000", ""],
    ["Grand Bassin du chateau de Versailles","460000000", ""],
    ["Pièce d'eau des Suisses (Chateau de Versailles)","288000000", ""],
    ["Mer Méditerannée","3765000000000000000", ""],
    ["Trou Mélanchonien dans les Alpes","120", ""],
    ["Débit/sec de la Seine (à Paris)","500000", ""],
    ["Débit/sec du Rhône (à Beaucaire)","1690000", ""],
    ["Consommation eau potable par personne/an (France)","54750", ""],
    ["Eau utilisée pour refroidir les centrales nucléaires/an","5300000000000", ""],
    ["Eau potable perdue /an (fuites réseau distribution)","1000000000000", ""],
    ["Eau potable fournie /an par le réseau de distribution","5000000000000", ""],
    ["Eau apportée par la pluie et la neige en France/an","503000000000000", ""],
    ["Eau évaporée en France/an","314000000000000", ""],
    ["Eau renouvelable en France/an","200000000000000", ""],
]

AppConversions.AddGroup(category.value, "Tout le reste", "", conversions);