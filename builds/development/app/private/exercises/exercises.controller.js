/**
 * Created by taksenov@gmail.com on 24.06.2015.
 */

;(function() {
    'use strict';

    angular
        .module('ngGirlsFit.exercises')
        .controller('ExercisesCtrl', exercisesCtrl)
        .controller('ExercisesBlocksCtrl', exercisesBlocksCtrl)
        .controller('ExercisesStringsCtrl', exercisesStringsCtrl)
        .controller('ModalInstanceCtrl', modalInstanceCtrl)
    ;

    exercisesCtrl.$inject = ['$scope', '$rootScope',  'ngfitfire', '$modal'];
    exercisesBlocksCtrl.$inject = ['$scope', '$rootScope', 'ngfitfire', '$modal'];
    exercisesStringsCtrl.$inject = ['$scope', '$rootScope', 'ngfitfire', '$modal'];
    modalInstanceCtrl.$inject = [
                                '$scope', '$modal', '$log', '$rootScope',
                                'ngfitfire', '$modalInstance',
                                //'items',
                                'modalCaption', 'exercise'
                            ];

    function modalInstanceCtrl(
                                $scope, $modal, $log, $rootScope, ngfitfire, $modalInstance,
                                modalCaption, exercise
                            ) {

        $scope.modalCaption = modalCaption;
        $scope.exercise = exercise;

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    } // ~~~ modalInstanceCtrl ~~~

    function exercisesCtrl($scope, $rootScope, ngfitfire, $modal) {

        var vm = this;

        $scope.animationsEnabled = true;

        // всплывающая подсказка над ачивками, больше не удаляй!
        angular.element('.gf-left-navigation__list [data-toggle="tooltip"]').tooltip();

        $rootScope.curPath = 'exercises';
        $rootScope.publicPart = false;
        $rootScope.publicPartWorkout = false;

    } // ~~~ exercisesCtrl ~~~

    function exercisesBlocksCtrl($scope, $rootScope, ngfitfire, $modal) {

        var vm = this;

        $scope.animationsEnabled = true;

        ngfitfire.getUserExercises( function (_data) {
            vm.userExercises = _data;
        } ); // ~~~ getUserExercises ~~~

        vm.editUserExercise = function (_exercise) {
            $scope.exercise = _exercise;
            $scope.modalCaption = 'Редактировать упражнение';
            $modal.open(
                        {
                            animation: $scope.animationsEnabled,
                            templateUrl: '/app/private/exercises/exercises.modal.html',
                            controller: 'ModalInstanceCtrl',
                            resolve: {
                                modalCaption: function () {
                                    return $scope.modalCaption;
                                },
                                exercise: function () {
                                    return $scope.exercise;
                                }
                            }
                        }
            ); // ~~~ $modal.open ~~~
        };

        vm.openModalForAddExercise = function (e) {
            e.preventDefault();
            $scope.exercise = null;
            $scope.modalCaption = 'Добавить упражнение';
            $modal.open(
                        {
                            animation: $scope.animationsEnabled,
                            templateUrl: '/app/private/exercises/exercises.modal.html',
                            controller: 'ModalInstanceCtrl',
                            resolve: {
                                modalCaption: function () {
                                    return $scope.modalCaption;
                                },
                                exercise: function () {
                                    return $scope.exercise;
                                }
                            }
                        }
            ); // ~~~ $modal.open ~~~
        };

    } // ~~~ exercisesBlocksCtrl ~~~

    function exercisesStringsCtrl($scope, $rootScope, ngfitfire, $modal) {

        var vm = this;

        $scope.animationsEnabled = true;

        ngfitfire.getUserExercises( function (_data) {
            vm.userExercises = _data;
        } ); // ~~~ getUserExercises ~~~

        vm.editUserExercise = function (_exercise) {
            $scope.exercise = _exercise;
            $scope.modalCaption = 'Редактировать упражнение';
            $modal.open(
                        {
                            animation: $scope.animationsEnabled,
                            templateUrl: '/app/private/exercises/exercises.modal.html',
                            controller: 'ModalInstanceCtrl',
                            resolve: {
                                modalCaption: function () {
                                    return $scope.modalCaption;
                                },
                                exercise: function () {
                                    return $scope.exercise;
                                }
                            }
                        }
            ); // ~~~ $modal.open ~~~
        };

        vm.openModalForAddExercise = function (e) {
            e.preventDefault();
            $scope.exercise = null;
            $scope.modalCaption = 'Добавить упражнение';
            $modal.open(
                        {
                            animation: $scope.animationsEnabled,
                            templateUrl: '/app/private/exercises/exercises.modal.html',
                            controller: 'ModalInstanceCtrl',
                            resolve: {
                                modalCaption: function () {
                                    return $scope.modalCaption;
                                },
                                exercise: function () {
                                    return $scope.exercise;
                                }
                            }
                        }
            ); // ~~~ $modal.open ~~~
        };

    } // ~~~ exercisesStringsCtrl ~~~

})();
