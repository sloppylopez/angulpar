'use strict';
describe('Controller: CreateUserCtrl', function () {
  var controller, scope, firebaseServiceFactory, $q, def;

  beforeEach(module('angulpar'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _firebaseServiceFactory_, _$q_) {
    $q = _$q_;
    def = $q.defer();
    scope = _$rootScope_.$new();
    controller = _$controller_('CreateUserController', {
      $scope: scope
    });
    firebaseServiceFactory = _firebaseServiceFactory_;
  }));

  describe('createUser Controller', function () {
    it('submit should call createUser and not fail', function () {
      spyOn(firebaseServiceFactory, 'createUser').and.returnValue(def.promise);
      scope.createUser(true);
      expect(firebaseServiceFactory.createUser).toHaveBeenCalled();
    });
    it('submit should not call firebaseServiceFactory.createUser as the form did not pass validation', function () {
      spyOn(scope, 'createUser').and.callThrough();
      scope.createUser();
      expect(scope.createUser).toHaveBeenCalled();
    });
  });
});
