'use strict';

angular.module('CloudMenu')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
