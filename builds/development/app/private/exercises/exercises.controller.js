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
                                'modalCaption', 'exercise',
                                'isEdit'
                            ];

    function modalInstanceCtrl(
                                $scope, $modal, $log, $rootScope, ngfitfire, $modalInstance,
                                modalCaption, exercise,
                                isEdit
                            ) {

        var vm = this;

        $scope.modalCaption = modalCaption;
        $scope.exercise = exercise;
        vm.isEdit = isEdit;

        vm.exerciseEdit = function () {
            ngfitfire.exerciseEdit($scope.exercise).then(
                function () {
                    $scope.exercise = null;
                }
            );
        }; // ~~~ vm.exerciseEdit ~~~

        vm.exerciseAdd = function () {
            ngfitfire
                .exerciseAdd($scope.exercise,
                    function () {
                        $scope.exercise = null;
                    }
                );
        }; // ~~~ vm.exerciseAdd ~~~


        $scope.ok = function () {

            if ( vm.isEdit ) {
                $log.debug('Редактируем упражнение');
                vm.exerciseEdit();

            } else {
                $log.debug('Добавляем новое упражнение');
                vm.exerciseAdd();
            }

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


        ngfitfire.getUserExercises( function ( _data ) {
            vm.userExercises = _data;
        } ); // ~~~ getUserExercises ~~~

        vm.editUserExercise = function ( _exercise ) {
            $scope.exercise = _exercise;
            $scope.modalCaption = 'Редактировать упражнение';
            vm.isEdit = true;
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
                                },
                                isEdit: function () {
                                    return vm.isEdit;
                                }
                            }
                        }
            ); // ~~~ $modal.open ~~~
        }; // ~~~ editUserExercise ~~~

        vm.openModalForAddExercise = function ( e ) {
            e.preventDefault();
            $scope.exercise = null;
            $scope.modalCaption = 'Добавить упражнение';
            vm.isEdit = false;
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
                                },
                                isEdit: function () {
                                    return vm.isEdit;
                                }
                            }
                        }
            ); // ~~~ $modal.open ~~~
        }; // ~~~ openModalForAddExercise ~~~

        vm.exerciseDelete = function ( _exercise ) {
            ngfitfire.exerciseDelete( _exercise );
        }; // ~~~ vm.exerciseDelete ~~~


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
            vm.isEdit = true;
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
                                },
                                isEdit: function () {
                                    return vm.isEdit;
                                }
                            }
                        }
            ); // ~~~ $modal.open ~~~
        }; // ~~~ editUserExercise ~~~

        vm.openModalForAddExercise = function (e) {
            e.preventDefault();
            $scope.exercise = null;
            $scope.modalCaption = 'Добавить упражнение';
            vm.isEdit = false;
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
                                },
                                isEdit: function () {
                                    return vm.isEdit;
                                }
                            }
                        }
            ); // ~~~ $modal.open ~~~
        }; // ~~~ openModalForAddExercise ~~~

        vm.exerciseDelete = function ( _exercise ) {
            ngfitfire.exerciseDelete( _exercise );
        }; // ~~~ vm.exerciseDelete ~~~

    } // ~~~ exercisesStringsCtrl ~~~

})();
