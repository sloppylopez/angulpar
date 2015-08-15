'use strict';

describe('firebaseFactory Spec', function () {

  var firebaseFactory, $q, def;

  beforeEach(module('angulpar'));

  beforeEach(inject(function (_$controller_, _$location_, _firebaseFactory_, _$q_) {
    $q = _$q_;
    def = $q.defer();
    firebaseFactory = _firebaseFactory_;
  }));

  it('should get the Firebase ref with dummy user', function () {
    spyOn(firebaseFactory, 'getFireBaseRef').and.returnValue(def.promise);
    firebaseFactory.getFireBaseRef('dummy user');
    expect(firebaseFactory.getFireBaseRef).toHaveBeenCalled();
  });

});
