/**
 * @ngdoc function
 * @name angulpar.controller:BlogController
 * @description
 * # BlogController
 * Controller of the angulpar
 */

(function () {
  'use strict';

  angular
    .module('angulpar')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($scope, $rootScope, toastr) {

    $scope.message = 'Click & Live, Bang!';
    if (typeof $rootScope.showCookieMessage === 'undefined') {
      toastr.info('Using cookies, close to accept');
      $rootScope.showCookieMessage = false;
    }
  }
})();
