/**
 * Created by admin on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.workout')
        .controller('WorkoutCtrl', workoutCtrl);

    workoutCtrl.$inject = ['$scope', '$rootScope'];

    function workoutCtrl($scope, $rootScope) {
        $rootScope.curPath = 'statistics';
        $rootScope.publicPart = false;
        $rootScope.publicPartWorkout = true;
    }

})();


