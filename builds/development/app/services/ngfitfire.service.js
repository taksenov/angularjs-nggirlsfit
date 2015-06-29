/**
 * Created by taksenov@gmail.com on 25.06.2015.
 */

;(function(){
    'use strict';

    angular
        .module('ngGirlsFit.firebase.service', ['firebase'])
        .service('ngfitfire', ngfitfire);

    ngfitfire.$inject = ['FIREBASE_URL', '$firebaseObject', '$firebaseArray'];

    function ngfitfire(FIREBASE_URL, $firebaseObject, $firebaseArray){

        var self = this;

        var ref = new Firebase( FIREBASE_URL );
        var refObj = $firebaseObject( ref );
        var refArr = $firebaseArray( ref );
        var usersRef = ref.child('users');
        var usersArr = $firebaseArray(usersRef);
        var exercisesRef = ref.child( 'exercises' );
        var exercisesArr = $firebaseArray( exercisesRef );

        // todo тестовый пользователь, потом удалить
        var testUserRef = new Firebase( FIREBASE_URL + 'users/-Jsiscs19tncANzV2ti5' );
        var testUserObj = $firebaseObject( testUserRef );
        self.getTestUser = function(call_back){
            return testUserObj.$loaded( call_back );
        };
        // ~~~ ~~~

        // получение списка упражнений пользователя
        self.getUserExercises = function(call_back){
            return exercisesArr.$loaded( call_back );
        };
        // ~~~ ~~~






        self.getUsers = function(call_back){
            return usersArr.$loaded( call_back );
        };

        self.addUser = function( _user ){
            usersRef.push( _user );
        };

        refObj.$loaded(function(){
            self.dbObj = refObj;
        });

        refArr.$loaded(function(){
            self.dbArr = refArr;
        });

        //console.log( ref );


    }

})();

