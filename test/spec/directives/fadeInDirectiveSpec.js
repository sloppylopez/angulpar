describe('fadeInDirectiveSpec', function () {
  'use strict';
  var element, scope;
  beforeEach(module('angulpar'));
  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile('<div fade-in></div>')(scope);
  }));

  it('should call the directive with no errors', function () {
    scope.$digest();
  });
});
