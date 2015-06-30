/**
 * Created by taksenov@gmail.com on 29.06.2015.
 */

;(function(){
    'use strict';

    angular
        .module( 'authfire.factory', [ 'firebase' ] )
        .factory( 'authfire', authfire )
    ;

    authfire.$inject = [ '$firebaseAuth', '$rootScope', 'FIREBASE_URL', '$log'  ];

    function authfire( $firebaseAuth, $rootScope, FIREBASE_URL, $log ) {

        var ref = new Firebase( FIREBASE_URL );

        var authObj = {

            login: function( _user, authHandler ) {

                ref.authWithPassword( _user )
                    .then( function ( authData ) {
                        $log.debug( 'User logged in: ', authData );
                    })
                    .catch( function ( error ) {
                        $log.error( 'Authentication error: ', error );
                    })
                ; // ~~~ ref.authWithPassword ~~~

            },  // ~~~ login ~~~

            logout: function (  ) {
                ref.unauth();
            },  // ~~~ logout ~~~

            isSignedIn: function (  ) {
                return !!ref.getAuth(); // проверка на то,
                                        // залогинен ли пользователь, возвращает булевское значение
            }, // ~~~ isSignedIn ~~~

            getAuth: function (  ) {
                return ref.getAuth();
            } // ~~~ getAuth ~~~

        };  // ~~~ authObj ~~~

        $rootScope.isSignedIn = function (  ) {
            return authObj.isSignedIn();
        };

        return authObj;

    } // ~~~ authfire ~~~

})();






