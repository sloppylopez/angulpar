'use strict';
describe('Controller: LogoutCtrl', function () {
  var controller, scope, $location, firebaseServiceFactory, $q, $window, def;

  beforeEach(module('angulpar'));

  //beforeEach(module(function ($provide) {
  //  $provide.value('user', user);
  //  $provide.value('isValid', true);
  //}));
  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _firebaseServiceFactory_, _$q_, _$window_) {
    $q = _$q_;
    def = $q.defer();
    scope = _$rootScope_.$new();
    controller = _$controller_('LogoutController', {
      $scope: scope
    });
    $location = _$location_;
    firebaseServiceFactory = _firebaseServiceFactory_;
    $window = _$window_;
  }));

  describe('logout Controller', function () {
    it('submit should call logout and firebaseServiceFactory.logout with email and password', function () {
      $window.authData = 'Dummy Token Imaginary Data';
      spyOn(firebaseServiceFactory, 'logout').and.returnValue(def.promise);
      scope.logout();
      expect(firebaseServiceFactory.logout).toHaveBeenCalled();
      def.resolve();   // This makes sure that all callbacks of promises will be called
      scope.$digest(); // This makes sure that all callbacks of promises will be called
    });
    it('submit should not call logout when called with invalid parameters', function () {
      spyOn(firebaseServiceFactory, 'logout').and.returnValue(def.promise);
      $window.authData = undefined;
      scope.logout();
      expect(firebaseServiceFactory.logout).not.toHaveBeenCalled();
      def.reject();    // This makes sure that all callbacks of promises will be called
      scope.$digest(); // This makes sure that all callbacks of promises will be called
    });
  });
});
