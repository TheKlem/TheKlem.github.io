var category = {
    value:"MONEY", 
    title:"Argent: pèze, flouze, pognon, PIB, dette", 
    style:""
};

AppConversions.AddCategory(category.value, category.title, category.style);

var conversions = [
    ["euro","1", ""],
["Livre Sterling","0.879", ""],
["Dollar US","1.088", ""],
["Banane à l'unité","0.25", "font-weight: bold; color: limegreen;"],

   
    
]

AppConversions.AddGroup(category.value, "Unités standard", "", conversions);

var conversions = [
    ["Une Kerviel","5000000000", ""],
    ["Un cabinet de Brigitte Macron / an","315808", ""],
    ["Record de gains à EuroMillions","230000000", ""],
    ["Record de gains au Loto","26000000", ""],
    ["Record de gains à la loterie US","2040000000", ""],
    ["Kg de tabac en France (cigarettes en paquet)","687.5", ""],
    ["Bus electrique Irizar (dédicace Courier Picard)","690000", ""],
    ["Bus Irizar + bus diesel d'occassion en secours","713000", ""],
    ["WC parisien (1.5m2) en juillet 2023","16404", ""],
    ["WC marseillais (1.5m2) en juillet 2023","8620", ""],
    ["Emeutes de 2005","250000000", ""],
    ["Emeutes de 2023","700000000", ""],
    ["m2 de HLM (prix de revient moyen en 2020)","2325", ""],
    ["Plan Marshal (valeur de l'époque)","16500000000", ""],
    ["Plan Marshal (valeur actualisée)","130000000000", ""],
    ["Collecte annuelle Assurance-Vie en France","140000000000", ""],
    ["Dépenses militaires US / an","778000000000", ""],
    ["Dépenses annuelles OPéra de Paris","250000000", ""],
    ["Budget du Théatre de la Ville (Paris)","13000000", ""],
    ["Subvention publique au budget du Théatre de la Ville (Paris)","10700000", ""],
    ["JO Paris 2024","4000000000", ""],
    ["Budget Ecole Polytechnique (2,3K etudiants)","175000000", ""],
    ["Budget EPFL, Suisse (14K etudiants)","1250000000", ""],
    ["Budget Université Paris 8 (22K etudiants)","121100000", ""],
    ["Budget Université Lyon 3 (27K etudiants)","162000000", ""],
    ["Budget Université Stanford (7K etudiants)","4100000000", ""],
    ["Budget MIT (12K etudiants)","3000000000", ""],
    ["Budget Université Oxford (24K etudiants)","3400000000", ""],
]

AppConversions.AddGroup(category.value, "Divers", "", conversions);

var conversions = [
    ["SMIC mensuel net en France","1353.07", ""],
    ["SMIC mensuel brut en France","1709.28", ""],
    ["Salaire mensuel net moyen en France","2587", ""],
    ["SMIC mensuel net en France","1353.07", ""],
    ["SMIC mensuel brut en France","1709.28", ""],
    ["Salaire mensuel net moyen en France","2587", ""],
    ["Salaire mensuel net median en France","1850", ""],
    ["Salaire mensuel net moyen en Suisse","4684", ""],
    ["Salaire annuel brut moyen France","40600", ""],
    ["Salaire annuel brut moyen Allemagne","56000", ""],
    ["Salaire annuel brut moyen Suisse","64800", ""],
    ["Salaire annuel brut moyen USA","70123", ""],
]

