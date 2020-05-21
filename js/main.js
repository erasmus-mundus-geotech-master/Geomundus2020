
//menu responsive control
$(document).ready(
    function(){
    //slidedown
    $('.topnav>.has-dropdown').click(
            function(){
            $(this).find('.main-menu-dropdown').slideToggle();
            $(this).find('.main-menu-dropdown>li>a').css("float", "none");
            $(this).siblings().find('.main-menu-dropdown').slideUp();
    });
    $('.topnav>li').click(
        function(){
            $(this).siblings('.has-dropdown').find('.main-menu-dropdown').slideUp();
        }
    );
    //responsive 
    $('#menu_btn').click(function(){
        $('#hide').slideToggle();            
        $('.topnav').addClass('responsive');
    }); 
    $(window).resize(function(){
        if($(window).width()> 680){
            $('#hide').css('display','inherit');
            $('.topnav').removeClass('responsive');
        }}
    );

    });

//map control
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
    url: 'images/airport1.png',
    scaledSize: new google.maps.Size(32, 32)
};

var VenueTooltip = 'Conference Venue: “Institute for Geoinformatics (IFGI)”, University of Münster'

var WeezeAirport;
var MünsterAirport;
var DusselAirport;
var BonnAirport;
var hotelSchlosspark;
var university;
var Dinner;
var MeetUp;
//infowindo
var infoVenue,infoMünsterAirport,infoWeezeAirport,infoDusselAirport,infoBonnAirport,
infoDinnerLoc,infoMeetUp,infoSchlosspark;
//venue info window content
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
    if (infoSchlosspark) infoSchlosspark.close();

}

function setMapVisibility(itemClicked) {
    window.location.hash = '#map_section';
    clearObjectFromMap(WeezeAirport);
    clearObjectFromMap(BonnAirport);
    clearObjectFromMap(MünsterAirport);
    clearObjectFromMap(DusselAirport);

    clearObjectFromMap(Dinner);
    clearObjectFromMap(MeetUp);

    clearObjectFromMap(hotelSchlosspark);

    switch (itemClicked) {
        case "flight":
            {
                //Airports markers/pop up create
                infoWeezeAirport = new google.maps.InfoWindow({
                    content: '<div id="content" style="color:#4a87d3; line-height:2; padding:1%">' +
                    '<h2 style="color:#4686A0">Weeze International Airport</h2>' +
                    '<p align="center" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Telephone:</b> +49 2837 666111</br>' +
                    '<b style="color:#4a87d3">Web Page: </b><a target="_blank" href="http://airport-weeze.de/">' +
                    'airport-weeze.de</a></p>' +
                    '<h3 style="color:#4a87d3"><a class="button map"  target="_blank" href="https://goo.gl/maps/52dZZwgqrrQgMhQg6">Navigate</a></h3>' +
                    '</div>'
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
                // map action settings

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
                        title: VenueTooltip,
                        animation: google.maps.Animation.BOUNCE
                    });

                university.addListener('click', function() {
                    clearInforWindows()
                    infoVenue.open(map, university);
                });

                map.panTo(WWUloc);
                map.setZoom(13);
            }
            break;
        case 'dinner':
            {
                var DinnerLoc = new google.maps.LatLng(51.962415, 7.6323021);
                var imageDinnerLoc = {
                    url: 'images/dinnerloc.png',
                    scaledSize: new google.maps.Size(32, 32),
                };

                infoDinnerLoc = new google.maps.InfoWindow({
                    content: '<div id="content" style="color:#4a87d3; line-height:2; padding:1%">' +
                    '<h2 style="color:#4686A0">Dinner Venue <br> Aposto</h2><br>' +
                    '<p align="center" style="color:#4a87d3">' +
                    '<img src="https://media.aposto.eu/aposto2017_muenster/Galerien/Impressionen-380/007_131030_APMS_S0001_S.jpg" width=50% height=50%></img>' +
                    '</br><b style="color:#4a87d3">Telephone:</b> +49 2203 404001' +
                    '</br><b style="color:#4a87d3">Address: </b> Alter Steinweg 21, 48143 Münster, Germany' +
                    '<h3 style="color:#4a87d3"><a class="button map"  target="_blank" href="https://g.page/aposto-muenster?share">Navigate</a></h3>' +
                    '</div>'
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
                var MeetUpLoc = new google.maps.LatLng(51.9624766,7.6237339);
                var imageMeetUp = {
                    url: 'images/meetuploc.png',
                    scaledSize: new google.maps.Size(32, 32),
                };

                infoMeetUp = new google.maps.InfoWindow({
                    content: '<div id="content" style="color:#4a87d3; line-height:2; padding:1%">' +
                    '<h2 style="color:#4686A0">Domplatz</h2>' +
                    '<p align="center" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: Domplatz, 48149 Münster, Germany</br>' +
                    '<h3 style="color:#4a87d3"><a class="button map"  target="_blank" href="https://goo.gl/maps/CdXqDMUsyXgWjH8Q9">Navigate</a></h3>' +
                    '</div>'
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
        case 'hotel':
            {

                //Hotels
                var imagehotel = {
                    url: 'images/hotel1.png'
                };

                var Schlosspark = new google.maps.LatLng(51.9680211, 7.6082153);
                var infoSchlosspark = new google.maps.InfoWindow({
                    content:'<div id="content" style="color:#4a87d3; line-height:2; padding:1%">' +
                    '<h2 style="color:#4686A0">Hotel Am Schlosspark</h2>' +
                    '<p align="center" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address:</b>Schmale Str. 2-4, 48149 Münster, Germany</br>' +
                    '<b style="color:#4a87d3">Telephone:</b>+49 251 8998200</br>' +
                    '<b style="color:#4a87d3">Web Page: </b><a target="_blank" href="https://hotel-am-schlosspark-muenster.de">' +
                    'hotel-am-schlosspark-muenster.de</a></p>' +
                    '<h3 style="color:#4a87d3"><a class="button map"  target="_blank" href="https://goo.gl/maps/SoTSTdY9UPvdoNSq5">Navigate</a></h3>' +
                    '</div>'
                });

                hotelSchlosspark = new google.maps.Marker({
                    position: Schlosspark,
                    map: map,
                    icon: imagehotel
                        //                    animation: google.maps.Animation.BOUNCE
                });

        
                hotelSchlosspark.addListener('click', function() {
                    clearInforWindows();
                    infoSchlosspark.open(map, hotelSchlosspark);
                });


                map.panTo(Schlosspark);
                map.setZoom(13);
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
        title: VenueTooltip,
    });

    university.addListener('click', function() {
        clearInforWindows()
        infoVenue.open(map, university);
       
    });

    map.panTo(WWUloc);
    map.setZoom(13);
}
