(function() {
    "use strict";

    angular.module("app", [])
        .config(["$httpProvider", config])

    function config($httpProvider) {
        $httpProvider.interceptors.push("GlobalInterceptor");
    }
})();