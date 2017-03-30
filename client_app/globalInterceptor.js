(function () {
    "use strict";

    angular
        .module("app")
        .factory("GlobalInterceptor", GlobalInterceptor);

    GlobalInterceptor.$inject = ["$q"];
    function GlobalInterceptor($q) {
        return {
            // optional method
            "request": function (config) {
                console.log("%c REQUEST", "color: green;", config);
                return config;
            },

            // optional method
            "requestError": function (rejection) {
                console.log("%c REQUEST_ERROR","color: red;", rejection);
                return $q.reject(rejection);
            },

            // optional method
            "response": function (response) {
                console.log("%c RESPONSE", "color: green;", response);
                return response;
            },

            // optional method
            "responseError": function (rejection) {
                console.log("%c RESPONSE ERROR", "color: red;", rejection);

                var defer = $q.defer();

                if(rejection.status == 401){
                    console.log(rejection);
                }

                defer.reject(rejection);

                return defer.promise;
            }
        };
    }
})();