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
    
]

AppConversions.AddGroup(category.value, "Unités standard", "font-weight: bold; color: red;", conversions);

