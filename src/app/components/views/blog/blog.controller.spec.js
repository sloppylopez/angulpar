describe('Controller: BlogController', function () {
  'use strict';
  // load the controller's module
  beforeEach(module('angulpar'));

  var scope, $rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_) {
    scope = _$rootScope_.$new();
    $rootScope = _$rootScope_;
    _$controller_('BlogController', {
      $scope: scope
    });
    $rootScope.showCookieMessage = 'dummy imaginary data';
  }));

  it('should call blog controller and it should have a message in the scope', function () {
    expect(scope.message).toBe('Click & Live, Bang!');
  });
});
