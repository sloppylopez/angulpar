(function () {
  'use strict';

  angular.module('angulpar')
    .factory('firebaseFactory', function () {
      return {
        getFireBaseRef: function (fireBaseUser) {
          return new Firebase('//' + fireBaseUser + '.firebaseio.com');
        }
      };
    }
  );

})();
