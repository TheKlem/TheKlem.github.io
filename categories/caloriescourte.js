var category = {
    value:"CALORIES", 
    title:"Calories (l'énergie du corps): liste courte.", 
    style:""
};

AppConversions.AddCategory(category.value, category.title, category.style);

var conversions = [
    ["Calorie","1", ""],
["banane","89", "font-weight: bold; color: limegreen;"],
["minute de sexe (hommes)","4.2", ""],
["minute de sexe  (femmes)","3.1", ""],
["verre de Margarita","139", ""],
["heure de fonctionnement du cerveau","13.4", ""],
["un sucre","16", ""],
["un croissant au beurre","220", ""],
["un pain au chocolat","300", ""],
["une baguette (250g)","700", ""],
["une pomme","54", ""],
["	Kinder-Bueno (22g)","122	", ""],
["	cuillère à soupe de mayonnaise (30g)","220	", ""],
["	cuillère à soupe de Nutella (30g)","160	", ""],
["	un hérisson (12g)","52	", ""],
["	un kebab fritte","1000	", ""],
["	100g de Fruits","	50	", ""],
["	100g de Biscuits apéritifs","	540	", ""],
["	100g de Boeuf","	540	", ""],
["	100g de Veau","	170	", ""],
["	100g de Mouton","	250	", ""],
["	100g de Porc","	320	", ""],

]

AppConversions.AddGroup(category.value, "Unités essentielles", "font-weight: bold; color: red;", conversions);

var conversions = [

["	heure de Marche  (5km/h)	","	232	", ""],
["	heure de Randonnée (montagne)","	493	", ""],
["	heure de Course à pied (9 à 10km/h)","	704	", ""],
["	heure de Course à pied rapide (15 km/h)","	1056	", ""],
["	heure de Vélo vitesse modérée (20 à 25 km/h)","	563	", ""],
["	heure de Vélo vitesse rapide (Plus de 25km/h)","	844	", ""],
["	heure de Vélo elliptique","	648	", ""],
["	heure de Musculation	","	422	", ""],
["	heure de fitness","	598	", ""], 
["	heure de Rameur ","	493	", ""],
["	heure de Corde à sauter","	704	", ""],
["	heure de Boxe","	844	", ""],
["	heure de Golf","	317	", ""],
["	heure de Natation ","	493	", ""],
["	heure de Tennis","	493	", ""],
["	heure de Yoga","	176	", ""],
["	heure de Ménage","	246	", ""],
["	heure de Bricolage","	246	", ""],
["	heure de Jardinage","	281	", ""],
["	heure de lecture","	80	", ""],
["	heure de cuisine","	140	", ""],
]

AppConversions.AddGroup(category.value, "Activité physique (personne de 70kg)", "font-weight: bold; color: red;", conversions);

var conversions = [
    ["	Demi de bière (25 cl)	","	97	", ""],
["	Café (10 cl)	","	15	", ""],
["	Calvados (verre 4 cl)	","	100	", ""],
["	Coupe de Champagne	","	70	", ""],
["	Cidre brut (bolée 25 cl)	","	77	", ""],
["	Coca cola (verre 25 cl)	","	100	", ""],
["	Cognac (verre 4 cl)	","	192	", ""],
["	Mojito	","	100	", ""],
["	Orangina (verre 15 cl)	","	71	", ""],
["	Rhum (verre 4 cl)	","	154	", ""], 
["	Ricard (dose 4 cl)	","	130	", ""],
["	Vin (verre 15 cl)	","	108	", ""],
["	Vodka (4 cl)	","	100	", ""],
["	Whisky (verre 8 cl)	","	384	", ""],

]

AppConversions.AddGroup(category.value, "Alcools & Spiritueux" , "font-weight: bold; color: red;",conversions);

var conversions = [

    ["	Agneau (côtelettes)	 100g	","	330	", ""],
["	Agneau (gigot)	 100g	","	250	", ""],
["	Andouille et andouillette	 100g	","	300	", ""],
["	Bacon	 100g	","	200	", ""],
["	Boeuf	 100g	","	200	", ""],
["	Rognons de boeuf	 100g	","	125	", ""],
["	Canard	 100g	","	250	", ""],
["	Charcuterie	 100g	","	450	", ""],
["	Dinde, viande rôtie	 100g	","	160	", ""],
["	Foie gras	 100g	","	450	", ""],
["	Hamburger	 100g	","	560	", ""],
["	Hot-dog 100g ","	400	", ""],
["	Jambon cru	 100g	","	330	", ""],
["	Jambon cuit	 100g	","	290	", ""],
["	Lard	 100g	","	575	", ""],
["	Merguez	 100g	","	520	", ""],
["	Mouton (gigot)	 100g	","	250	", ""],
["	Œuf 100g	","	900	", ""],
["	Pâtés	 100g	","	450	", ""],
["	Porc	 100g	","	320	", ""],
["	Saucisse (porc)	 100g	","	330	", ""],
["	Saucisson (porc))	 100g	","	440	", ""],
["	Poulet	 100g	","	150	", ""],
["	Tartare (steack)	 100g	","	200	", ""],
["	Tripes	 100g	","	94	", ""],
["	Veau	 100g	","	170	", ""],

]

