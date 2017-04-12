(function () {
    angular
    .module('olh-liveon-devices')
    .controller('DevicesController', DevicesController);

    DevicesController.$inject = ['DevicesService'];
    function DevicesController(DevicesService) {
        var vm = this;


        DevicesService
            .getDevicesList()
            .then(function (response) {
                vm.devices = response.data;
            });
    }
})();

