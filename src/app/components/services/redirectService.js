(function () {
  'use strict';

  angular.module('angulpar')
    .service('redirectService', function ($location) {
      this.redirectTo = function (redirectTo) {
        $location.path(redirectTo);
      };
    });

})();

