$(document).ready(function(){
	
//////Leaflet
	var map = new L.Map('map');
	
	var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/d895100ab0a14523b3a3b34b6819e123/997/256/{z}/{x}/{y}.png',
    cloudmadeAttrib = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18, attribution: cloudmadeAttrib});
	
	var sydney = new L.LatLng(-33.859972, 151.211111); // geographical point (longitude and latitude)
	map.setView(sydney, 13).addLayer(cloudmade);
	
	//Set up popup containing information and instructions
	//Popup and map load at the same time
	
	var welcomePopup = new L.Popup();
	welcomePopup.setLatLng(new L.LatLng(-33.859972, 151.211111));
	welcomePopup.setContent("<b>Welcome to a brief tour of Sydney!</b>" +
							"<p>Click any of the markers to learn more about Sydney.  Click the &quot;X&quot; to close each pop up.</p>");
	
	map.openPopup(welcomePopup); 
	
	//Set up map markers
	
	//Sydney Olympic Park
	var olympicPark = new L.LatLng(-33.84801, 151.06488);
	
	var olympicParkMarker = new L.Marker(olympicPark);
	map.addLayer(olympicParkMarker);
	olympicParkMarker.bindPopup("<b>Sydney Olympic Park</b>" + 
								"<img src=\"http://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stadium_Australia_2.jpg/320px-Stadium_Australia_2.jpg\">" + 
								"<p>Home of the 2000 Olympics. The facilities built continue to be used for sporting and cultural events, as well as commercial development and extensive parklands.</p>",
								{ maxWidth: 358 });
	
	//Sydney Opera House
	var sydneyOperaHouse = new L.LatLng(-33.858667, 151.214028);
	
	var sydneyOperaHouseMarker = new L.Marker(sydneyOperaHouse);
	map.addLayer(sydneyOperaHouseMarker);
	sydneyOperaHouseMarker.bindPopup("<b>Sydney Opera House</b>" +
									 "<img src=\"http://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Sydney_opera_house_side_view.jpg/320px-Sydney_opera_house_side_view.jpg\" alt=\"Sydney Opera House\">" +
									 "<p>The Sydney Opera House is a multi-venue performing arts centre. As one of the busiest performing arts centres in the world, it hosts over 1,500 performances each year attended by some 1.2 million people, and more than seven million tourists visiting the site each year, 300,000 of whom take a guided tour.</p>",
									 { maxWidth: 358 });
	
	//Sydney Harbour Bridge
	var sydneyHarbourBridge = new L.LatLng(-33.852222, 151.210556);
	
	var sydneyHarbourBridgeMarker = new L.Marker(sydneyHarbourBridge);
	map.addLayer(sydneyHarbourBridgeMarker);
	sydneyHarbourBridgeMarker.bindPopup("<b>Sydney Harbour Bridge</b>" +
										"<img src=\"http://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sydney_Harbour_Bridge_from_Circular_Quay.jpg/320px-Sydney_Harbour_Bridge_from_Circular_Quay.jpg\" alt=\"Sydney Harbour Bridge\">" +
										"<p>Crosses the harbour from the The Rocks to North Sydney. There are many different experiences centred around the bridge. You can walk or cycle across, picnic under, or climb over the Harbour Bridge.</p>", 
										{ maxWidth: 358 });
	
	//Darling Habour
	var darlingHarbour = new L.LatLng(-33.8723, 151.19896);
	
	var darlingHarbourMarker = new L.Marker(darlingHarbour);
	map.addLayer(darlingHarbourMarker);
	darlingHarbourMarker.bindPopup("<b>Darling Harbour</b>" +
								   "<img src=\"http://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sydney_sunset_darling_harbour.jpg/320px-Sydney_sunset_darling_harbour.jpg\" alt=\"Darling Harbour\">" +
								   "<p>A large tourist precinct that includes a range of activities, restaurants, museums and shopping facilities.</p>",
								   { maxWidth: 358 });
	
	//St Mary's Cathedral
	var cathedral = new L.LatLng(-33.871133, 151.213208);
	
	var cathedralMarker = new L.Marker(cathedral);
	map.addLayer(cathedralMarker);
	cathedralMarker.bindPopup("<b>St. Mary's Cathedral</b>" +
							  "<img src=\"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/StMarysCathedral_fromHydePark.JPG/320px-StMarysCathedral_fromHydePark.JPG\" alt=\"St. Mary's Cathedral\">" +
							  "<p>Sydney's main catholic cathedral.  The cathedral is dedicated to \"Mary, Help of Christians\", Patron of Australia.</p>",
							  { maxWidth: 358 });
	
	//Sydney Tower Eye
	var sydneyTower = new L.LatLng(-33.870456, 151.208889);
	
	var sydneyTowerMarker = new L.Marker(sydneyTower);
	map.addLayer(sydneyTowerMarker);
	sydneyTowerMarker.bindPopup("<b>Sydney Tower Eye</b>" +
								"<img src=\"http://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Centrepoint_evening_blues.jpg/159px-Centrepoint_evening_blues.jpg\" alt=\"Sydney Tower Eye\">" +
								"<p>The tallest structure in Sydney. The tower contains a buffet, cafe and a rather large restaurant and attracts many visitors a year.</p>",
								{ maxWidth: 278 });
	
	//Royal Botanic Gardens
	var botanicGardens = new L.LatLng(-33.863889, 151.216944);
	
	var botanicGardensMarker = new L.Marker(botanicGardens);
	map.addLayer(botanicGardensMarker);
	botanicGardensMarker.bindPopup("<b>Royal Botanic Gardens, Sydney</b>" +
								   "<img src=\"http://upload.wikimedia.org/wikipedia/commons/1/1f/Sydney_Royal_Botanic_Gardens_01.jpg\" alt=\"Royal Botanic Gardens, Sydney\" width=320>" +
								   "<p>The gardens are at the north eastern corner of the City Centre and overlook Sydney harbour. The gardens cover 30 hectares and represent 7500 species of plants</p>",
								   { maxWidth: 358 });
	
	//Luna Park
	var lunaPark = new L.LatLng(-33.848222, 151.209972);
	
	var lunaParkMarker = new L.Marker(lunaPark);
	map.addLayer(lunaParkMarker);
	lunaParkMarker.bindPopup("<b>Luna Park, Sydney</b>" +
							 "<img src=\"http://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/03.01.2009-luna_entrance2.jpg/320px-03.01.2009-luna_entrance2.jpg\" alt=\"Luna Park, Sydney\">" +
							 "<p>Luna Park is a large theme park situated near the Sydney Harbour Bridge. Its mouth-shaped entrance and ferris wheel can be seen from many areas of Sydney.</p>",
							 { maxWidth: 358 });
	
	//Sydney Aqaurium
	var sydneyAquarium = new L.LatLng(-33.869444, 151.201944);
	
	var sydneyAquariumMarker = new L.Marker(sydneyAquarium);
	map.addLayer(sydneyAquariumMarker);
	sydneyAquariumMarker.bindPopup("<b>Sydney Aquarium</b>" + 
								   "<img src=\"http://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sydney_Aquarium.jpg/320px-Sydney_Aquarium.jpg\">" + 
								   "<p>Located in New South Wales and open to the public, the aquarium contains a large variety of Australian aquatic life, displaying more than 650 species comprising more than 6,000 individual fish and other sea creatures.</p>",
								   { maxWidth: 358 });
								   
	//The Rocks
	var theRocks = new L.LatLng(-33.85985, 151.20901);
	
	var theRocksMarker = new L.Marker(theRocks);
	map.addLayer(theRocksMarker);
	theRocksMarker.bindPopup("<b>The Rocks</b>" + 
							 "<img src=\"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/SydneyTheRocks1_gobeirne.jpg/320px-SydneyTheRocks1_gobeirne.jpg\">" +
							 "<p>The Rocks is Syndey's historic area and includes sites preserved from Sydney's earliest settlements in 1788.</p>",
							 { maxWidth: 358 });
							 
	//Taronga Zoo
	var tarongaZoo = new L.LatLng(-33.843333, 151.241111);
	
	var tarongaZooMarker = new L.Marker(tarongaZoo);
	map.addLayer(tarongaZooMarker);
	tarongaZooMarker.bindPopup("<b>Taronga Zoo</b>" +
							   "<img src=\"http://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Taronga_Park_Zoo_-7Sept2008.jpg/240px-Taronga_Park_Zoo_-7Sept2008.jpg\">" +
							   "<p>Taronga Zoo is home to over 2,600 animals on 21 hectares.  Daily activities include bird and seal shows, up-close encounters with animals such as giraffes and koalas, and talks with animal trainers.</p>",
							   { maxWidth: 278 });
	
	//Sydney Cove 
	var sydneyCove = new L.LatLng(-33.858611, 151.211667);
	
	var sydneyCoveMarker = new L.Marker(sydneyCove);
	map.addLayer(sydneyCoveMarker);
	sydneyCoveMarker.bindPopup("<b>Sydney Cove</b>" +
							   "<img src=\"http://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Circularkey.jpg/320px-Circularkey.jpg\">" +
							   "<p>Sydney Cove is the birthplace of Sydney, established as a penal colony by Arthur Phillip in 1788.  Along with The Rocks, it is considered one of the most important historical settlements in Australia.</p>",
							   { maxWidth: 358 });
	
//////End Leaflet
	
});//End ready