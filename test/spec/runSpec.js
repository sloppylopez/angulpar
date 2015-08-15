'use strict';

describe('Run Spec', function () {

  var $rootScope, next;

  beforeEach(module('angulpar'));

  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_;
    next = {};
  }));

  it('should get the redirectService and redirect without failures', function () {
    next.resetCredentials = false;
    next.loginRequired = true;
    $rootScope.$emit('$routeChangeStart', next);
  });

  it('should get the redirectService and redirect without failures and reset credentials', function () {
    next.resetCredentials = true;
    next.loginRequired = true;
    $rootScope.$emit('$routeChangeStart', next);
  });

  it('should get the redirectService and redirect without failures test the IF statement branch', function () {
    next.resetCredentials = true;
    next.loginRequired = false;
    $rootScope.authData = {password: {email: 'dummy@email.com'}};
    $rootScope.$emit('$routeChangeStart', next);
  });

});
