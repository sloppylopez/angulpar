//'use strict';

/**
 * @ngdoc function
 * @name angulpar.controller:AddPostController
 * @description
 * # AddPostController
 * Controller of the angulpar
 */
//angular.module('angulpar')
//  .controller('AddPostCtrl', function ($scope) {
//    $scope.addpost = [
//      'Add post'
//    ];
//  });

(function () {
  'use strict';

  angular
    .module('angulpar')
    .controller('AddPostController', AddPostController);

  /** @ngInject */
  function AddPostController($scope) {

    $scope.addpost = [
      'Add post'
    ];
  }
})();
