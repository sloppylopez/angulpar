/**
 * @ngdoc function
 * @name angulpar.controller:CreateUserController
 * @description
 * # CreateUserController
 * Controller of the angulpar
 */

(function () {
  'use strict';

  angular
    .module('angulpar')
    .controller('CreateUserController', CreateUserController);

  /** @ngInject */
  function CreateUserController($scope, $rootScope, firebaseServiceFactory, toastr, redirectService) {
    $scope.createUser = function (isValid) {
      if (isValid) {
        $scope.showme = true;
        firebaseServiceFactory.createUser($scope, $rootScope)
          .then(function () {
            redirectService.redirectTo('/');
          });
      } else {
        toastr.warning('There are still invalid fields');
      }
    };
  }
})();
