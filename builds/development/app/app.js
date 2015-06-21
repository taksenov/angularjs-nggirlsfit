'use strict';
// initialize material design js
$.material.init();

angular.module("ngGirlsFit", ["chart.js", "ui.bootstrap"])
  // Optional configuration
  .config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#199F93', '#FF8A80'],
      responsive: true //адаптивный или нет график
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: true //закрашивать или нет область под лингией графика
    });
  }])
//    .controller('TabsDemoCtrl', ['$scope', '$window', function ($scope, $window) {
//  $scope.tabs = [
//    { title:'Dynamic Title 1', content:'Dynamic content 1' },
//    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
//  ];
//
//  $scope.alertMe = function() {
//    setTimeout(function() {
//      $window.alert('You\'ve selected the alert tab!');
//    });
//  };
//}])
  .controller("LineCtrl", ['$scope', '$timeout', function ($scope, $timeout) {

  $scope.labels = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  $scope.series = ['Бег', 'Бег с ускорением'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  // Simulate async data update
  $timeout(function () {
    $scope.data = [
      [28, 48, 40, 19, 86, 27, 90],
      [65, 59, 80, 81, 56, 55, 40]
    ];
  }, 3000);
}])

    .controller("BarCtrl", ['$scope', function ($scope) {
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
}]);

