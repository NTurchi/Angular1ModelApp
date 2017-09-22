(function(){
    angular.module("app.front.stepper.service", [])
        .factory("StepperService", StepperService);

    function StepperService() {
        var logs = function(msg, context) {
            console.log("[" + context + "] " + msg);
        } 
    }

})();