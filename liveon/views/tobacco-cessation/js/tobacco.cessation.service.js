(function () {
    angular
        .module('olh-liveon-tobacco-cessation')
        .factory('TobaccoCessationService', TobaccoCessationService);

    TobaccoCessationService.$inject = [];
    function TobaccoCessationService() {
        return {
            getTobaccoCessationItems: getTobaccoCessationItems
        };

        function getTobaccoCessationItems() {
            return [
                {
                    id: 1,
                    title: 'Connect with your Health Coach.',
                    description: 'Your coach will provide the information, suggestion, feedback and encouragement you need to succeed!',
                    button: {
                        text: 'Talk To Your Coach'
                    }
                },
                {
                    id: 2,
                    title: 'Follow your S.T.A.R.T. Plan.',
                    description: 'Complete these 5 steps to increase your chances of quitting smoking. Get started by setting your quit date!',
                    button: {
                        text: 'Start Your Plan'
                    }
                },
                {
                    id: 3,
                    title: 'Start the “Breathe Easier” Challenge.',
                    description: 'Participate in a 4-week friendly competition with others who are working towards the tobacco free goal!',
                    button: {
                        text: 'Start Challenge'
                    }
                },
                {
                    id: 4,
                    title: 'Track your Current Tobacco Use.',
                    description: 'Tracking your progress along the way will show you how far you’ve come and motivate you to keep going!',
                    button: {
                        text: 'Track Now'
                    }
                }
            ];
        }
    }
})();