AppConversions.AddGroup(category.value, "Salaires, revenus : des FLUX (coucou Oxfam)", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["Retraite mensuelle moyenne en France","1420", ""],
    ["Retraite mensuelle de Jean-Luc Mélenchon (source AN)","8500", ""],
    ["Salaire mensuel brut de Mbappé 2023-2026","6000000", ""],
    ["Salaire mensuel brut de Neymar","3675000", ""],
    ["Salaire mensuel de Messi","3375000", ""],
    ["Patrimoine net médian en France (2021)","124800", ""],
    ["Patrimoine net moyen des habitants de Paris (2021)","321500", ""],
    ["Patrimoine net moyen des 10% les plus riches en France (2021)","716300", ""],
    ["Prime de Mbappé pour rester au PSG","300000000", ""],
    ["Patrimoine de Jean-Luc Mélenchon","1465000", ""],
    ["Bernard Arnault (fortune de)","213000000000", ""],
    ["Elon Musk (fortune de)","180000000000", ""],
    ["Jeff Bezos (fortune de)","123300000000", ""],
    ["Bill Gates (fortune de)","104300000000", ""],
    ["Famille Hermès (fortune de)","137800000000", ""],
    ["Famille Wertheimer (fortune de)","100000000000", ""],
    ["Famille Bettencourt (fortune de)","80500000000", ""],
    ["Famille Mulliez (fortune de)","20000000000", ""],
    ["Tiger Woods (fortune de)","1100000000", ""],
    
    
]

AppConversions.AddGroup(category.value, "Fortunes : des STOCKS (rebonjour Oxfam)", "font-weight: bold; color: red;", conversions);


var conversions = [
    ["Cognac Hennessy XXO hors d'âge","950", ""],
    ["Cognac Hennessy XO Extra Old","250", ""],
    ["Cognac Hennessy VS ","47", ""],
    ["Louis Vuitton sac Neverfull","1850", ""],
    ["Louis Vuitton sac Alma","1500", ""],
    ["Hermès sac Birkin (prix moyen)","17000", ""],
    ["Boite de 30 g de Caviar Beluga","234", ""],
    ["Kg de ce Caviar Beluga","7800", ""],
    ["Kg de Caviar Sevruga","2480", ""],
    ["Bouteille d'eau la plus chère du monde","52000", ""],
    
]

AppConversions.AddGroup(category.value, "Luxe", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["avion Mirage 2000 5 (Dassault)","26000000", ""],
    ["avion Rafale (Dassault)","70000000", ""],
    ["avion Eurofighter Typhoon (BAe, Airbus Defense and Space)","12000000", ""],
    ["avion F-16 (General Dynamics)","200000000", ""],
    ["avion F-35 B (Lockheed)","1040000000", ""],
    ["avion F-35 C (Lockheed)","1160000000", ""],
    ["canon Cesar","8000000", ""],
    ["porte-avion Charles de Gaulle","10000000000", ""],
    ["VAB Ultima","1500000", ""],
    ["missile air-air Meteor","2000000", ""],
    ["missile air-air AIM-120 AMRAAM","2500000", ""],
    ["missile de croisière Tomahawk","800000", ""],
    ["hélicoptère Tigre HAD (Airbus)","37000000", ""],
    ["hélicoptère AH-64 Apache (Boeing)","52000000", ""],
    ["hélicoptère de transoport V-22 Osprey (Boeing-Bell)","73000000", ""],
    ["char Leclerc","6700000", ""],
    ["char Leopard 2","30000000", ""],
    ["char M1 Abrams","10000000", ""],
    ["missile anti-char FGM-148 Javelin (Raytheon )","78000", ""],
    ["missile anti-char Milan (Euromissile )","6000", ""],
    ["SNA classe Suffren","1250000000", ""],
    ["SNA classe Virginia","2500000000", ""],
    ["missile Sol-Air courte portée Mistral 2","170000", ""],
    ["missile Sol-Air courte portée FIM 92 Stinger","40000", ""],
    ["missile air-air AIM-132 ASRAAM (Matra-BAe)","400000", ""],
    ["missile air-air AIM-9X Sidewinder","380000", ""],
    ["missile air-air AIM-2000 IRIS-T (Diehl BGT Defence)","400000", ""],
    ["missile air-air MICA (MBDA)","1500000", ""],
    ["Missile Mer-Sol MIM-104 Patriot","3300000", ""],
    ["batterie Patriot","1000000000", ""],
    ["missile Mer-Sol balistique stratégique M51","120000000", ""],
    
]

AppConversions.AddGroup(category.value, "Equipements militaires", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["kilomètre de ligne de métro souterrain","90000000", ""],
    ["Stade de France","502000000", ""],
    ["Groupama Stadium (Lyon)","405000000", ""],

]

