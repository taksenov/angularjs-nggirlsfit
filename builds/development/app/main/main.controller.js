/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.main')
        .controller('MainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', '$rootScope', 'ngfitfire'];

    function mainCtrl($scope, $rootScope, ngfitfire) {

        var vm = this;

        $rootScope.curPath = 'main';
        $rootScope.publicPart = true;
        $rootScope.publicPartWorkout = false;

        //ngfitfire.getUsers( function (_data) {
        //    vm.users = _data;
        //
        //    //console.log( vm.users );
        //
        //} ); // получить список пользователей
        //
        //
        //
        //
        //vm.user = {
        //    name: null,
        //    age: 0
        //}; // пустой объект для пользователя
        //
        //vm.addUser = function(){
        //    ngfitfire.addUser( vm.user );
        //}; // добавить пользователя



    } // ~~~ mainCtrl ~~~

})();


