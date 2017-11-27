(function () {

    angular.module(APP.NAME).controller("parkingZonesController", ParkingZonesController);

    ParkingZonesController.$inject = ["$log", "parkingZonesService"];


    function ParkingZonesController($log, parkingZonesService) {
        var vm = this;

        vm.$onInit = _onInit;
        $log.log("hi")

        function _onInit() {

            for (var i = 0; i < features.length; i++) {
                var status = features[i].SENSOR_STATUS
                if (status == 0) {
                    $log.log(features[i].ADDRESS_SPACE + "" + "available")
                } else {
                    $log.log(features[i].ADDRESS_SPACE + "" + "unavailable")
                }
            }
                

        };
        
           
        

        features = [
            {
                "type": "Feature",
                "properties": {
                    "OBJECTID": 1001,
                    "SENSOR_UNIQUE_ID": "WV91",
                    "GPSX": -118.445892,
                    "GPSY": 34.060678,
                    "MTYPE": "IPS",
                    "SENSOR_STATUS": 3,
                    "PMZ": "WV",
                    "PMZ2": "WV9",
                    "ADDRESS_SPACE": "10901 W KINROSS AVE",
                    "TOOLTIP": "Address Space: 10901 W KINROSS AVE\\nType: IPS’\\nAs of: 06/17/2015\\nID: WV91\\nStatus: 3",
                    "NLA_URL": "navigatela/reports/dot_parking_meter_sensors.cfm?pk=1001"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -118.44590432052128,
                        34.060682446842506
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "OBJECTID": 1002,
                    "SENSOR_UNIQUE_ID": "WV92",
                    "GPSX": -118.445967,
                    "GPSY": 34.060634,
                    "MTYPE": "IPS",
                    "SENSOR_STATUS": 3,
                    "PMZ": "WV",
                    "PMZ2": "WV9",
                    "ADDRESS_SPACE": "10901 W KINROSS AVE",
                    "TOOLTIP": "Address Space: 10901 W KINROSS AVE\\nType: IPS’\\nAs of: 06/17/2015\\nID: WV92\\nStatus: 3",
                    "NLA_URL": "navigatela/reports/dot_parking_meter_sensors.cfm?pk=1002"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -118.44597920078711,
                        34.060638892995286
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "OBJECTID": 1003,
                    "SENSOR_UNIQUE_ID": "WV93",
                    "GPSX": -118.446016,
                    "GPSY": 34.060604,
                    "MTYPE": "IPS",
                    "SENSOR_STATUS": 0,
                    "PMZ": "WV",
                    "PMZ2": "WV9",
                    "ADDRESS_SPACE": "10901 W KINROSS AVE",
                    "TOOLTIP": "Address Space: 10901 W KINROSS AVE\\nType: IPS’\\nAs of: 06/17/2015\\nID: WV93\\nStatus: 3",
                    "NLA_URL": "navigatela/reports/dot_parking_meter_sensors.cfm?pk=1003"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -118.44602815153763,
                        34.060608655898044
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "OBJECTID": 1004,
                    "SENSOR_UNIQUE_ID": "WV94",
                    "GPSX": -118.446271,
                    "GPSY": 34.060451,
                    "MTYPE": "IPS",
                    "SENSOR_STATUS": 0,
                    "PMZ": "WV",
                    "PMZ2": "WV9",
                    "ADDRESS_SPACE": "10901 W KINROSS AVE",
                    "TOOLTIP": "Address Space: 10901 W KINROSS AVE\\nType: IPS’\\nAs of: 06/17/2015\\nID: WV94\\nStatus: 3",
                    "NLA_URL": "navigatela/reports/dot_parking_meter_sensors.cfm?pk=1004"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -118.44628300998411,
                        34.06045623643544
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