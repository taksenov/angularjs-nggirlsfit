// author: taksenov@gmail.com

// initialize material design js
;$.material.init();

(function(){
    'use strict';

    $.material.init();

    angular.element('#inputDateOfBirth').datepicker({               // todo эта скотина не работает! отключить т.к. есть ui-bootstrap
        language: "ru",                                             // todo эта скотина не работает! отключить т.к. есть ui-bootstrap
    autoclose: true                                                 // todo эта скотина не работает! отключить т.к. есть ui-bootstrap
    });                                                             // todo эта скотина не работает! отключить т.к. есть ui-bootstrap

    // модуль и конфигурирование
    angular
        .module('ngGirlsFit', [
//            'ui.router',
//            'ngGirlsFit.main',
            'ui.router',
            'chart.js',
            'ui.bootstrap'







            //'ngGirlsFit.contacts',
            //'ngGirlsFit.about'
        ])
        .config(['ChartJsProvider', function (ChartJsProvider) {
            // Configure all charts
            ChartJsProvider.setOptions({
                colours: ['#199F93', '#FF8A80'],
                responsive: true //адаптивный или нет график
            });
            // Configure all line charts
            ChartJsProvider.setOptions('Line', {
                datasetFill: true //закрашивать или нет область под лингией графика
            })
        }]) // ~~~ ChartJsProvider ~~~

        .controller("LineCtrl", ['$scope', '$timeout', function ($scope, $timeout) {

            $scope.labels = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
            $scope.series = ['Бег', 'Бег с ускорением'];
            $scope.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };

            // Simulate async data update
            $timeout(function () {
            $scope.data = [
                [28, 48, 40, 19, 86, 27, 90],
                [65, 59, 80, 81, 56, 55, 40]
            ];
            }, 3000);
        }]) // ~~~ LineCtrl ~~~

        .controller("BarCtrl", ['$scope', function ($scope) {
            $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
            $scope.series = ['Series A', 'Series B'];

            $scope.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
        }]) // ~~~ BarCtrl ~~~



        .config(ngGFConfig);

    ngGFConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$logProvider'];

    function ngGFConfig($stateProvider, $urlRouterProvider, $locationProvider, $logProvider){
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        $logProvider.debugEnabled(false);

        $urlRouterProvider.otherwise(function ($injector, $location) {
            $injector.invoke(['$state', function ($state) { $state.go('error'); }]);
            return true;
        }); // ~~~ $urlRouterProvider ~~~
            // это сдернуто из интернета для страницы 404,
            // ~~~ https://www.snip2code.com/Snippet/151390/Show-Not-Found-(404)-page-without-changi todo разобраться что такое invoke

        $urlRouterProvider
            .when('', '/')
            .when('/profile', '/profile/account')             //редирект в профиль --> учетная запись
            .when('/exercises', '/exercises/blocks')          //редирект в упражнения --> вид плитка
            .when('/statistics', '/statistics/detail')        //редирект в статистика --> детально
        ; // ~~~ $urlRouterProvider ~~~

        $stateProvider
            .state('error', {
                templateUrl: 'app/error/error.html',
                controller: function ($scope, $rootScope){
                    $rootScope.curPath = 'error';
                    $rootScope.publicPart = true;
                    $rootScope.publicPartWorkout = false;
                }
            }) // 404 error
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
            // nested states ~~~ Идея дернута вот отсюда https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating
            // пункты меню в профиле
            .state('profile.account', {
                url: '/account',
                templateUrl: 'app/private/profile/profile.account.html'
            }) // учетная запись
            .state('profile.password', {
                url: '/password',
                templateUrl: 'app/private/profile/profile.password.html'
            }) // пароль
            .state('profile.achivments', {
                url: '/achivments',
                templateUrl: 'app/private/profile/profile.achivments.html'
            }) // достижения
            .state('profile.design', {
                url: '/design',
                templateUrl: 'app/private/profile/profile.design.html'
            }) // дизайн

            .state('statistics', {
                url: '/statistics',
                templateUrl: 'app/private/statistics/statistics.html',
                controller: function ($scope, $rootScope){

                    angular.element('.gf-left-navigation__list [data-toggle="tooltip"]').tooltip();

                    $rootScope.curPath = 'statistics';
                    $rootScope.publicPart = false;
                    $rootScope.publicPartWorkout = false;
                }
            }) // statistics
            // nested states
            .state('statistics.common', {
                url: '/common',
                templateUrl: 'app/private/statistics/statistics.common.html'
            })// статистика общая
            .state('statistics.detail', {
                url: '/detail',
                templateUrl: 'app/private/statistics/statistics.detail.html'
            }) // статистика детальная

            .state('exercises', {
                url: '/exercises',
                templateUrl: 'app/private/exercises/exercises.html',
                controller: function ($scope, $rootScope){

                    angular.element('.gf-left-navigation__list [data-toggle="tooltip"]').tooltip();

                    $rootScope.curPath = 'statistics';
                    $rootScope.publicPart = false;
                    $rootScope.publicPartWorkout = false;
                }
            }) // exercises
            // nested states
            .state('exercises.blocks', {
                url: '/blocks',
                templateUrl: 'app/private/exercises/exercises.blocks.html'
            }) // упражнения плиткой
            .state('exercises.strings', {
                url: '/strings',
                templateUrl: 'app/private/exercises/exercises.strings.html'
            }) // упражнения в строчку

            .state('workout', {
                url: '/workout',
                templateUrl: 'app/private/workout/workout.html',
                controller: function ($scope, $rootScope){

                    angular.element('.gf-left-navigation__list [data-toggle="tooltip"]').tooltip();

                    $rootScope.curPath = 'statistics';
                    $rootScope.publicPart = false;
                    $rootScope.publicPartWorkout = true;
                }
            }) // workout

            ; // ~~~ $stateProvider ~~~




    } // ~~~ ngGFConfig ~~~

})();