AppConversions.AddGroup(category.value, "Viandes", "font-weight: bold; color: red;", conversions);


var conversions = [

    ["	Foie gras	 100g	","	450	", ""],
["	Pâté de campagne	 100g	","	455	", ""],
["	Rillettes	 100g	","	250	", ""],
["	Saucisse pur porc	 100g	","	330	", ""],
["	Saucisson pur porc	 100g	","	440	", ""],

]

AppConversions.AddGroup(category.value, "Charcuterie", "font-weight: bold; color: red;", conversions);

var conversions = [

["	Cabillaud ou morue 100g","	79	", ""],
["	Calmar, encornet, poulpe 100g","	89	", ""],
["	Caviar 100g","	275	", ""],
["	Colin ou merlu 100g","	92	", ""],
["	Homard, langouste 100g","	80	", ""],
["	Huîtres, moules, Saint-Jacques 100g","	70	", ""],
["	Poissons fumés 100g","	265	", ""],
["	Poissons gras 100g","	180	", ""],
["	Poissons maigres 100g","	75	", ""],
["	Poissons panés 100g","	175	", ""],
["	Poissons séchés 100g","	320	", ""],
["	Saumon frais 100g","	200	", ""],
["	Saumon fumé 100g","	265	", ""],
["	Thon frais 100g","	225	", ""],

]

AppConversions.AddGroup(category.value, "Poissons et crustacés" , "font-weight: bold; color: red;",conversions);


var conversions = [
    ["	Flageolets, lentilles, haricots rouges 100g","	100	", ""],
["	Maïs 100g","	54	", ""],
["	Avocat 100g","	160	", ""],
["	Brocolis, carottes 100g","	35	", ""],
["	Champignon, Chou-fleur, aubergine, courgette, haricots verts 100g","	25	", ""],
["	Laitue, cocombre, radis 100g","	15	", ""],
["	Pâtes et riz 100g","	150	", ""],
["	Pain blanc 100g","	270	", ""],
["	Pomme de terre cuite 100g","	90	", ""],

]

AppConversions.AddGroup(category.value, "Légumes et féculents" , "font-weight: bold; color: red;",conversions);

var conversions = [
    ["	Noix de cajou 100g","	612	", ""],
["	Amandes	 100g","	639	", ""],
["	Noisettes 100g","	680	", ""],
["	Noix 100g","	709	", ""],
["	Pistaches 100g","	608	", ""],

]

AppConversions.AddGroup(category.value, "Noix et fruits secs" , "font-weight: bold; color: red;",conversions);

var conversions = [
    ["	Brioche	 100g","	386	", ""],
["	Brownie	 100g","	400	", ""],
["	Cookie au chocolat	 100g","	500	", ""],
["	Confiture 100g","	250	", ""],
["	Croissant 100g","	250	", ""],
["	Pain au chocolat 100g","	300	", ""],
["	Pâte à tartiner au chocolat	 100g","	550	", ""],
["	Pain blanc 100g	","	270	", ""],
["	Pain complet au levain 100g	","	234	", ""],

]

AppConversions.AddGroup(category.value, "Boulangerie" , "font-weight: bold; color: red;",conversions);

var conversions = [
    ["	Beurre	 100g","	750	", ""],
["	Huiles	 100g","	900	", ""],
["	Margarine	 100g","	755	", ""],

]

AppConversions.AddGroup(category.value, "Graisses" , "font-weight: bold; color: red;",conversions);

var conversions = [
    ["	Crème fraîche	 100g","	290	", ""],
["	Fromage de chèvre	 100g","	230	", ""],
["	Fromages de vache	 100g","	330	", ""],
["	Fromages pâte dure	 100g","	390	", ""],
["	Bleus	 100g","	410	", ""],
["	Lait	 100g","	47	", ""], 
["	Mozzarella	 100g","	330	", ""],
["	Lait 1/2 écrémé	 100g","	49	", ""],
["	Lait entier	 100g","	65	", ""],
["	Apéricube (à l’unité)	","	16	", ""],

]

AppConversions.AddGroup(category.value, "Produits laitiers" , "font-weight: bold; color: red;",conversions);



