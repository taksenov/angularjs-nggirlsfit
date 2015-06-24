/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.profile')
        .config(route);

    route.$inject = ['$stateProvider', '$urlRouterProvider'];

    function route($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .when('/profile', '/profile/account')             //редирект в профиль --> учетная запись
        ; // ~~~ $urlRouterProvider ~~~

        $stateProvider
            .state('profile', {
                url: '/profile',
                templateUrl: 'app/private/profile/profile.html',
                controller: 'ProfileCtrl',
                controllerAs: 'vm'
            }) // profile
            // nested states ~~~ Идея дернута вот отсюда https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating
            // пункты меню в профиле
            .state('profile.account', {
                url: '/account',
                templateUrl: 'app/private/profile/profile.account.html',
                controller: 'ProfileAccountCtrl',
                controllerAs: 'vm'
            }) // учетная запись
            .state('profile.password', {
                url: '/password',
                templateUrl: 'app/private/profile/profile.password.html',
                controller: 'ProfilePasswordCtrl',
                controllerAs: 'vm'
            }) // пароль
            .state('profile.achivments', {
                url: '/achivments',
                templateUrl: 'app/private/profile/profile.achivments.html',
                controller: 'ProfileAchivmentsCtrl',
                controllerAs: 'vm'
            }) // достижения
            .state('profile.design', {
                url: '/design',
                templateUrl: 'app/private/profile/profile.design.html',
                controller: 'ProfileDesignCtrl',
                controllerAs: 'vm'
            }) // дизайн


        ; // ~~~ $stateProvider ~~~
    }

})();


