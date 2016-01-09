'use strict';

/**
 * @ngdoc overview
 * @name wikiSearchApp
 * @description
 * # wikiSearchApp
 *
 * Main module of the application.
 */
angular
  .module('wikiSearchApp', [])
    .constant('API',
      {'url': 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=',
       'page': 'https://en.wikipedia.org/?curid=',
       'cb': '&callback=JSON_CALLBACK'});
