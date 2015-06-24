/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.exercises')
        .config(route);

    route.$inject = ['$stateProvider', '$urlRouterProvider'];

    function route($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .when('/exercises', '/exercises/blocks')          //редирект в упражнения --> вид плитка
        ; // ~~~ $urlRouterProvider ~~~

        $stateProvider
            .state('exercises', {
                url: '/exercises',
                templateUrl: 'app/private/exercises/exercises.html',
                controller: 'ExercisesCtrl',
                controllerAs: 'vm'
            }) // exercises
            // nested states
            .state('exercises.blocks', {
                url: '/blocks',
                templateUrl: 'app/private/exercises/exercises.blocks.html',
                controller: 'ExercisesBlocksCtrl',
                controllerAs: 'vm'
            }) // упражнения плиткой
            .state('exercises.strings', {
                url: '/strings',
                templateUrl: 'app/private/exercises/exercises.strings.html',
                controller: 'ExercisesStringsCtrl',
                controllerAs: 'vm'
            }) // упражнения в строчку
        ; // ~~~ $stateProvider ~~~
    }

})();






