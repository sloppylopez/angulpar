//'use strict';

/**
 * @ngdoc function
 * @name angulpar.controller:CreateUserController
 * @description
 * # CreateUserController
 * Controller of the angulpar
 */
//angular.module('angulpar')
//  .controller('CreateUserCtrl',
//    function ($scope, $rootScope, firebaseServiceFactory) {
//      $scope.createUser = function (isValid) {
//        if (isValid) {
//          firebaseServiceFactory.createUser($scope, $rootScope);
//        } else {
//            $rootScope.ngToast.create({
//                className: 'danger',
//                content: 'There are still invalid fields'
//            });
//        }
//      };
//    });

(function () {
  'use strict';

  angular
    .module('angulpar')
    .controller('CreateUserController', CreateUserController);

  /** @ngInject */
  function CreateUserController($scope, $rootScope, firebaseServiceFactory) {
    $scope.createUser = function (isValid) {
      if (isValid) {
        firebaseServiceFactory.createUser($scope, $rootScope);
      } else {
        //$rootScope.ngToast.create({
        //  className: 'danger',
        //  content: 'There are still invalid fields'
        //});
      }
    };
  }
})();
