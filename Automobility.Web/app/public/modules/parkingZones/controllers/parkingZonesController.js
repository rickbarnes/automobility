(function () {

    angular.module(AppName).controller("parkingZonesController", ParkingZonesController);

    ParkingZonesController.$inject = ["$log"];


    function ParkingZonesController($log) {
        var vm = this;

        vm.$onInit = _onInit;
        $log.log("hi")

        function _onInit() {

            for (var i = 0; i < features.length; i++) {
                var status = features[i].properties.SENSOR_STATUS
                if (status == 0) {
                    $log.log(features[i].properties.ADDRESS_SPACE + " " + "available")
                } else {
                    $log.log(features[i].properties.ADDRESS_SPACE + "   " + "unavailable")
                }
            }


        };




        features = [
            {
                "type": "Feature",
                "properties": {
                    "OBJECTID": 1001,
                    "SENSOR_UNIQUE_ID": "WV91",
                    "GPSX": -118.269265,
                    "GPSY": 34.038715,
                    "MTYPE": "IPS",
                    "SENSOR_STATUS": 3,
                    "PMZ": "WV",
                    "PMZ2": "WV9",
                    "ADDRESS_SPACE": "South Figuero St",
                    "TOOLTIP": "Address Space: South Figuero St AVE\\nType: IPS’\\nAs of: 06/17/2015\\nID: WV91\\nStatus: 3",
                    "NLA_URL": "navigatela/reports/dot_parking_meter_sensors.cfm?pk=1001"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -118.269265,
                        34.038715
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "OBJECTID": 8926,
                    "SENSOR_UNIQUE_ID": "WB830",
                    "GPSX": -118.270644,
                    "GPSY": 34.037742,
                    "MTYPE": "IPS",
                    "SENSOR_STATUS": 3,
                    "PMZ": "WB",
                    "PMZ2": "WB8",
                    "ADDRESS_SPACE": "Venice Blvd",
                    "TOOLTIP": "Address Space: Venice Blvd\\nType: IPS’\\nAs of: 06/17/2015\\nID: WB830\\nStatus: 3",
                    "NLA_URL": "navigatela/reports/dot_parking_meter_sensors.cfm?pk=8926"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -118.270644,
                        34.037742
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "OBJECTID": 8914,
                    "SENSOR_UNIQUE_ID": "WB812",
                    "GPSX": -118.244075,
                    "GPSY": 34.041546,
                    "MTYPE": "IPS",
                    "SENSOR_STATUS": 0,
                    "PMZ": "WB",
                    "PMZ2": "WB8",
                    "ADDRESS_SPACE": "West Pico Blvd",
                    "TOOLTIP": "Address Space: West Pico Blvd\\nType: IPS’\\nAs of: 06/17/2015\\nID: WB812\\nStatus: 3",
                    "NLA_URL": "navigatela/reports/dot_parking_meter_sensors.cfm?pk=8914"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -118.244075,
                        34.052251
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "OBJECTID": 8901,
                    "SENSOR_UNIQUE_ID": "WV683C",
                    "GPSX": -118.271937,
                    "GPSY": 34.046317,
                    "MTYPE": "IPS",
                    "SENSOR_STATUS": 0,
                    "PMZ": "WV",
                    "PMZ2": "WV6",
                    "ADDRESS_SPACE": "West 11th Street",
                    "TOOLTIP": "Address Space: West 11th Street\\nType: IPS’\\nAs of: 06/17/2015\\nID: WV683C\\nStatus: 3",
                    "NLA_URL": "navigatela/reports/dot_parking_meter_sensors.cfm?pk=8901"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -118.271937,
                        34.046317
                    ]
                }
            }
                 
        ]

        //function _onInit() {
        //    parkingZonesService.getParkingZoneStatus(getParkingZoneStatusSuccess, getParkingZoneStatusError)

        //};

        //function getParkingZoneStatusSuccess(response) {

        //}

        //function getParkingZoneStatusError(response) {

        //}



    }




})();