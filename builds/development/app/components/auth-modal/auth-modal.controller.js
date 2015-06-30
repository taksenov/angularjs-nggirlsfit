/**
 * Created by taksenov@gmail.com on 01.07.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.auth-modal')
        .controller('ModalSingInCtrl', modalSingInCtrl)
        .controller('ModalSingUpCtrl', modalSingUpCtrl)
    ;

    modalSingInCtrl.$inject = [
        '$scope', '$modal', '$log',
        '$rootScope', '$modalInstance', 'modalCaption'
    ];
    modalSingUpCtrl.$inject = [
        '$scope', '$modal', '$log',
        '$rootScope', '$modalInstance', 'modalCaption'
    ];

    function modalSingInCtrl ( $scope, $modal, $log,
                               $rootScope, $modalInstance, modalCaption ) {

        var vm = this;

        $scope.modalCaption = modalCaption;

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };


    } // ~~~ modalSingInCtrl ~~~

    function modalSingUpCtrl ( $scope, $modal, $log,
                               $rootScope, $modalInstance, modalCaption ) {

        var vm = this;

        $scope.modalCaption = modalCaption;

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    } // ~~~ modalSingUpCtrl ~~~













})();

























/*        .controller('ModalSignInController')
        .controller()  */
