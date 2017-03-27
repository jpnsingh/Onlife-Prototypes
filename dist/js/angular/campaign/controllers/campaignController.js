(function ($) {
    'use strict';

    angular.module('olh-lps-campaign')
        .controller('CampaignController',
            [
                '$scope', 'SegmentService', 'ProgramService', 
                function ($scope, SegmentService, ProgramService) {
                $scope.openedStartDate = true;
                $scope.openedEndDate = false;
                $scope.settingsGrid =
                {
                    enableSorting: true,
                    enableRowSelection: true,
                    enableRowHeaderSelection: false,
                    noUnselect: true,
                    multiSelect: false,
                    columnDefs: [
                        { name: 'Campaign Name', field: 'campaign-name', width:400,
                            cellTooltip: true
                        },
                        { name:'Persona', field: 'persona'},
                        { name: 'Channel', field:'channel'},
                        { name: 'Program', field: 'program' },
                                 {
                        name: 'clone', cellToolTip: true,
                        cellTemplate: 
                            '<div class="ui-grid-cell-contents" ng-model="row.entity">' +
                            '<button type="button" class="btn btn-primary btn-sm" ' +
                            'ng-click="grid.appScope.getInfo(row)" style="border-radius: 8%; margin-left: 3px;' +
                            'padding: 0px 5px 0px 5px">Clone</button></div>'                           
                    }
                    ],
                        data: [
                                {
                                "campaign-name": "2016 Spring Quarter Campaign",
                                "persona": "High Risk",
                                "start-date": "26 Jan 2016",
                                "end-date": "15 Apr 2016",
                                "channel": "E-mail, SMS, Notifications",
                                "program": "Custom"
                            },
                            {
                                "campaign-name": "2016 Fall Quarter Campaign",
                                "persona": "High Risk",
                                "start-date": "1 Sept 2016",
                                "end-date": "30 Nov 2016",
                                "channel": "E-mail, SMS, Paper",
                                "program": "Fall into Fitness"                           
                            }
                        ]
                };
                $scope.openStartDatePicker = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.openedStartDate = true;
                    $scope.openedEndDate = false;
                };

                $scope.openEndDatePicker = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.openedEndDate = true;
                    $scope.openedStartDate = false;
                };             
                $scope.segments = SegmentService.getSegments();
                $scope.selectedSegments = SegmentService.getSegments().slice(0, 1);

                $scope.programs = ProgramService.getPrograms();
                $scope.selectedPrograms = ProgramService.getPrograms().slice(1, 2);
                ProgramService.getProgramGridJSON()
                    .then(function(data) {
                        window.console.log('data', data);
                        $scope.programs = data.data;                      
                    }, function(err) {
                        window.console.log('getProgramGrid error', err);
                    });

                $scope.nextTab = function (tab) {
                    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
                };
                }
            ]
        );
})(window.jQuery);
