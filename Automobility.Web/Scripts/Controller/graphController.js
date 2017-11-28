
(function () {
    'use strict';
    console.log("hello");
    // Please note that the close and dismiss bindings are from $uibModalInstance.
    angular.module(AppName).component('mapGraph', {
        template: /*'<p ng-click="$ctrl.openReportContentModal()"><span class="glyphicon glyphicon-flag"></span>Flag as Inappropriate</p>'*/
        '<a href="#" ng-click="$ctrl.openReportContentModal()">Look here</a>'
        ,
        bindings: {

        },

        controller: function ($scope, $uibModal) {
            var vm = this;
            vm.openReportContentModal = _openReportContentModal;
      
            function _openReportContentModal() {

                var modalInstance = $uibModal.open({
                    animation: vm.animationsEnabled,
                    component: 'graphModal',
                    size: 'sm',
                    resolve: {
                        item: function () {
                            return { };
                        }
                    }

                });

                modalInstance.result.then(function () {
                 


                    //console.log("this is contentType", vm.flagType);
                }
                    , function () {
                        console.info();
                    }
                );
                function _toggleAnimation() {
                    vm.animationsEnabled = !vm.animationsEnabled;
                }
            }
        }
    });
})();

(function () {
    'use strict';


    // Please note that the close and dismiss bindings are from $uibModalInstance.
    angular.module('HondaHack').component('graphModal', {
        templateUrl: "/Scripts/Template/GraphTemplate.html", //put button here
        bindings: {
            //resolve: '<',
            //close: '&',
            //dismiss: '&'

        },
        controller: function ($scope, $uibModal) {
            var vm = this;


            }

        
    });
})();


