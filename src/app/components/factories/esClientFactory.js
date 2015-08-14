(function () {
  'use strict';

  angular.module('angulpar')
    .factory('esClientFactory', function (esFactory) {
      return {
        getElasticSearchRef: function (ip, port) {
          return esFactory({
            host: '//' + ip + ':' + port,//http://dockerIp:elasticSearchPort to access elastic search 172.17.42.1:9200
            log: 'error' //trace
          });
        }
      };
    }
  );

})();
