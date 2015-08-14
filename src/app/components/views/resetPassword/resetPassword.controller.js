//'use strict';

/**
 * @ngdoc function
 * @name angulpar.controller:ResetPasswordController
 * @description
 * # ResetPasswordController
 * Controller of the angulpar
 */
//angular.module('angulpar')
//  .controller('ResetPasswordCtrl',
//    function ($scope, $rootScope, firebaseServiceFactory, redirectService) {
//      $scope.resetPassword = function (isValid) {
//        if (isValid) {
//          firebaseServiceFactory.resetPassword($scope, $rootScope)
//            .then(function () {
//              redirectService.redirectTo('/login');
//            });
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
    .controller('ResetPasswordController', ResetPasswordController);

  /** @ngInject */
  function ResetPasswordController($scope, $rootScope, firebaseServiceFactory, redirectService) {
    $scope.resetPassword = function (isValid) {
      if (isValid) {
        firebaseServiceFactory.resetPassword($scope, $rootScope)
          .then(function () {
            redirectService.redirectTo('/login');
          });
      } else {
        //$rootScope.ngToast.create({
        //  className: 'danger',
        //  content: 'There are still invalid fields'
        //});
      }
    };
  }
})();
