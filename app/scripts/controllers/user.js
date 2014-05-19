'use strict';

angular.module('CloudMenu')
  .controller('UserCtrl', function ($scope, $http, User, Auth) {
    $scope.errors = {};
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
