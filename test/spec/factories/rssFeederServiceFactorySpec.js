'use strict';

describe('rssFeederServiceFactory Spec', function () {

  var rssFeederServiceFactory/*, ngToast*/, $q;

  beforeEach(module('angulpar'));

  beforeEach(inject(function (_rssFeederServiceFactory_/*, _ngToast_*/, _$q_) {
    rssFeederServiceFactory = _rssFeederServiceFactory_;
    //ngToast = _ngToast_;
    $q = _$q_;
  }));

  it('should call mocked rssFeederServiceFactory.rssFeeder with wildcard as queryTerm', function () {
    var def = $q.defer(), resp = {hits: {hits: 'dummy imaginary hit'}}, error = {message: 'dummy imaginary error message'};
    spyOn(rssFeederServiceFactory, 'rssFeeder').and.callThrough();
    spyOn(rssFeederServiceFactory, '_successCallBack').and.callThrough();
    spyOn(rssFeederServiceFactory, '_errorCallBack').and.callThrough();
    rssFeederServiceFactory.rssFeeder('*');
    rssFeederServiceFactory._successCallBack(def)(resp);
    rssFeederServiceFactory._errorCallBack(def)(error);
    expect(rssFeederServiceFactory.rssFeeder).toHaveBeenCalled();
    expect(rssFeederServiceFactory._successCallBack).toHaveBeenCalled();
    expect(rssFeederServiceFactory._errorCallBack).toHaveBeenCalled();
  });
});
