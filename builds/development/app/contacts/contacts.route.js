/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.contacts')
        .config(route);

    route.$inject = ['$stateProvider'];

    function route($stateProvider) {
        $stateProvider
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'app/contacts/contacts.html',
                controller: 'ContactsCtrl',
                controllerAs: 'vm'
            });
    }

})();

