(function() {
    "use strict";

    angular
        .module("app")
        .factory("BoxService", BoxService);

    BoxService.inject = ["$http"];
    function BoxService($http) {
        var service = {
            getFolder:getFolder
        };
        
        return service;

        ////////////////
        function getFolder (folderId) {
            //Valid token: gcppozBs0ICuWHzkIWKng1PvywQ0qwjG
            //Invalid token: uGQ8jQXEF2J6Vz20RbFKqXdY2BoWzPxH
            var config = {
                headers: {
                    Authorization: "Bearer uGQ8jQXEF2J6Vz20RbFKqXdY2BoWzPxH",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                }
            }
            return $http.get("https://api.box.com/2.0/folders/" + folderId + "?fields=id,name,type,item_status,size,item_collection,shared_link", config);
        }
    }
})();