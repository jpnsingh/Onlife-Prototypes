(function () {
    angular
    .module('olh-liveon-dashboard')
    .factory('DashboardService', DashboardService);

    DashboardService.$inject = [];
    function DashboardService() {
        return {
            getRemindMeOptions: getRemindMeOptions,
            getYesNoOptions: getYesNoOptions
        };

        function getRemindMeOptions() {
            return [
                {
                    id: 'day',
                    label: 'In a day'
                },
                {
                    id: 'week',
                    label: 'In a week'
                },
                {
                    id: 'month',
                    label: 'In a month'
                }
            ];
        }

        function getYesNoOptions() {
            return [
                {
                    id: 'yes',
                    label: 'Yes'
                },
                {
                    id: 'no',
                    label: 'No'
                }
            ];
        }
    }
})();

