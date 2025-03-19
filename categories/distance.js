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

var conversions = [
    ["Rocco Sifredi ****","0.24", ""],
    ["Mimie Mathy","1.32", ""],
    ["Nicolas Sarkozy","1.66", ""],
    ["Tony Parker","1.88", ""],
    ["Charles de Gaulle","1.96", ""],
    ["Rudy Gobert","2.15", ""],
    ["Tom Cruise","1.7", ""],
    ["Beyoncé","1.69", ""],
    ["Emmanuel Macron","1.7", ""],
    ["Novak Djokovic","1.88", ""],
    ["Carlos Alcaraz","1.85", ""],
    ["Rafael Nadal","1.85", ""],
    ["Roger Federer","1.85", ""],
    ["Yannick Noah","1.93", ""],
    ["Joakim Noah","2.11", ""],

]

AppConversions.AddGroup(category.value, "Personnes", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["Balle de ping-pong","0.04", ""],
["Balle de golf","0.044", ""],
["Balle de tennis","0.0668", ""],
["Banane","0.16", "font-weight: bold; color: limegreen;"],
["Noix de coco","0.25", ""],
["Concombre","0.30", ""],
["Coton Tige","0.075", ""],
["Schtroumpf","0.05", ""],
["Manneken-Pis","0.55", ""],
["Intestin grêle","5.50", ""],
["Etage (immeuble hausmanien)","3.20", ""],
["Terrain de foot","105", ""],
["Arc de Triomphe","105", ""],
["Notre-Dame de Paris (ss voutes)","35", ""],
["Notre-Dame d'Amiens (ss voutes)","42.30", ""],
["Pyramide de Khéops (hauteur)","138", ""],
["Tour Eiffel","300", ""],
["Empire State Building","381", ""],
["Burj Khalifa(Dubaï)","828", ""],
["Du capitole -&gt; Roche tarpeienne","250", ""],
["Pont de Normandie (max)","2141", ""],
["Nation -&gt; Opera","5440", ""],
["Bastille -&gt; Nation","2180", ""],
["Champs Elysées","1910", ""],
["Mont-Blanc","4807", ""],
["Everest","8849", ""],
["Mont-Saint-Michel -&gt; Bretagne","4500", ""],
["Nantes -&gt; Bretagne","60000", ""],
["Largeur du Canal de Panama","150", ""],
["Longeur du Canal de Panama","80000", ""],
["Manhattan (longeur)","21700", ""],
["Détroit d'Ormuz","40000", ""],
["Calais -&gt; Douvres","50000", ""],
["Brest -&gt; Strasbourg","900680", ""],
["Paris -&gt; NewYork","5836000", ""],
["Tour de la Terre","40075000", ""],
["Terre -&gt; Lune","384400000", ""],
["Terre -&gt; Mars","62100000000", ""],
["Terre -&gt; Soleil","149000000000", ""],

]

AppConversions.AddGroup(category.value, "Divers", "font-weight: bold; color: red;", conversions);