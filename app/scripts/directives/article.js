'use strict';

/**
 * @ngdoc directive
 * @name wikiSearchApp.directive:article
 * @description
 * # article
 */
angular.module('wikiSearchApp')
  .directive('article', function () {
    return {
      templateUrl: '/views/article.html',
      restrict: 'E'
    };
  });
