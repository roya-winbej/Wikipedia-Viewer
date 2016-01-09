'use strict';

/**
 * @ngdoc service
 * @name wikiSearchApp.wikiData
 * @description
 * # wikiData
 * Service in the wikiSearchApp.
 */
angular.module('wikiSearchApp')
  .service('wikiData', function ($http, API) {
    this.getData = function (query, cb) {
      $http.jsonp(API.url + query + API.cb).then(cb);
    };
  });
