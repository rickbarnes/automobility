// the map component
(function () {
    "use strict";
    console.log("in component");
    angular.module(AppName).component("mapComponent",
        {
            templateUrl: "/Scripts/Template/MapTemplate.html",
            controller: "mapController"
        });
})();


// custom directive for submit upon enter
(function () {
    'use strict';

    angular
        .module(AppName)
        .directive('enterKey', function () {
            return function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if (event.which === 13) {
                        scope.$apply(function () {
                            scope.$eval(attrs.enterKey);
                        });
                        event.preventDefault();
                    };
                });
            };
        });
})();



// the map controller
(function () {
    "use strict";

    angular.module(AppName).controller("mapController", MapController);

    MapController.$inject = ["$scope"];
    function MapController($scope) {

        var vm = this;
        vm.$scope = $scope;

        vm.submitAddress = _submitAddress;
        vm.mapObj = {};
        vm.populateMap = _populateMap;
        vm.prevInfowindow = false;

        vm.$onInit = _initMap;



        function _initMap() {

            // upon page load, show map centered on Riverside area
            var map = new google.maps.Map(document.getElementById('gmap'), {
                //center: { lat: 39.8283, lng: -98.5795 },
                center: { lat: 33.97, lng: -117.3281 },
                zoom: 9
            });


        }


        function _submitAddress() {
            // recenter map around the user-input zipcode (upon click of submit)

            // store the user input postal code as variable address
            var address = vm.addressModel.postalCode;

            // instantiate geocoder object
            var geocoder = new google.maps.Geocoder();


            // FROM API DOCUMENTATION: "Geocoder.geocode() method initiates a request to the geocoding service,
            // passing it a GeocoderRequest object literal containing the input terms and a callback method to execute upon receipt of the response."

            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === 'OK') {

                    // need to re-instantiate the map here because... not sure exactly why; something to do with google api ?
                    var userMap = new google.maps.Map(document.getElementById("gmap"), {
                        zoom: 16,
                        center: (results[0].geometry.location)
                    });
                    vm.mapObj = {
                        'address': address,
                        'map': userMap
                    }
                    //_getEvents(vm.mapObj);

                    var hardCodedArray = [
                   
                        { latitude: 34.037742, longitude: -118.270644, fullAddress: "South Park, Los Angeles, CA, USA" },
                        { latitude: 34.041546, longitude: -118.244075, fullAddress: "South Park, Los Angeles, CA, USA" },
                        { latitude: 34.038715, longitude: -118.269265, fullAddress: "South Park, Los Angeles, CA, USA" }
                        //{ latitude: 34.0100, longitude: -118.4961, locationName: "Beach", eventDescription: "A popular beach that allows for leashed dogs. Easy parking.", count: "10", averageRating: 4, totalRatings: 10, fullAddress: "1846 W Linden St, Riverside, CA 92507" },
                        //{ latitude: 34.0100, longitude: -118.4961, locationName: "Beach", eventDescription: "A popular beach that allows for leashed dogs. Easy parking.", count: "10", averageRating: 4, totalRatings: 10, fullAddress: "1846 W Linden St, Riverside, CA 92507" }
                    ];
                    _populateMap(hardCodedArray);
                } else {
                    console.log('ERROR map not recentering');
                }
            });


            // populate the LIST view


        }

        function _populateMap(hardCodedArray) {
            // conditional statement to check if there is even anything returned; i.e. if there are even any locations that need to be marked on the map
            // an array of addresses is returned; store in var addrArr
            var addrArr = hardCodedArray;

            for (var i = 0; i < addrArr.length; i++) {

                var currentIteration = addrArr[i];
                console.log('currentIteration: ', currentIteration);
                var myLatLng = {
                    'lat': currentIteration.latitude,
                    'lng': currentIteration.longitude
                };

                // the actual HTML content of the little popup box for each marker, stored in var boxContent
                var windowContent = '<div id="content">' +
                    //'<div id="siteNotice">' +
                    //'</div>' +
                    //'<div><h3 id="firstHeading" style="color:#8dc344;" class="firstHeading">' +
                    //currentIteration.locationName +
                    ////'</h3><h5 style="color:#228B22;">' +
                    ////'<i style="color:#228B22;" class="glyphicon glyphicon-star"></i><i style="color:#228B22;" class="glyphicon glyphicon-star"></i><i style="color:#228B22;" class="glyphicon glyphicon-star"></i><i style="color:#228B22;" class="glyphicon glyphicon-star"></i><i style="color:#228B22;" class="glyphicon glyphicon-star-empty"></i>'; +
                    //' ' +
                    //'<h5><strong>People: </strong> ' +
                    //currentIteration.count +
                    //'<div id="bodyContent">' +
                    //'</h5><h5>' +
                    //currentIteration.eventDescription +
                    //'<h5><strong>Address: </strong> ' +
                    currentIteration.fullAddress +
                    '</h5>';

                // assign default marker color
                var markerColor = "ff0000";

                // using the selected marker color, store marker image as var formattedMarkerIcon to be used as property of Marker object below
                var formattedMarkerIcon = new google.maps.MarkerImage(
                    "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" +
                    markerColor);

                var infoWindow = new google.maps.InfoWindow();

                // new marker object with properties that we've defined above
                var marker = new google.maps.Marker({
                    map: vm.mapObj.map,
                    position: myLatLng,
                    icon: formattedMarkerIcon
                });


                marker.addListener('click',
                    function () {
                        // check to see if there is already an info window open; if so, close it before proceeding
                        if (vm.prevInfoWindow) {
                            vm.prevInfoWindow.close();
                        }

                        // update prevInfoWindow to this new instance, set content, and open it on the map 'map' anchored on marker 'marker'
                        vm.prevInfoWindow = infoWindow;
                        infoWindow.setContent(windowContent);
                        infoWindow.open(map, marker);
                    });


            };
        }
    }
})();