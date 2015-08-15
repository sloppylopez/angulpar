'use strict';
describe('Controller: RssFeederController', function () {
  var controller, scope, rssFeederServiceFactory, $q/*, ngToast*/, def;

  beforeEach(module('angulpar'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _rssFeederServiceFactory_, _$q_/*, _ngToast_*/) {
    $q = _$q_;
    def = $q.defer();
    scope = _$rootScope_.$new();
    controller = _$controller_('RssFeederController', {
      $scope: scope
    });
    rssFeederServiceFactory = _rssFeederServiceFactory_;
    //ngToast = _ngToast_;
  }));

  describe('rssFeeder Controller', function () {
    it('submit should call rssFeeder with a "ANY query" and not fail', function () {
      spyOn(rssFeederServiceFactory, 'rssFeeder').and.returnValue(def.promise);
      scope.rssFeeder('*');
      expect(rssFeederServiceFactory.rssFeeder).toHaveBeenCalled();
      def.resolve();   // This makes sure that all callbacks of promises will be called
      scope.$digest(); // This makes sure that all callbacks of promises will be called
    });
    it('submit should call rssFeeder with a "random string query" and not fail', function () {
      spyOn(rssFeederServiceFactory, 'rssFeeder').and.callThrough(def.promise);
      scope.rssFeeder('random imaginary string');
      expect(rssFeederServiceFactory.rssFeeder).toHaveBeenCalled();
    });
  });
});
