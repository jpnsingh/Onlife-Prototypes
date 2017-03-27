(function () {
    'use strict';

    angular.module('olh-lps-campaign')
        .service('SegmentService', [
            function () {
                return {
                    getSegments: function () {
                        return [
                          {
                                category: 'Chronic/High Risk',
                                gender: 'Male',
                                ageGroup: 'Age Group 40-50',
                                race: 'White / Caucasian',
                                communication: 'Email',
                                behavior: 'High Risk history & Behaviour & Little or no mindfullness regarding Health',
                                lifestyle: 'Avoidant or reactive + Healthy but "Live Hard and may die young',
                                healthCategories: 'High Risk history',
                                users: {
                                    count: '1.1',
                                    withEmail: '753',
                                    withPhone: '349'
                                }
                            },
                            {
                                category: 'Healthy Strivers',
                                gender: 'Male',
                                ageGroup: 'Age Group 40-50',
                                race: 'White / Caucasian',
                                communication: 'Email',
                                behavior: 'Health is OK, but not as fit and robust as desired + mindful regarding health and aware of some personal risks',
                                lifestyle: 'Intermittently proactive, but difficulty sustaining change/action + consumer orientation to health care',
                                healthCategories: 'Medium Risk',
                                users: {
                                    count: '0.9',
                                    withEmail: '451',
                                    withPhone: '332'
                                }
                            },
      
                            {
                                category: 'Healthy Naturally',
                                gender: 'Female',
                                ageGroup: 'Age Group 40-50',
                                race: 'White / Caucasian',
                                communication: 'Text',
                                behavior: 'Health is excellent, Not mindful of health unless for cosmetic purposes (i.e. Dentist visits)',
                                lifestyle: 'Naturally active lifestyle, Strong consumerism',
                                healthCategories: 'High Risk history',
                                users: {
                                    count: '0.7',
                                    withEmail: '320',
                                    withPhone: '401'
                                }
                            },
                            {
                                category: 'Holistic Wellness',
                                gender: 'Male',
                                ageGroup: 'Age Group 30-40',
                                race: 'Asian / Afro American',
                                communication: 'Email',
                                behavior: ' Extremely mindful of health and fitness, Goal driven - striving for continuous improvement',
                                lifestyle: 'Holistic orientation and actions, Self-directed with strong consumerism',
                                healthCategories: 'High Risk history',
                                users: {
                                    count: '0.5',
                                    withEmail: '360',
                                    withPhone: '121'
                                }
                            },
                            {
                                category: 'Uncategorized',
                                gender: 'Female',
                                ageGroup: 'Age Group 40-50',
                                race: 'White / Caucasian',
                                communication: 'Text',
                                behavior: 'Unknown behavior',
                                lifestyle: 'Unknown lifestyle',
                                healthCategories: 'Unknown',
                                users: {
                                    count: '6.8',
                                    withEmail: '4341',
                                    withPhone: '3492'
                                }
                            }
                        ]
                    }
                };
            }
        ]);
})();
