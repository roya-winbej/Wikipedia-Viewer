'use strict';

/**
 * @ngdoc function
 * @name wikiSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wikiSearchApp
 */
angular.module('wikiSearchApp')
  .controller('MainCtrl', function ($scope, wikiData) {

    $scope.query = '';
    $scope.recentStatus = false;


    $scope.recent = function () {
      if (!_.isEmpty($scope.pages)) {
        $scope.recentStatus = true;
      }
    };

    $scope.search = function () {

      wikiData.getData($scope.query, function (res) {

        $scope.recentStatus = false;

        if ($scope.query === '') {
          $scope.pages = {};
          $scope.error = false;
          return false;
        }

        if (res.data.query === undefined) {
          $scope.error = true;
          return false;
        }

        _.forEach(res.data.query.pages, function (article) {
          if (article.thumbnail === undefined) {
            article.thumbnail = 'images/wiki.png';
          }
        });


        $scope.error = false;
        $scope.pages = res.data.query.pages;


      });

    };


  });
