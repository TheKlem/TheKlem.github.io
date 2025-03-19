var category = {
    value:"DISTANCE", 
    title:"Longueurs / Distances: manifs, bouchons, voyages!", 
    style:""
};

AppConversions.AddCategory(category.value, category.title, category.style);

var conversions = [
    ["Centimètres","0.01", ""],
    ["Mètre(s)","1", ""],
    ["Kilometre(s)","1000", ""],
    ["Miles(s) ","1609", ""],
    ["Mile(s) nautique(s)","1852", ""],
    ["Pied grec","0.2972", ""],
    
]

AppConversions.AddGroup(category.value, "Unités standard", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["Pouce ","0.02722", ""],
    ["Pied-du-roi ","0.32660", ""],
    ["Toise ","1.959", ""],
    ["Lieue de Paris (avant 1674)","3248", ""],
    ["Lieue de Paris (après 1674)","3898", ""],
    ["Lieue des Postes (1674-1793)","4288", ""],
    ["Lieue métrique ","4000", ""],
    ["Lieue espagnole ","4180", ""],
    ["Lieue belge ","5000", ""],
    ["Lieue Anglaise (English land league) ","4828", ""],
    ["Lieue marine ","5555", ""],
    
]

AppConversions.AddGroup(category.value, "Unités anciennes", "font-weight: bold; color: red;", conversions);

