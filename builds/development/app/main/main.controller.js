/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.main')
        .controller('MainCtrl', mainCtrl)
        .controller('OpenModalSingInCtrl', openModalSingInCtrl)
    ;

    mainCtrl.$inject = [ '$scope', '$rootScope',
                         'ngfitfire', '$modal',
                         'AuthfireFactory' ];
    openModalSingInCtrl.$inject = [ '$scope', '$rootScope',
                                    'ngfitfire', '$modal',
                                    'AuthfireFactory', 'FIREBASE_URL' ];

    function mainCtrl( $scope, $rootScope,
                       ngfitfire, $modal,
                       AuthfireFactory ) {

        var vm = this;

        $rootScope.curPath = 'main';
        $rootScope.publicPart = true;
        $rootScope.publicPartWorkout = false;

        vm.animationsEnabled = true;

        vm.openModalSingUp = function (  ) {
            vm.modalCaption = 'Регистрация';
            $modal.open(
                {
                    animation: vm.animationsEnabled,
                    templateUrl: '/app/components/auth-modal/sign-up-modal.html',
                    controller: 'ModalSingUpCtrl',
                    resolve: {
                        modalCaption: function () {
                            return vm.modalCaption;
                        }
                    }
                }
            ); // ~~~ $modal.open ~~~
        }; // ~~~ openModalSingUp ~~~

    } // ~~~ mainCtrl ~~~

    function openModalSingInCtrl( $scope, $rootScope,
                                  ngfitfire, $modal,
                                  AuthfireFactory, FIREBASE_URL ) {

        var vm = this;

        vm.animationsEnabled = true;

        vm.openModalSingIn = function ( e ) {
            e.preventDefault();
            vm.modalCaption = 'Вход в личный кабинет';
            $modal.open(
                {
                    animation: vm.animationsEnabled,
                    templateUrl: '/app/components/auth-modal/sign-in-modal.html',
                    controller: 'ModalSingInCtrl',
                    resolve: {
                        modalCaption: function () {
                            return vm.modalCaption;
                        }
                    }
                }
            ); // ~~~ $modal.open ~~~
        }; // ~~~ openModalSingIn ~~~

        vm.logout = function (  ) {
            AuthfireFactory.logout();
        }; // ~~~ vm.logout ~~~

    } // ~~~ openModalSingInCtrl ~~~

})();


