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


    profileCtrl.$inject = ['$scope', '$rootScope'];
    profileAccountCtrl.$inject = ['$scope', '$rootScope', 'ngfitfire'];
    profilePasswordCtrl.$inject = ['$scope', '$rootScope'];
    profileAchivmentsCtrl.$inject = ['$scope', '$rootScope'];
    profileDesignCtrl.$inject = ['$scope', '$rootScope'];

    function profileCtrl($scope, $rootScope) {

        $rootScope.curPath = 'profile';
        $rootScope.publicPart = false;
        $rootScope.publicPartWorkout = false;

    } // ~~~ profileCtrl ~~~

    function profileAccountCtrl($scope, $rootScope, ngfitfire) {

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
