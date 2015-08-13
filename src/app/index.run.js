(function () {
  'use strict';

  angular
    .module('angulpar')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
