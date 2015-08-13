(function () {
  'use strict';

  angular
    .module('angulpar')
    .directive('acmeFooter', footer);

  /** @ngInject */
  function footer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html'
    };

    return directive;
  }

})();
