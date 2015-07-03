/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.profile')
        .controller('ProfileCtrl', profileCtrl)
        .controller('ProfileAccountCtrl', profileAccountCtrl)
        .controller('ProfilePasswordCtrl', profilePasswordCtrl)
        .controller('ProfileAchivmentsCtrl', profileAchivmentsCtrl)
        .controller('ProfileDesignCtrl', profileDesignCtrl);


    profileCtrl.$inject = [ '$scope', '$rootScope',
                            'AuthfireFactory' ];
    profileAccountCtrl.$inject = [ '$scope', '$rootScope',
                                   'ngfitfire', 'AuthfireFactory' ];
    profilePasswordCtrl.$inject = ['$scope', '$rootScope'];
    profileAchivmentsCtrl.$inject = ['$scope', '$rootScope'];
    profileDesignCtrl.$inject = ['$scope', '$rootScope'];

    function profileCtrl( $scope, $rootScope,
                          AuthfireFactory ) {

        var vm = this;

        $rootScope.curPath = 'profile';
        $rootScope.publicPart = false;
        $rootScope.publicPartWorkout = false;

        vm.logout = function (  ) {
            console.log( 'Пользователь должен выйти из системы.' );
            AuthfireFactory.logout();
        }; // ~~~ vm.logout ~~~

    } // ~~~ profileCtrl ~~~

    function profileAccountCtrl( $scope, $rootScope,
                                 ngfitfire, AuthfireFactory ) {

        var vm = this;

        // todo Добавление тестового пользователя в профиль, удалить после тестирования
        ngfitfire.getTestUser( function (_data) {
            vm.testUser = _data;

            $rootScope.testUserNameRootScope = vm.testUser.name;

            //console.log( vm.testUser.name );

        } );

    } // ~~~ profileAccountCtrl ~~~

    function profilePasswordCtrl($scope, $rootScope) {

    } // ~~~ profilePasswordCtrl ~~~
    function profileAchivmentsCtrl($scope, $rootScope) {

    } // ~~~ profileAchivmentsCtrl ~~~
    function profileDesignCtrl($scope, $rootScope) {

    } // ~~~ profileDesignCtrl ~~~

})();
