'use strict';

describe('firebaseServiceFactory Spec', function () {

  var $scope, $rootScope, firebaseServiceFactory, $q, def/*, ngToast*/, authData, error, email;

  beforeEach(module('angulpar'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _firebaseServiceFactory_, _$q_/*, _ngToast_*/) {
    $q = _$q_;
    def = $q.defer();
    //ngToast = _ngToast_;
    $scope = _$rootScope_.$new();
    email = {email: 'dummy@email.com'};
    error = {error: 'dummy imaginary error'};
    authData = {password: email};
    $scope.user = email;
    $rootScope = _$rootScope_;
    //$rootScope.ngToast = ngToast;
    $rootScope.fbRef = jasmine.createSpyObj('fbRef', ['resetPassword', 'authWithPassword', 'createUser', 'unauth']);
    firebaseServiceFactory = _firebaseServiceFactory_;
  }));

  describe('#resetPassword', function () {
    it('should call mocked firebaseServiceFactory resetPassword', function () {
      spyOn(firebaseServiceFactory, 'resetPassword').and.callThrough();
      spyOn(firebaseServiceFactory, '_resetPasswordCallback').and.callThrough();
      firebaseServiceFactory.resetPassword($scope, $rootScope);
      firebaseServiceFactory._resetPasswordCallback(def, $rootScope)();
      expect(firebaseServiceFactory.resetPassword).toHaveBeenCalled();
      expect(firebaseServiceFactory._resetPasswordCallback).toHaveBeenCalled();
    });

    it('should call mocked firebaseServiceFactory resetPassword and fail', function () {
      spyOn(firebaseServiceFactory, 'resetPassword').and.callThrough();
      spyOn(firebaseServiceFactory, '_resetPasswordCallback').and.callThrough();
      firebaseServiceFactory.resetPassword($scope, $rootScope);
      firebaseServiceFactory._resetPasswordCallback(def, $rootScope)(error);
      expect(firebaseServiceFactory.resetPassword).toHaveBeenCalled();
      expect(firebaseServiceFactory._resetPasswordCallback).toHaveBeenCalled();
    });
  });

  describe('#authWithPassword', function () {
    it('should call mocked firebaseServiceFactory authWithPassword', function () {
      spyOn(firebaseServiceFactory, 'authWithPassword').and.callThrough();
      spyOn(firebaseServiceFactory, '_authWithPasswordCallBack').and.callThrough();
      firebaseServiceFactory.authWithPassword($scope, $rootScope);
      firebaseServiceFactory._authWithPasswordCallBack($rootScope, $scope, def)(undefined, authData);
      expect(firebaseServiceFactory.authWithPassword).toHaveBeenCalled();
      expect(firebaseServiceFactory._authWithPasswordCallBack).toHaveBeenCalled();
    });

    it('should call mocked firebaseServiceFactory authWithPassword and fail', function () {
      spyOn(firebaseServiceFactory, 'authWithPassword').and.callThrough();
      spyOn(firebaseServiceFactory, '_authWithPasswordCallBack').and.callThrough();
      firebaseServiceFactory.authWithPassword($scope, $rootScope);
      firebaseServiceFactory._authWithPasswordCallBack($rootScope, $scope, def)(error);
      expect(firebaseServiceFactory.authWithPassword).toHaveBeenCalled();
      expect(firebaseServiceFactory._authWithPasswordCallBack).toHaveBeenCalled();
    });
  });

  describe('#createUser', function () {
    it('should call mocked firebaseServiceFactory createUser', function () {
      spyOn(firebaseServiceFactory, 'createUser').and.callThrough();
      spyOn(firebaseServiceFactory, '_createUserCallBack').and.callThrough();
      firebaseServiceFactory.createUser($scope, $rootScope);
      firebaseServiceFactory._createUserCallBack(firebaseServiceFactory, $rootScope, $scope, def)(undefined, authData);
      expect(firebaseServiceFactory.createUser).toHaveBeenCalled();
      expect(firebaseServiceFactory._createUserCallBack).toHaveBeenCalled();
    });

    it('should call mocked firebaseServiceFactory createUser and fail', function () {
      spyOn(firebaseServiceFactory, 'createUser').and.callThrough();
      spyOn(firebaseServiceFactory, '_createUserCallBack').and.callThrough();
      firebaseServiceFactory.createUser($scope, $rootScope);
      firebaseServiceFactory._createUserCallBack(firebaseServiceFactory, $rootScope, $scope, def)(error);
      expect(firebaseServiceFactory.createUser).toHaveBeenCalled();
      expect(firebaseServiceFactory._createUserCallBack).toHaveBeenCalled();
    });
  });

  describe('#logout', function () {
    it('should call mocked firebaseServiceFactory logout and fail', function () {
      spyOn(firebaseServiceFactory, 'logout').and.callThrough();
      firebaseServiceFactory.logout($scope, $rootScope, '/');
      expect(firebaseServiceFactory.logout).toHaveBeenCalled();
    });
  });
});
