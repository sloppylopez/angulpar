//'use strict';

/**
 * @ngdoc function
 * @name angulpar.controller:AuthWithPasswordController
 * @description
 * # AuthWithPasswordController
 * Controller of the angulpar
 */
//angular.module('angulpar')
//  .controller('AuthWithPasswordCtrl',
//    function ($scope, $rootScope, firebaseServiceFactory, redirectService) {
//      $scope.authWithPassword = function (isValid) {
//        if (isValid) {
//          $scope.showme = true;
//          firebaseServiceFactory.authWithPassword($scope, $rootScope)
//            .then(function () {
//              redirectService.redirectTo('/');
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

