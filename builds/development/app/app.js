// author: taksenov@gmail.com

// initialize material design js
;$.material.init();

(function(){
    'use strict';

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
            // main
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: function ($scope, $rootScope){
                    $rootScope.curPath = 'main';
                }
            })
            // contacts
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'app/contacts/contacts.html',
                controller: function ($scope, $rootScope){
                    $rootScope.curPath = 'contacts';
                }
            })
            //// about
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller: function ($scope, $rootScope){
                    $rootScope.curPath = 'about';
                }
            });




    } // ~ ngGFConfig ~

})();

