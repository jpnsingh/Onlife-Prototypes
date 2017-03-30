(function () {
    angular
    .module('olh-liveon-dashboard')
    .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['DashboardService'];
    function DashboardController(DashboardService) {
        var vm = this;

        vm.remindMeOptions = DashboardService.getRemindMeOptions();
        vm.yesNoOptions = DashboardService.getYesNoOptions();
    }
})();

