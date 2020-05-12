function toggle(a) {
    var x = a;
    var b = a.innerHTML;
    if (x.nextElementSibling.style.display === 'none') {
        b = b.split('+');
        b = "-" + b[1];
        a.innerHTML = b;
        x.nextElementSibling.style.display = 'block';
    } else {
        b = b.split('-');
        b = "+" + b[1];
        a.innerHTML = b;
        x.nextElementSibling.style.display = 'none';
    }
}

var map;
var markers;

var WWUloc = new google.maps.LatLng(51.9693848, 7.5935798);
var WeezeAirportLoc = new google.maps.LatLng(51.8081477, 6.3661199);
var MünsterAirportLoc = new google.maps.LatLng(52.132938,7.6887554);
var DusselAirportLoc = new google.maps.LatLng(51.7031027, 6.6679891);
var BonnAirportLoc = new google.maps.LatLng(50.8707202, 7.1385457);


var imageVenue= {
    url: 'images/worldwide.png'
};

var imageAirport = {
    url: 'images/airport.png'
};

var ujiTooltip = 'Conference Venue: Universitat Jaume I- Espaitec 2'

var WeezeAirport;
var MünsterAirport;
var DusselAirport;
var BonnAirport;
var CastellonTrain;
var ValenciaTrain;
var BarcelonaTrain;
var MadridTrain;

var university;
var Dinner;
var MeetUp;

var infoVenue,infoMünsterAirport,infoWeezeAirport,infoDusselAirport,infoBonnAirport,
infoDinnerLoc,infoMeetUp,infoCastellon,infoValencia,infoBarcelona,infoMadrid;

var contentWwu = '<div id="content" style="color:#4a87d3; line-height:2; padding:1%">' +
                    '<h2 style="color:#4686A0">Institute for Geoinformatic</h2>' +
                    '<p align="center" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Telephone:</b>+49 (251) 83-33083 </br>' +
                    '<b style="color:#4a87d3">Web Page: </b><a target="_blank" href="http://www.uni-muenster.de/Geoinformatics/en/">' +
                    'www.uni-muenster.de/Geoinformatics/en/</a></p>' +
                    '<h3 style="color:#4a87d3"><a class="button map"  target="_blank" href="https://goo.gl/maps/rNfq5pMvyYKjcVXo8">Navigate</a></h3>' +
                    '</div>';



align = "left"

function clearObjectFromMap(object) {
    if (object != null) {
        object.setMap(null);
    }
}

function clearInforWindows() {
    if (infoVenue) infoVenue.close();
    if (infoWeezeAirport) infoWeezeAirport.close();
    if (infoMünsterAirport) infoMünsterAirport.close();
    if (infoDusselAirport) infoDusselAirport.close();
    if (infoBonnAirport) infoBonnAirport.close();
    if (infoDinnerLoc) infoDinnerLoc.close();
    if (infoMeetUp) infoMeetUp.close();
    if (infoCastellon) infoCastellon.close();
    if (infoValencia) infoValencia.close();
    if (infoBarcelona) infoBarcelona.close();
    if (infoMadrid) infoMadrid.close();


}

