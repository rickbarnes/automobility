//(function () {

//    angular.module(APP.NAME).factory("parkingZonesService", ParkingZonesService);
//    ParkingZonesService.$inject = ["$http"];

//    function ParkingZonesService($http) {

//        return {
//            getParkingZoneStatus: _getParkingZoneStatus
//        }


//        //------------------------------------------------GET--------------------------------------------//


//        function _getParkingZoneStatus(onSuccess, onError) {
//            var settings = {
//                url: 'http://geohub.lacity.org/datasets/723c00530ea441deaa35f25e53d098a8_16.geojson',
//                method: 'GET',
//                cache: false,
//                withCredentials: true
//            };
//            return $http(settings)
//                .then(onSuccess, onError);
//        }

//    }







//})();