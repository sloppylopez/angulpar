/**
 * @ngdoc function
 * @name angulpar.controller:AuthWithPasswordController
 * @description
 * # AuthWithPasswordController
 * Controller of the angulpar
 */

(function () {
  'use strict';

  angular
    .module('angulpar')
    .controller('AuthWithPasswordController', AuthWithPasswordController);

  /** @ngInject */
  function AuthWithPasswordController($scope, $rootScope, firebaseServiceFactory, redirectService, toastr) {
    //var vm = this;
    $scope.authWithPassword = function (isValid) {
      if (isValid) {
        $scope.showme = true;
        firebaseServiceFactory.authWithPassword($scope, $rootScope)
          .then(function () {
            redirectService.redirectTo('/');
          });
      } else {
        toastr.warning('There are still invalid fields');
      }
    };
  }
})();

