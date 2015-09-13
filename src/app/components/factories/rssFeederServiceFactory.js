(function () {
  'use strict';

  angular.module('angulpar')
    .service('rssFeederServiceFactory',
    function (esClientFactory, $q, ES_IP, ES_PORT, esQuery, toastr) {
      return {
        _query: function (queryTerm) {
          return (esQuery.body.query = queryTerm === '*' ? {match_all: {}} : {match: {title: queryTerm}});
        },
        _successCallBack: function (deferred) {
          return function (resp) {
            deferred.resolve(resp.hits.hits);
          };
        },
        _errorCallBack: function (deferred) {
          return function (err) {
            toastr.error(err.message);
            deferred.reject(null);
          };
        },
        rssFeeder: function (queryTerm) {
          var deferred = $q.defer(), model = this;
          esClientFactory
            .getElasticSearchRef(ES_IP, ES_PORT)
            .search(model._query(queryTerm || '*')).then(
            model._successCallBack(deferred),
            model._errorCallBack(deferred)
          );
          return deferred.promise;
        }
      };
    }
  );

})();