function setMapVisibility(itemClicked) {
    window.location.hash = '#map_section';
    clearObjectFromMap(WeezeAirport);
    clearObjectFromMap(BonnAirport);
    clearObjectFromMap(MünsterAirport);
    clearObjectFromMap(DusselAirport);

    //clearObjectFromMap(university);
    clearObjectFromMap(Dinner);
    clearObjectFromMap(MeetUp);

    clearObjectFromMap(CastellonTrain);
    clearObjectFromMap(ValenciaTrain);
    clearObjectFromMap(BarcelonaTrain);
    clearObjectFromMap(MadridTrain);

    switch (itemClicked) {
        case "flight":
            {
                //Airports
                var contentWeezeAirport = '<div id="content" style="color:#4a87d3; line-height:2; padding:1%">' +
                    '<h2 style="color:#4686A0">Weeze International Airport</h2>' +
                    '<p align="center" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Telephone:</b> +49 2837 666111</br>' +
                    '<b style="color:#4a87d3">Web Page: </b><a target="_blank" href="http://airport-weeze.de/">' +
                    'airport-weeze.de</a></p>' +
                    '<h3 style="color:#4a87d3"><a class="button map"  target="_blank" href="https://goo.gl/maps/52dZZwgqrrQgMhQg6">Navigate</a></h3>' +
                    '</div>'

                infoWeezeAirport = new google.maps.InfoWindow({
                    content: contentWeezeAirport
                });

                WeezeAirport = new google.maps.Marker({
                    position: WeezeAirportLoc,
                    map: map,
                    icon: imageAirport,
                   // animation: google.maps.Animation.BOUNCE,
                });

                infoMünsterAirport = new google.maps.InfoWindow({
                    content: '<div id="content" style="color:#4a87d3; line-height:2; padding:1%">' +
                    '<h2 style="color:#4686A0">Münster Osnabrück International Airport</h2>' +
                    '<p align="center" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Telephone:</b>+49 2571 943360</br>' +
                    '<b style="color:#4a87d3">Web Page: </b><a target="_blank" href="http://fmo.de">' +
                    'fmo.de</a></p>' +
                    '<h3 style="color:#4a87d3"><a class="button map"  target="_blank" href="https://g.page/FMOFlughafen?share">Navigate</a></h3>' +
                    '</div>'
                });

                MünsterAirport = new google.maps.Marker({
                    position: MünsterAirportLoc,
                    map: map,
                    icon: imageAirport,
                    // animation: google.maps.Animation.BOUNCE,
                });

                infoDusselAirport = new google.maps.InfoWindow({
                    content: '<div id="content" style="color:#4a87d3; line-height:2; padding:1%">' +
                    '<h2 style="color:#4686A0">Düsseldorf International Airport (DUS)</h2>' +
                    '<p align="center" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Telephone:</b>+49 211 4210</br>' +
                    '<b style="color:#4a87d3">Web Page: </b><a target="_blank" href="http://dus.com">' +
                    'dus.com</a></p>' +
                    '<h3 style="color:#4a87d3"><a class="button map"  target="_blank" href="https://goo.gl/maps/JNSvkPzKFQLCAaTy7">Navigate</a></h3>' +
                    '</div>'
                });

                DusselAirport = new google.maps.Marker({
                    position: DusselAirportLoc,
                    map: map,
                    icon: imageAirport,
                    // animation: google.maps.Animation.BOUNCE,
                });

                infoBonnAirport = new google.maps.InfoWindow({
                    content: '<div id="content" style="color:#4a87d3; line-height:2; padding:1%">' +
                    '<h2 style="color:#4686A0">Cologne Bonn Airport (CGN) Köln Bonn Airport</h2>' +
                    '<p align="center" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Telephone:</b>+49 2203 404001</br>' +
                    '<b style="color:#4a87d3">Web Page: </b><a target="_blank" href="http://koeln-bonn-airport.de">' +
                    'koeln-bonn-airport.de</a></p>' +
                    '<h3 style="color:#4a87d3"><a class="button map"  target="_blank" href="https://goo.gl/maps/JNSvkPzKFQLCAaTy7">Navigate</a></h3>' +
                    '</div>'
                });

                BonnAirport = new google.maps.Marker({
                    position: BonnAirportLoc,
                    map: map,
                    icon: imageAirport,
                    // animation: google.maps.Animation.BOUNCE,
                });




                map.panTo(WeezeAirportLoc);
                map.setZoom(7);
                WeezeAirport.addListener('click', function() {
                    clearInforWindows()
                    infoWeezeAirport.open(map, WeezeAirport);
                });
                MünsterAirport.addListener('click', function() {
                    clearInforWindows()
                    infoMünsterAirport.open(map, MünsterAirport);
                });
                DusselAirport.addListener('click', function() {
                    clearInforWindows()
                    infoDusselAirport.open(map, DusselAirport);
                });
                BonnAirport.addListener('click', function() {
                    clearInforWindows()
                    infoBonnAirport.open(map, BonnAirport );
                });
            }
            break;
        case "location":
            {   

                infoVenue = new google.maps.InfoWindow({
                    content: contentWwu
                });
                if (!university)
                    university = new google.maps.Marker({
                        position: WWUloc,
                        map: map,
                        icon: imageVenue,
                        title: ujiTooltip,
                        animation: google.maps.Animation.BOUNCE
                    });

                university.addListener('click', function() {
                    clearInforWindows()
                    infoVenue.open(map, university);
                    //infoDomplatz.close();
                });

                map.panTo(WWUloc);
                map.setZoom(13);
            }
            break;
        case 'dinner':
            {
                var DinnerLoc = new google.maps.LatLng(39.983396, -0.035208);
                var imageDinnerLoc = {
                    url: 'images/dinnerloc.png',
                    scaledSize: new google.maps.Size(32, 32),
                };

                var contentDinnerLoc = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Dinner Venue <br>Cervecería Gambrinus</h2><br>' +
                    '<img src="https://www.gambrinuscastellon.com/wp-content/uploads/2019/11/borrull.jpg" width = "150" heigght = "150"></img>' +
                    // '<h3 style="color:#4a87d3">City Center</h3><br>'+
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b>Plaça del Jutge Borrull,12003 <br>Castelló de la Plana, Castelló, Spain<br>' +
                    // '<b style="color:#4a87d3">Economy Single, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">72,- €</b> <br/>'+'<b style="color:#4a87d3">Comfort Single, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">	77,- € </b><br/>'+
                    '<b style="color:#4a87d3">Web Page: </b><a href="https://www.gambrinuscastellon.com/" target="_blank">https://www.gambrinuscastellon.com/</a></p>' +
                    '<a href = "https://www.google.com/maps/place/Cervecer%C3%ADa+Gambrinus+Borrull+Castell%C3%B3n/@39.983149,-0.0374177,17z/data=!3m1!4b1!4m5!3m4!1s0xd5fffd508a714bf:0x6602be996ce0807d!8m2!3d39.983149!4d-0.035229" target = "_blank">View on map</a>' +
                    '</div>';
                infoDinnerLoc = new google.maps.InfoWindow({
                    content: contentDinnerLoc
                });

                Dinner = new google.maps.Marker({
                    position: DinnerLoc,
                    map: map,
                    icon: imageDinnerLoc,
                    // animation: google.maps.Animation.BOUNCE
                });

                Dinner.addListener('click', function() {
                    clearInforWindows()
                    infoDinnerLoc.open(map, Dinner);
                });
                map.panTo(DinnerLoc);
                map.setZoom(13);
            }
            break;
        case 'meetup':
            {
                var MeetUpLoc = new google.maps.LatLng(39.988017, -0.047769);
                var imageMeetUp = {
                    url: 'images/meetuploc.png',
                    scaledSize: new google.maps.Size(32, 32),
                };

                var contentMeetUp = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Pre Conference Meetup at<br>El Corte Inglés</h2><br>' +
                    '<img src="https://www.gambrinuscastellon.com/wp-content/uploads/2019/11/borrull.jpg" width = "150" heigght = "150"></img>' +
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: Passeig de Morella, 1, 12006 <br>Castellón de la Plana, Castellón, Spain<br>' +
                    '<a href = "https://www.google.com/maps/place/Supermercado+El+Corte+Ingl%C3%A9s/@39.9879839,-0.0478293,17.93z/data=!4m8!1m2!2m1!1sEl+Corte+Ingl%C3%A9s,+Passeig+de+Morella,+1,+12006!3m4!1s0x0:0x60172b9a7bb66d18!8m2!3d39.9880215!4d-0.0473973" target = "_blank">View on map</a>' +
                    '</div>';
                infoMeetUp = new google.maps.InfoWindow({
                    content: contentMeetUp
                });

                MeetUp = new google.maps.Marker({
                    position: MeetUpLoc,
                    map: map,
                    icon: imageMeetUp,
                    // animation: google.maps.Animation.BOUNCE
                });

                MeetUp.addListener('click', function() {
                    clearInforWindows()
                    infoMeetUp.open(map, MeetUp);
                });
                map.panTo(MeetUpLoc);
                map.setZoom(13);
            }
            break;
        case 'publicTransport':
            {

                //Train
                var imageTrain = {
                    url: 'images/train.png'
                };

                var castellonLoc = new google.maps.LatLng(39.987890, -0.052657);
                var valenciaLoc = new google.maps.LatLng(39.465981, -0.377467);
                var barcelonaLoc = new google.maps.LatLng(41.379093, 2.140134);
                var madridLoc = new google.maps.LatLng(40.4065908, -3.6918535);

                var contentCastellon = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Castelló Railway Station</h2>' +
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b> Calle Pintor Oliet 2, 12006  Castellón de la Plana <br>' +
                    '<b style="color:#4a87d3">Teléfono: </b> +34 902320320<br>' +
                    '<b style="color:#4a87d3">Web Page: </b><a href="http://www.renfe.com/EN/viajeros/index.html" target = "_blank">' +
                    'http://www.renfe.com/EN/viajeros/index.html</a></p>' +
                    '</div>';

                var contentBarcelona = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Barcelona Sants railway station</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    '<b style="color:#4686A0">Address: </b> Carrer del Rector Triadó 75, 08014 Barcelona <br>' +
                    '<b style="color:#4686A0">Teléfono: </b> +34 902 320 320 <br>' +
                    '<b style="color:#4686A0">Web Page: </b>' +
                    '<a href="http://www.renfe.com/viajeros/cercanias/barcelona/" target = "_blank">http://www.renfe.com/viajeros/cercanias/barcelona/</a><br>' +
                    '<a href = "https://www.google.com/maps/dir/Barcelona+Nord,+Carrer+de+Sabino+Arana,+Barcelona/Castell%C3%B3n+de+la+Plana/@41.3229395,2.0268209,11.86z/data=!4m14!4m13!1m5!1m1!1s0x12a499cbe131c8f5:0xc0c032f23fbbfe4c!2m2!1d2.1243454!2d41.3859291!1m5!1m1!1s0xd5ffe2bb82bc197:0xbf89204be1c64f49!2m2!1d-0.0513246!2d39.9863563!3e3" target = "_blank">View on map</a></p>' +
                    '</div>';

                var contentValencia = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Estació del Nord, Valencia</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    '<b style="color:#4686A0">Address: </b> Carrer de Alacant 25, 46004 Valencia <br>' +
                    '<b style="color:#4686A0">Teléfono: </b> +34 902 320 320 <br>' +
                    '<b style="color:#4686A0">Web Page: </b><a href="http://www.renfe.com/viajeros/cercanias/valencia/" target = "_blank">http://www.renfe.com/viajeros/cercanias/valencia/</a><br>' +
                    '<a href="https://www.google.com/maps/dir/Val%C3%A8ncia+Nord,+Carrer+d\'Alacant,+Valencia/Castell%C3%B3n+de+la+Plana/@39.7133618,-0.4975215,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xd604f35909b5015:0x83499d175a2c11b4!2m2!1d-0.3774451!2d39.4660302!1m5!1m1!1s0xd5ffe2bb82bc197:0xbf89204be1c64f49!2m2!1d-0.0513246!2d39.9863563!3e3" target = "_blank">View on map</a>' +
                    '</p>' +
                    '</div>';

                var contentMadrid = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Madrid Atocha Railway Station</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    '<b style="color:#4686A0">Web Page: </b><a href="http://www.renfe.com/viajeros/cercanias/madrid/" target = "_blank">http://www.renfe.com/viajeros/cercanias/madrid/</a><br>' +
                    '<a href = "https://www.google.com/maps/dir/Atocha+Cercan%C3%ADas,+Madrid/Castell%C3%B3n+de+la+Plana/@39.9175727,-3.021992,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xd42262445cdd817:0x3947f9c28d65035b!2m2!1d-3.6896451!2d40.4064655!1m5!1m1!1s0xd5ffe2bb82bc197:0xbf89204be1c64f49!2m2!1d-0.0513246!2d39.9863563!3e3" target = "_blank">View on map</a> </p>' +
                    '</div>';

                var infoCastellon = new google.maps.InfoWindow({
                    content: contentCastellon
                });

                var infoValencia = new google.maps.InfoWindow({
                    content: contentValencia
                });

                var infoBarcelona = new google.maps.InfoWindow({
                    content: contentBarcelona
                });

                var infoMadrid = new google.maps.InfoWindow({
                    content: contentMadrid
                });
                CastellonTrain = new google.maps.Marker({
                    position: castellonLoc,
                    map: map,
                    icon: imageTrain
                        //                    animation: google.maps.Animation.BOUNCE
                });

                ValenciaTrain = new google.maps.Marker({
                    position: valenciaLoc,
                    map: map,
                    icon: imageTrain
                        //                    animation: google.maps.Animation.BOUNCE
                });

                BarcelonaTrain = new google.maps.Marker({
                    position: barcelonaLoc,
                    map: map,
                    icon: imageTrain
                        //,                    animation: google.maps.Animation.BOUNCE
                });

                MadridTrain = new google.maps.Marker({
                    position: madridLoc,
                    map: map,
                    icon: imageTrain
                        //,                    animation: google.maps.Animation.BOUNCE
                });

                CastellonTrain.addListener('click', function() {
                    clearInforWindows()
                    infoCastellon.open(map, CastellonTrain);
                });

                ValenciaTrain.addListener('click', function() {
                    clearInforWindows()
                    infoValencia.open(map, ValenciaTrain);
                });

                BarcelonaTrain.addListener('click', function() {
                    clearInforWindows()
                    infoBarcelona.open(map, BarcelonaTrain);
                });

                MadridTrain.addListener('click', function() {
                    clearInforWindows()
                    infoMadrid.open(map, MadridTrain);
                });

                map.panTo(castellonLoc);
                map.setZoom(7);
            }
            break;
        default:
            {}
    }
}

$(window).resize(function() {
    google.maps.event.trigger(map, "resize");
    map.setCenter(WWUloc);
});

function initMap() {
    //document.getElementById('map_section').style.display = 'none'
    map = new google.maps.Map(document.getElementById('map'), {
        center: WWUloc,
        scrollwheel: false,
        zoom: 13
    });
    

    infoVenue = new google.maps.InfoWindow({
        content: contentWwu
    });

    university = new google.maps.Marker({
        position: WWUloc,
        map: map,
        icon: imageVenue,
        animation: google.maps.Animation.BOUNCE,
        title: ujiTooltip,
    });

    university.addListener('click', function() {
        clearInforWindows()
        infoVenue.open(map, university);
        //infoDomplatz.close();
    });

    map.panTo(WWUloc);
    map.setZoom(13);
}