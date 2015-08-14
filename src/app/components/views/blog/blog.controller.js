//'use strict';

/**
 * @ngdoc function
 * @name angulpar.controller:BlogController
 * @description
 * # BlogController
 * Controller of the angulpar
 */
//angular.module('angulpar')
//    .controller('BlogCtrl', function ($scope, $rootScope) {
//        $scope.message = 'Click & Live, Bang!';
//        if (typeof $rootScope.showCookieMessage === 'undefined') {
//            $rootScope.ngToast.create({
//                className: 'info',
//                content: 'Using cookies, close to accept',
//                dismissOnClick: false,
//                dismissButton: true,
//                dismissOnTimeout: false,
//                timeout: 1000000 //this is because the ngToast works buggy without it, i prefer to have it this way :(
//            });
//            $rootScope.showCookieMessage = false;
//        }
//    });

(function () {
  'use strict';

  angular
    .module('angulpar')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($scope, $rootScope) {

    $scope.message = 'Click & Live, Bang!';
    if (typeof $rootScope.showCookieMessage === 'undefined') {
      //$rootScope.ngToast.create({
      //  className: 'info',
      //  content: 'Using cookies, close to accept',
      //  dismissOnClick: false,
      //  dismissButton: true,
      //  dismissOnTimeout: false,
      //  timeout: 1000000 //this is because the ngToast works buggy without it, i prefer to have it this way :(
      //});
      $rootScope.showCookieMessage = false;
    }
  }
})();