AppConversions.AddGroup(category.value, "Equipements civils, infrastructures", "font-weight: bold; color: red;", conversions);


var conversions = [
    ["Oeuf à l'unité en France (mars 2024)","0.45", ""],
    ["Oeuf à l'unité aux USA (mars 2023)","0.23", ""],
    ["Oeuf à l'unité aux USA (mars 2024)","0.61", ""],
    ["Coquillettes Panzani, 1kg","2.9", ""],
    ["Camembert -sans intérêt- Président","2.09", ""],
    ["Camembert -de qualité- Isigny","4.20", ""],
    ["Coca-Cola 1l","1.69", ""],
    ["Jambon 4 tranches Fleury Michon","2.69", ""],
    ["Boîte de 12 oeufs plein air Matines","2.95", ""],
    ["Big Mac en Suisse","6.23", ""],
    ["Big Mac en Norvège","5.7", ""],
    ["Big Mac aux USA","5.18", ""],
    ["Big Mac aux France","2.95", ""],
    ["Big Mac zone Euro","4.42", ""],
    ["Big Mac au Brésil","3.85", ""],
    ["Big mac en Thailande","3.43", ""],
    ["Big mac au Japon","3.02", ""],
    ["Big mac en Jordanie","2.67", ""],
    ["Big mac en Egypte","2.41", ""],
    ["Big mac en Afrique du Sud","2.30", ""],
    ["Big mac en Inde","2.27", ""],
    ["Big mac en Roumanie","2.14", ""],
    ["Big mac en Turquie","1.66", ""],
    ["Big mac en Russie","1.56", ""],
    
    
]

AppConversions.AddGroup(category.value, "Nourriture", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["CA de Qwant","10000000", ""],
    ["Pertes de Qwant","42000000", ""],
    ["CA de Microsoft","198000000000", ""],
    ["CA de Google","257640000000", ""],
    ["CA d'Amazon","386000000000", ""],
    ["CA Mondial LVMH","79184000000", ""],
    ["Résultat net LVMH","14084000000", ""],
    ["Fiscalité LVMH en France (IS, TVA, charges sociales)","4500000000", ""],
    
    
]

AppConversions.AddGroup(category.value, "Entreprises", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["Dette française","2300000000000", ""],
    ["Recette TVA 2022 (France)","170400000000", ""],
    ["Recette Impôt sur le Revenu 2022 (France)","106500000000", ""],
    ["Recette Impôt sur les Sociétés 2022 (France)","85300000000", ""],
    ["Recette Taxe produits énergetiques (France)","20000000000", ""],
    ["Contribution FR au budget Europe","24900000000", ""],
    ["PIB français","2958000000000", ""],
    ["PIB allemand","4260000000000", ""],
    ["Budget de la Justice, France","1250000000", ""],
    ["Budget Education nationale, France","81710000000", ""],
    ["Budget Enseignement Supérieur et recherche, France","26410000000", ""],
    ["Budget Armées, France","63990000000", ""],
    ["Budget Ville de Paris","10000000000", ""],
    ["Budget Ville de Lyon","892000000", ""],
    ["Budget Métropole de Lyon","3176000000", ""],
    ["Budget Ville de Lille","4978000000", ""],
    ["Budget Métropole de Lille","1996000000", ""],
    ["Budget Ville de Cannes","200348000", ""],
    ["Plan Borloo (2005-2009)","16257000000", ""],
    ["Plan Marshal (valeur de l'époque)","16500000000", ""],
    ["Plan Marshal (valeur actualisée)","130000000000", ""],
    ["Prestations sociales France / an","470000000000", ""],
    ["Plan Borloo (2005-2009)","16257000000", ""],
    ["Budget de l'Assemblée nationale 2024","620050000", ""],
    ["Budget du Sénat 2024","362150000", ""],
    ["Budget de l'Elysée 2024","125500000", ""],
    
]

AppConversions.AddGroup(category.value, "Finances publiques, collectivtés", "font-weight: bold; color: red;", conversions);

