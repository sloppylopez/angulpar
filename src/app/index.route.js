(function () {
  'use strict';

  angular
    .module('angulpar')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        loginRequired: false
      })
      .when('/rssfeeder', {
        templateUrl: 'app/components/views/rssFeeder/rssFeeder.html',
        controller: 'RssFeederController',
        loginRequired: true
      })
      .when('/authwithpassword', {
        templateUrl: 'app/components/views/authWithPassword/authWithPassword.html',
        controller: 'AuthWithPasswordController',
        loginRequired: false
      })
      .when('/createuser', {
        templateUrl: 'app/components/views/createUser/createUser.html',
        controller: 'CreateUserController',
        loginRequired: false
      })
      .when('/resetpassword', {
        templateUrl: 'app/components/views/resetPassword/resetPassword.html',
        controller: 'ResetPasswordController',
        loginRequired: false
      })
      .when('/views', {
        templateUrl: 'app/components/views/addPost/addPost.html',
        controller: 'AddPostController',
        loginRequired: true
      })
      .when('/logout', {
        controller: 'LogoutController',
        templateUrl: 'app/components/views/authWithPassword/authWithPassword.html',
        loginRequired: true,
        resetCredentials: true
      })
      .otherwise({redirectTo: '/'});
  }

})();
