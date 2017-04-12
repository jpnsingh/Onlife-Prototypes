(function () {
    angular
    .module('olh-liveon-devices')
    .factory('DevicesService', DevicesService);

    DevicesService.$inject = ['$http'];
    function DevicesService($http) {
        return {
            getDevicesList: getDevicesList
        };

        function getDevicesList() {
            return $http.get('js/Devices.json');
        }
    }
})();

