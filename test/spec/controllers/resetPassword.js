'use strict';
describe('Controller: ResetPasswordController', function () {
  var controller, scope, $location, firebaseServiceFactory, $q/*, ngToast*/, def;

  beforeEach(module('angulpar'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _firebaseServiceFactory_, _$q_/*, _ngToast_*/) {
    $q = _$q_;
    def = $q.defer();
    scope = _$rootScope_.$new();
    controller = _$controller_('ResetPasswordController', {
      $scope: scope
    });
    $location = _$location_;
    firebaseServiceFactory = _firebaseServiceFactory_;
    //ngToast = _ngToast_;
  }));

  describe('resetPassword Controller', function () {
    it('submit should call resetPassword and not fail', function () {
      spyOn(firebaseServiceFactory, 'resetPassword').and.returnValue(def.promise);
      scope.resetPassword(true);
      expect(firebaseServiceFactory.resetPassword).toHaveBeenCalled();
      def.resolve();
      scope.$digest();// This makes sure that all callbacks of promises will be called
    });
    //it('submit should fail when called with invalid parameters', function () {
    //  //spyOn(ngToast, 'create').and.returnValue(def.promise);
    //  scope.resetPassword(false);
    //  //expect(ngToast.create).toHaveBeenCalled();
    //});
  });
});
