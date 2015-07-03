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
        '$rootScope', '$modalInstance', 'modalCaption',
        'AuthfireFactory'
    ];
    modalSingUpCtrl.$inject = [
        '$scope', '$modal', '$log',
        '$rootScope', '$modalInstance', 'modalCaption',
        'AuthfireFactory'
    ];

    function modalSingInCtrl ( $scope, $modal,
                               $log, $rootScope,
                               $modalInstance, modalCaption,
                               AuthfireFactory ) {

        var vm = this;

        $scope.modalCaption = modalCaption;

        $scope.credentials = {
            email: null,
            password: null
        };

        vm.login = function (  ) {
            AuthfireFactory.login( $scope.credentials );

            $log.debug( 'Login!',
                'UserName =', $scope.credentials.email,
                'UserPassword =', $scope.credentials.password  );
        }; // ~~~ vm.login ~~~

        $scope.ok = function () {

            if ( !$scope.credentials.email || !$scope.credentials.password ) {
                $log.debug('Для входа необходимо ввести логин и пароль');
            } else {
                vm.login();
                $modalInstance.close();
            }
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    } // ~~~ modalSingInCtrl ~~~

    function modalSingUpCtrl ( $scope, $modal,
                               $log, $rootScope,
                               $modalInstance, modalCaption,
                               AuthfireFactory ) {

        var vm = this;

        $scope.modalCaption = modalCaption;
        $scope.newUserData = {
            name: null,
            email: null,
            password: null
        };

        vm.signUp = function (  ) {
            AuthfireFactory.signUp( $scope.newUserData );

            $log.debug( 'SignUp!',
                'UserName =', $scope.newUserData.name,
                'Email =', $scope.newUserData.email,
                'UserPassword =', $scope.newUserData.password  );
        }; // ~~~ vm.login ~~~

        $scope.ok = function () {
            if ( !$scope.newUserData.email ||
                 !$scope.newUserData.password ||
                 !$scope.newUserData.name
            ) {
                $log.debug('Для регистрации должны быть заполнены все поля');
            } else {
                vm.signUp();
                $modalInstance.close();
            }
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    } // ~~~ modalSingUpCtrl ~~~

})();


