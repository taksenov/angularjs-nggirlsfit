/**
 * Created by taksenov@gmail.com on 29.06.2015.
 */

;(function(){
    'use strict';

    angular
        .module( 'authfire.factory', [ 'firebase' ] )
        .factory( 'AuthfireFactory', authfireFactory )
    ;

    authfireFactory.$inject = [ '$firebaseAuth', '$rootScope',
                         'FIREBASE_URL', '$log',
                         '$firebaseObject'  ];

    function authfireFactory( $firebaseAuth, $rootScope,
                       FIREBASE_URL, $log,
                       $firebaseObject ) {

        var ref = new Firebase( FIREBASE_URL );
        var auth = $firebaseAuth( ref );
        var authObj = {
            login: function( _user, authHandler ) {

                authHandler = typeof authHandler !== 'undefined' ? authHandler : authHandle;

                auth.$authWithPassword( _user )
                    .then( authHandler )
                    .catch( function ( error ) {
                        $log.error( 'Authentication error: ', error );
                    })
                ; // ~~~ auth.$authWithPassword ~~~

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
            }, // ~~~ getAuth ~~~

            signUp: function ( _user ) {
                return auth.$createUser({
                    email: _user.email,
                    password: _user.password
                })
                .then( function ( userData ) {
                    $log.debug( 'User ' + userData.uid + ' created!' );

                    var userRef = ref.child('users').child(userData.uid);

                    userRef.set({
                        name: _user.name,
                        email: _user.email,
                        date: Firebase.ServerValue.TIMESTAMP
                    });

                    return auth.$authWithPassword({
                        email: _user.email,
                        password: _user.password
                    });
                }) // ~~~ then ~~~
                .catch( function ( error ) {
                    $log.error( 'Create user errror ', error );
                }); // ~~~ catch ~~~
            } // ~~~signUp ~~~

            ,
            ngAuth: function () {
                return auth
            }

        };  // ~~~ authObj ~~~

        function authDataCallBack ( authData ) {
            if ( authData ) {
                var userRef = ref.child('users').child(authData.uid);
                var user = $firebaseObject(userRef);

                user.$loaded().then( function (  ) {
                    $rootScope.currentUser = user;
                });
            } else {
                $rootScope.currentUser = null;
            }
        } // ~~~ authDataCallBack ~~~

        function authHandle ( authData ) {
            console.log( 'Authenticated success!', authData );
        } // ~~~ authHandle ~~~

        ref.onAuth( authDataCallBack );

        $rootScope.isSignedIn = function (  ) {
            return authObj.isSignedIn();
        };

        return authObj;

    } // ~~~ authfireFactory ~~~

})();






