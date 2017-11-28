(function () {
    "use strict";

    angular.module(AppName)
        .controller("homeController", HomeController);

    HomeController.$inject = ["$scope", "$location", "$mdSidenav"];

    function HomeController($scope, $location, $mdSidenav) {
        var vm = this;
        vm.$scope = $scope;
        vm.$location = $location;
        vm.$mdSidenav = $mdSidenav;
        vm.$onInit = _onInit;
        vm.search = "";
        vm.buildToggler = _buildToggler;
        vm.toggleLeft = vm.buildToggler('left');
        vm.toggleRight = vm.buildToggler('right');

        function _onInit() {
            console.log("Home controller initiated");
        }

        function _buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            };
        }

    }

})();