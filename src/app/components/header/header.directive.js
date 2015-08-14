(function () {
  'use strict';

  angular
    .module('angulpar')
    .directive('acmeHeader', header);

  /** @ngInject */
  function header() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html'
    };

    return directive;
  }

})();
