/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.statistics')
        .controller('StatisticsCtrl', statisticsCtrl)
        .controller('StatisticsCommonCtrl', statisticsCommonCtrl)
        .controller('StatisticsDetailCtrl', statisticsDetailCtrl);

    statisticsCtrl.$inject = ['$scope', '$rootScope'];
    statisticsCommonCtrl.$inject = ['$scope', '$rootScope'];
    statisticsDetailCtrl.$inject = ['$scope', '$rootScope'];

    function statisticsCtrl($scope, $rootScope) {
        $rootScope.curPath = 'statistics';
        $rootScope.publicPart = false;
        $rootScope.publicPartWorkout = false;
    } // ~~~ statisticsCtrl ~~~

    function statisticsCommonCtrl($scope, $rootScope) {

    } // ~~~ statisticsCommonCtrl ~~~

    function statisticsDetailCtrl($scope, $rootScope) {

    } // ~~~ statisticsDetailCtrl ~~~



})();
