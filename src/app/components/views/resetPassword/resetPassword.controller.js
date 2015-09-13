/**
 * @ngdoc function
 * @name angulpar.controller:ResetPasswordController
 * @description
 * # ResetPasswordController
 * Controller of the angulpar
 */

(function () {
  'use strict';

  angular
    .module('angulpar')
    .controller('ResetPasswordController', ResetPasswordController);

  /** @ngInject */
  function ResetPasswordController($scope, $rootScope, firebaseServiceFactory, redirectService, toastr) {
    $scope.resetPassword = function (isValid) {
      if (isValid) {
        firebaseServiceFactory.resetPassword($scope, $rootScope)
          .then(function () {
            redirectService.redirectTo('/login');
          });
      } else {
        toastr.warning('There are still invalid fields')
      }
    };
  }
})();
