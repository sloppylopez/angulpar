(function () {
  'use strict';

  angular.module('angulpar')
    .service('rssFeederServiceFactory',
    function (esClientFactory, $q, ES_IP, ES_PORT/*, ngToast*/) {
      return {
        _query: function (queryTerm) {
          if (queryTerm === '*') {//TODO refactor this crap...
            return {
              index: '_all',
              type: 'rss',
              size: 200,
              body: {
                sort: [{
                  'pubdate': {'order': 'desc'}
                }],
                query: {
                  match_all: {}
                }
              }
            };
          } else {
            return {
              index: '_all',
              type: 'rss',
              size: 200,
              body: {
                sort: [{
                  'pubdate': {'order': 'desc'}
                }],
                query: {
                  match: {
                    title: queryTerm
                  }
                }
              }
            };
          }
        },
        _successCallBack: function (deferred) {
          return function (resp) {
            deferred.resolve(resp.hits.hits);
          };
        },
        _errorCallBack: function (deferred/*, ngToast*/) {
          return function (err) {
            //ngToast.create({
            //  className: 'danger',
            //  content: err.message
            //});
            console.log(err);//TODO toastr the hell out of this
            deferred.reject(null);
          };
        },
        rssFeeder: function (queryTerm) {
          var deferred = $q.defer(), model = this;
          esClientFactory
            .getElasticSearchRef(ES_IP, ES_PORT)
            .search(model._query(queryTerm || '*')).then(
            model._successCallBack(deferred),
            model._errorCallBack(deferred/*, ngToast*/)
          );
          return deferred.promise;
        }
      };
    }
  );

})();



