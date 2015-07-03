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

            //vkontakteLogin: function ( _user, authHandler ) {
            //
            //    authHandler = typeof authHandler !== 'undefined' ? authHandler : vkontakteSocialAuthHandle;
            //
            //    ref.authWithOAuthPopup( "vkontakte", authHandler, {
            //
            //    } )
            //
            //}, // ~~~ vkontakteLogin ~~~

            twitterLogin: function ( _user, authHandler ) {

                authHandler = typeof authHandler !== 'undefined' ? authHandler : twitterSocialAuthHandle;

                ref.authWithOAuthPopup( "twitter", authHandler, {

                } )

            }, // ~~~ twitterLogin ~~~

            facebookLogin: function ( _user, authHandler ) {

                authHandler = typeof authHandler !== 'undefined' ? authHandler : facebookSocialAuthHandle;

                ref.authWithOAuthPopup( "facebook", authHandler, {
                    scope: "public_profile,\ " +          // https://developers.facebook.com/docs/facebook-login/permissions/v2.3
                           "email"                        // https://developers.facebook.com/docs/facebook-login/permissions/v2.3
                } )

            }, // ~~~ facebookLogin ~~~

            googleLogin: function ( _user, authHandler ) {

                authHandler = typeof authHandler !== 'undefined' ? authHandler : googleSocialAuthHandle;

                ref.authWithOAuthPopup( "google", authHandler, {
                    scope: "profile,\ " +                 // userinfo.profile
                           "email"                        // userinfo.email
                } )

            }, // ~~~ googleLogin ~~~

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

                var userRef;
                var user;

                if ( authData.google && authData.google.id ) {
                    userRef = ref.child('users').child( authData.google.id );
                } else if ( authData.facebook && authData.facebook.id ) {
                    userRef = ref.child('users').child( authData.facebook.id );
                } else if ( authData.twitter && authData.twitter.id ) {
                    userRef = ref.child('users').child( authData.twitter.id );
                } else {
                    userRef = ref.child('users').child(authData.uid);
                }

                user = $firebaseObject(userRef);

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

        //function vkontakteSocialAuthHandle ( error, authData ) {
        //    if ( error ) {
        //        $log.error( 'vkontakte Social Authentication error: ', error );
        //    } else {
        //        $log.debug( 'vkontakte Authentication data: ', authData );
        //        //var userRef = ref.child('users').child( authData.vkontakte.id );
        //        //var user = $firebaseObject( userRef );
        //        //
        //        //user.$loaded( function () {
        //        //    if ( user.username ) {
        //        //        userRef.child( 'lastactivity').set( Firebase.ServerValue.TIMESTAMP );
        //        //    } else {
        //        //        userRef.set({
        //        //            'username': authData.vkontakte.username,
        //        //            'name': authData.vkontakte.displayName,
        //        //            'avatar': authData.vkontakte.cachedUserProfile.profile_image_url, // https://dev.twitter.com/overview/api/users
        //        //            'id': authData.vkontakte.id,
        //        //            'token': authData.token,
        //        //            'uid': authData.uid,
        //        //            'expires': authData.expires,
        //        //            'accesstoken': authData.vkontakte.accessToken,
        //        //            'lastactivity': Firebase.ServerValue.TIMESTAMP
        //        //        });
        //        //    }
        //        //})
        //
        //    }
        //} // ~~~ vkontakteSocialAuthHandle ~~~

        function twitterSocialAuthHandle ( error, authData ) {
            if ( error ) {
                $log.error( 'Twitter Social Authentication error: ', error );
            } else {
                $log.debug( 'Twitter Authentication data: ', authData );
                var userRef = ref.child('users').child( authData.twitter.id );
                var user = $firebaseObject( userRef );

                user.$loaded( function () {
                    if ( user.username ) {
                        userRef.child( 'lastactivity').set( Firebase.ServerValue.TIMESTAMP );
                    } else {
                        userRef.set({
                            'username': authData.twitter.username,
                            'name': authData.twitter.displayName,
                            'avatar': authData.twitter.cachedUserProfile.profile_image_url, // https://dev.twitter.com/overview/api/users
                            'id': authData.twitter.id,
                            'token': authData.token,
                            'uid': authData.uid,
                            'expires': authData.expires,
                            'accesstoken': authData.twitter.accessToken,
                            'lastactivity': Firebase.ServerValue.TIMESTAMP
                        });
                    }
                })

            }
        } // ~~~ twitterSocialAuthHandle ~~~

        function facebookSocialAuthHandle ( error, authData ) {
            if ( error ) {
                $log.error( 'Facebook Social Authentication error: ', error );
            } else {
                $log.debug( 'Facebook Authentication data: ', authData );
                var userRef = ref.child('users').child( authData.facebook.id );
                var user = $firebaseObject( userRef );

                user.$loaded( function () {
                    if ( user.email ) {
                        userRef.child( 'lastactivity').set( Firebase.ServerValue.TIMESTAMP );
                    } else {
                        userRef.set({
                            'email': authData.facebook.email,
                            'name': authData.facebook.displayName,
                            'avatar': authData.facebook.cachedUserProfile.picture, // https://developers.facebook.com/docs/graph-api/reference/user/
                            'id': authData.facebook.id,
                            'token': authData.token,
                            'uid': authData.uid,
                            'expires': authData.expires,
                            'accesstoken': authData.facebook.accessToken,
                            'lastactivity': Firebase.ServerValue.TIMESTAMP
                        });
                    }
                })

            }
        } // ~~~ facebookSocialAuthHandle ~~~

        function googleSocialAuthHandle ( error, authData ) {
            if ( error ) {
                $log.error( 'Google Social Authentication error: ', error );
            } else {
                $log.debug( 'Google Authentication data: ', authData );
                var userRef = ref.child('users').child( authData.google.id );
                var user = $firebaseObject( userRef );

                user.$loaded( function () {
                    if ( user.email ) {
                        userRef.child( 'lastactivity').set( Firebase.ServerValue.TIMESTAMP );
                    } else {
                        userRef.set({
                            'email': authData.google.email,
                            'name': authData.google.displayName,
                            'avatar': authData.google.cachedUserProfile.picture,
                            'id': authData.google.id,
                            'token': authData.token,
                            'uid': authData.uid,
                            'expires': authData.expires,
                            'accesstoken': authData.google.accessToken,
                            'lastactivity': Firebase.ServerValue.TIMESTAMP
                        });
                    }
                })

            }
        } // ~~~ googleSocialAuthHandle ~~~


        ref.onAuth( authDataCallBack );

        $rootScope.isSignedIn = function (  ) {
            return authObj.isSignedIn();
        };

        return authObj;

    } // ~~~ authfireFactory ~~~

})();






