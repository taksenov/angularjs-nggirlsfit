/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.main')
        .controller('MainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', '$rootScope'];

    function mainCtrl($scope, $rootScope) {
        $rootScope.curPath = 'main';
        $rootScope.publicPart = true;
        $rootScope.publicPartWorkout = false;
    } // ~~~ mainCtrl ~~~

})();


