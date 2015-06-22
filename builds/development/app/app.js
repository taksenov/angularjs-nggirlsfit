// author: taksenov@gmail.com

// initialize material design js
;$.material.init();

(function(){
    'use strict';

    $.material.init();

    // модуль и конфигурирование
    angular
        .module('ngGirlsFit', [
//            'ui.router',
//            'ngGirlsFit.main',
            'ui.router'
            //'ngGirlsFit.contacts',
            //'ngGirlsFit.about'
        ])
        .config(ngGFConfig);

    ngGFConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$logProvider'];

    function ngGFConfig($stateProvider, $urlRouterProvider, $locationProvider, $logProvider){
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        $logProvider.debugEnabled(false);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: function ($scope, $rootScope){
                    $rootScope.curPath = 'main';
                    $rootScope.publicPart = true;
                    $rootScope.publicPartWorkout = false;
                }
            }) // main
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'app/contacts/contacts.html',
                controller: function ($scope, $rootScope){
                    $rootScope.curPath = 'contacts';
                    $rootScope.publicPart = true;
                    $rootScope.publicPartWorkout = false;
                }
            }) // contacts
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller: function ($scope, $rootScope){
                    $rootScope.curPath = 'about';
                    $rootScope.publicPart = true;
                    $rootScope.publicPartWorkout = false;
                }
            }) // about
            .state('profile', {
                url: '/profile',
                templateUrl: 'app/private/profile/profile.html',
                controller: function ($scope, $rootScope){
                    $rootScope.curPath = 'profile';
                    $rootScope.publicPart = false;
                    $rootScope.publicPartWorkout = false;
                }
            }) // profile
            .state('statistics', {
                url: '/statistics',
                templateUrl: 'app/private/statistics/statistics.html',
                controller: function ($scope, $rootScope){
                    $rootScope.curPath = 'statistics';
                    $rootScope.publicPart = false;
                    $rootScope.publicPartWorkout = false;
                }
            }) // statistics
            .state('exercises', {
                url: '/exercises',
                templateUrl: 'app/private/exercises/exercises.html',
                controller: function ($scope, $rootScope){
                    $rootScope.curPath = 'statistics';
                    $rootScope.publicPart = false;
                    $rootScope.publicPartWorkout = false;
                }
            }) // exercises
            .state('workout', {
                url: '/workout',
                templateUrl: 'app/private/workout/workout.html',
                controller: function ($scope, $rootScope){
                    $rootScope.curPath = 'statistics';
                    $rootScope.publicPart = false;
                    $rootScope.publicPartWorkout = true;
                }
            }) // workout
            ;




    } // ~ ngGFConfig ~

})();

