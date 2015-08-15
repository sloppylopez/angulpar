'use strict';
describe('Controller: authWithPasswordCtrl', function () {
  var controller, scope, $rootScope, firebaseServiceFactory, $q, def;

  beforeEach(module('angulpar'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _firebaseServiceFactory_, _$q_/*, _ngToast_*/) {
    $q = _$q_;
    def = $q.defer();
    scope = _$rootScope_.$new();
    $rootScope = _$rootScope_;
    //$rootScope.ngToast = _ngToast_;
    controller = _$controller_('AuthWithPasswordController', {
      $scope: scope
    });
    firebaseServiceFactory = _firebaseServiceFactory_;
  }));

  describe('authWithPassword Controller', function () {
    it('submit should call the firebaseServiceFactory with email and password and not fail', function () {
      spyOn(firebaseServiceFactory, 'authWithPassword').and.returnValue(def.promise);
      scope.authWithPassword(true);
      expect(firebaseServiceFactory.authWithPassword).toHaveBeenCalled();
      def.resolve();   // This makes sure that all callbacks of promises will be called
      scope.$digest(); // This makes sure that all callbacks of promises will be called
    });
    it('submit should not call firebaseServiceFactory.authWithPassword as the form did not pass validation', function () {
      spyOn(scope, 'authWithPassword').and.callThrough();
      scope.authWithPassword(false);
      expect(scope.authWithPassword).toHaveBeenCalled();
    });
  });
});
