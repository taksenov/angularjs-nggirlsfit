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
            'ngGirlsFit.about',
            'ngGirlsFit.contacts',
            'ngGirlsFit.workout',
            'ngGirlsFit.exercises',
            'ngGirlsFit.statistics',
            'ngGirlsFit.profile',
            'ngGirlsFit.error404',
            'ngGirlsFit.main',
            'ngGirlsFit.charts',
            'ui.router',
            'chart.js',
            'ui.bootstrap'
        ])

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
        ; // ~~~ $urlRouterProvider ~~~

    } // ~~~ ngGFConfig ~~~

})();

