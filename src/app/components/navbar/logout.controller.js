//'use strict';

/**
 * @ngdoc function
 * @name angulpar.controller:LogoutController
 * @description
 * # LogoutController
 * Controller of the angulpar
 */
//angular.module('angulpar')
//  .controller('LogoutCtrl',
//    function ($scope, $rootScope, $window, firebaseServiceFactory) {
//      $scope.logout = function () {
//        if (typeof $window.authData !== 'undefined') {//TODO this will change when we put REAL security behind the nodejs
//          firebaseServiceFactory.logout($scope, $rootScope, '/');
//        }
//      };
//    }
//);


(function () {
  'use strict';

  angular
    .module('angulpar')
    .controller('LogoutController', LogoutController);

  /** @ngInject */
  function LogoutController($scope, $rootScope, $window, firebaseServiceFactory) {
    $scope.logout = function () {
      if (typeof $window.authData !== 'undefined') {//TODO this will change when we put REAL security behind the nodejs
        firebaseServiceFactory.logout($scope, $rootScope, '/');
      }
    };
  }
})();

