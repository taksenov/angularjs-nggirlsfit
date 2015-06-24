/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.about')
        .config(route);

    route.$inject = ['$stateProvider'];

    function route($stateProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'vm'
            });
    }

})();
