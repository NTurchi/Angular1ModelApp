(function(){
    'use strict';

    angular.module("app.front.stepper.controller", [])
        .controller("StepperController", StepperController);

    StepperController.$inject = [ "$log", "$http", "$scope" ]

    function StepperController($log, $http, $scope){
        var self = this;

        $scope.title = "Welcome to angular App Model";
    }

})();