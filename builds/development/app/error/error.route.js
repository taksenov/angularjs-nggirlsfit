/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.error404')
        .config(route);

    route.$inject = ['$stateProvider'];

    function route($stateProvider) {
        $stateProvider
            .state('error', {
                templateUrl: 'app/error/error.html',
                controller: 'Error404Ctrl',
                controllerAs: 'vm'
            }) // 404 error
        ;
    }

})();

