'use strict';

describe('redirectService Spec', function () {

  var redirectService, $q, def;

  beforeEach(module('angulpar'));

  beforeEach(inject(function (_redirectService_, _$q_) {
    $q = _$q_;
    def = $q.defer();
    redirectService = _redirectService_;
  }));

  it('should get the redirectService and redirecTo without failures', function () {
    spyOn(redirectService, 'redirectTo').and.returnValue(def.promise);
    redirectService.redirectTo();
    expect(redirectService.redirectTo).toHaveBeenCalled();
  });

});
