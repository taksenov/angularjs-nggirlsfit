/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.exercises')
        .controller('ExercisesCtrl', exercisesCtrl)
        .controller('ExercisesBlocksCtrl', exercisesBlocksCtrl)
        .controller('ExercisesStringsCtrl', exercisesStringsCtrl);

    exercisesCtrl.$inject = ['$scope', '$rootScope'];
    exercisesBlocksCtrl.$inject = ['$scope', '$rootScope'];
    exercisesStringsCtrl.$inject = ['$scope', '$rootScope'];

    function exercisesCtrl($scope, $rootScope) {
        $rootScope.curPath = 'statistics';
        $rootScope.publicPart = false;
        $rootScope.publicPartWorkout = false;
    } // ~~~ exercisesCtrl ~~~

    function exercisesBlocksCtrl($scope, $rootScope) {

    } // ~~~ exercisesBlocksCtrl ~~~

    function exercisesStringsCtrl($scope, $rootScope) {

    } // ~~~ exercisesStringsCtrl ~~~



})();
