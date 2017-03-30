(function () {
    "use strict";

    angular
        .module("app")
        .controller("controller", ControllerController);

    ControllerController.inject = ["$scope", "BoxService", "$log"];
    function ControllerController($scope, BoxService, $log) {
        var vm = this;

        $scope.get = getAPI;

        function getAPI() {
            BoxService.getFolder(0)
                .success(function (data) {
                    $log.log(data);
                })
                .error(function (err) {
                    $log.error(err);
                });
        }
    }
})();