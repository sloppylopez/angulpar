(function () {
  'use strict';

  angular
    .module('angulpar')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $location, firebaseFactory, FB_USER, toastr) {
    $rootScope.fbRef = firebaseFactory.getFireBaseRef(FB_USER);//TODO ensure it's not calling the real firebase while testing
    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.loginRequired && typeof $rootScope.authData === 'undefined') {
        event.defaultPrevented = true;
        toastr.warning('You need to be logged for that');
        $location.path('/authwithpassword');
      }
      if (next.resetCredentials) {
        $rootScope.authData = undefined;
        toastr.warning('Good Bye!');
      }
    });

    $log.debug('runBlock end');
  }

})();
