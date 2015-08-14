//'use strict';

/**
 * @ngdoc function
 * @name angulpar.controller:RssFeederController
 * @description
 * # RssFeederController
 * Controller of the angulpar
 */
//angular.module('angulpar')
//  .controller('RssFeederCtrl',
//    function ($scope, rssFeederServiceFactory) {
//      $scope.rssFeeder = function (queryTerm) {
//        rssFeederServiceFactory.rssFeeder(queryTerm)
//          .then(function (data) {
//            $scope.news = data || {};
//          });
//      };
//      //we call the first time to get all results from elastic search
//      $scope.rssFeeder();
//    });

(function () {
  'use strict';

  angular
    .module('angulpar')
    .controller('RssFeederController', RssFeederController);

  /** @ngInject */
  function RssFeederController($scope, rssFeederServiceFactory) {
    $scope.rssFeeder = function (queryTerm) {
      rssFeederServiceFactory.rssFeeder(queryTerm)
        .then(function (data) {
          $scope.news = data || {};
        });
    };
    //we call the first time to get all results from elastic search
    $scope.rssFeeder();
  }
})();
