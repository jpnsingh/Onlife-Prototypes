(function () {
    'use strict';

    angular.module('olh-lps-campaign')
        .service('ProgramService', [ '$http',
            function ($http) {
                return {
                    getPrograms: function () {
                        return [
                            {
                                header: 'Fall into Fitness',
                                content: 'Weight Loss Program'
                            },
                            {
                                header: 'Sound Mind, Sound Body',
                                content: 'Stress Reduction Program'
                            },
                            {
                                header: 'Harvest your Health',
                                content: 'Get Active Program'
                            }
                        ]
                    },
                    getProgramGridJSON: function() {
                        return $http.get('ProgramGrid.json');
                    }


                };
            }
        ]);
})();
