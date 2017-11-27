(function(){
    "use strict";

    angular.module(AppName)
        .controller("homeController", HomeController);

    HomeController.$inject = ["$scope", "$location"];

    function HomeController($scope, $location) {
        var vm = this;
        vm.$scope = $scope;
        vm.$location = $location;
        vm.$onInit = _onInit;

        function _onInit() {
            console.log("Home controller initiated");
        }

    }

})();