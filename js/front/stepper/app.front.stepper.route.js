(function(){
    'use strict';

    angular
        .module("app.front.stepper.route", [])
        .config(config);

    config.$inject = ['$routeProvider'];
    
    function config($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '../../../html/stepperView/stepper.template.html',
                controller: 'StepperController'
            });
    };
})();