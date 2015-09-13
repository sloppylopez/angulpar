/* global malarkey:false, toastr:false, moment:false */
(function () {
  'use strict';

  angular
    .module('angulpar')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('FB_USER', 'sloppy')//firebase_user
    .constant('ES_IP', '172.17.42.1')//elastic search ip
    .constant('ES_PORT', '9200')//elastic search port.
    .constant('TRAVIS_GTMETRIX_CHECK', false)//travis executing gtmetrix check, if remains the same it will deploy code in prod, not used yet
    .constant('esQuery', {
      index: '_all',
      type: 'rss',
      size: 200,
      body: {
        sort: [{
          'pubdate': {'order': 'desc'}
        }]
      }
    });

})();
