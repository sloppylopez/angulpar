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
  function CreateUserController($scope, $rootScope, firebaseServiceFactory, toastr) {
    $scope.createUser = function (isValid) {
      if (isValid) {
        firebaseServiceFactory.createUser($scope, $rootScope);
      } else {
        toastr.warning('There are still invalid fields');
      }
    };
  }
})();
