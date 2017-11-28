// SignalR CONTROLLER

(function () {
    'use strict';

    angular
        .module(AppName)
        .controller("signalRController", SignalRController);

    SignalRController
        .$inject = ["$scope"];

    function SignalRController($scope) {
        var vm = this;
        vm.$scope = $scope;

        vm.hackHub = null;

        vm.$scope.hackHub = $.connection.hack;

        console.log('initializing signalr');

        $.connection.hub.logging = true;

        $.connection.hub
            .start()
            .done(connectedToSignalR)
            .fail(function () { console.error('Error connecting to SignalR'); }); 

        function connectedToSignalR() {
            console.log('Connected to SignalR, connection ID: ' + $.connection.hub.id);
        };
    };
})();