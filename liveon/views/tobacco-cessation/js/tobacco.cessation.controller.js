(function () {
    angular
        .module('olh-liveon-tobacco-cessation')
        .controller('TobaccoCessationController', TobaccoCessationController);

    TobaccoCessationController.$inject = ['TobaccoCessationService'];
    function TobaccoCessationController(TobaccoCessationService) {
        var vm = this;

        vm.tobaccoCessationItems = TobaccoCessationService.getTobaccoCessationItems();
    }
})();

