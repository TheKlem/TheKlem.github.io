var category = {
    value:"DOSIMETRY", 
    title:"Dosimétrie: atome, radiations, Fukushima", 
    style:""
};

AppConversions.AddCategory(category.value, category.title, category.style);


var conversions = [
    ["Sievert (Sv)","1", ""],
["mSv","0.001", ""],
["nSv","0.000000001", ""],
["rem","0.01", ""],

]

AppConversions.AddGroup(category.value, "Unités SI", "", conversions);

var conversions = [
    ["Dose équivalente Banane (DEB)","0.00000012", "font-weight: bold; color: limegreen;"],
["Dose équivalente Noix du Brésil","0.0000007", ""],

]

AppConversions.AddGroup(category.value, "Fruits et Légumes", "", conversions);

var conversions = [
    ["Dose moyenne reçue/an par un français","0.00055", ""],
["Dose reçue/an pour un habitant proche d'une centrale nucléaire","0.000001", ""],
["Dose reçue/an à proximité (~80km) d'une centrale nucléaire","0.00000009", ""],
["Dose reçue/an à proxiité (~80km) d'une centrale à charbon","0.0000003", ""],
["Radiographie dentaire intra-orale","0.000005", ""],
["Radiographie pulmonaire","0.0001", ""],
["Tomodensitogramme typique des poumons","0.007", ""],
["Mammographie","0.0004", ""],
["Vol d'avion à travers l'Europe","0.00002", ""],
["Travailleur d'une mine d'Uranium ou d'une centrale nucléaire","0.001", ""],
["Exposition de Thomas Pesquet en mission","0.150", ""],
["Dose entraînant la maladie des rayons","1", ""],
["Dose fatale","8", ""],
["Dose reçue en dormant à côté de quelqu'un","0.0000005", ""],
["Dose reçue/an en habitant dans une maison en béton","0.00007", ""],
["Dose reçu à la mairie de Fukushima 2 semaines après l'incident","0.0001", ""],
["Dose annuelle de potassium dans le corps","0.00039", ""],
["Dose reçue par 2 opérateurs de la centrale de Fukushima","0.04", ""],
["2L/jour d'eau tritiée (par an)","0.000001", ""],
["Dose reçue par des survivants d'Hiroshima","0.0005", ""],
["Dose reçue par les pompiers de Tchernobyl","0.00025", ""],

]

AppConversions.AddGroup(category.value, "La vie de tous les jours", "", conversions);

var conversions = [
    ["Limite de dose Euratom","0.001", ""],
["Limite de dose Travailleur du nucléaire","0.05", ""],
["Limite de dose Travailleur du nucléaire sur 5 ans","0.1", ""],
]

AppConversions.AddGroup(category.value, "Limites légales", "", conversions);