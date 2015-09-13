##Test framework description

  'describe', 'beforeEach', and 'it' are provided by Mocha for 
  organizing our tests.
  'module' and 'inject' are provided by ngMock. 
  module registers the ngMock module on our module named 'angulpar' 
  without us needing to explicitly include 'ngMock' in the second 
  argument to angular.module. 
  Next we call inject with a function that takes an argument 
  _firebaseServiceFactory_. 
  When using ngMock, Angular will automatically strip away 
  leading and trailing underscores from the function we pass for 
  the injector to invoke.
  'expect' comes from Jasmine for checking correct values are in place

http://stackoverflow.com/questions/23991003/mock-angular-service-promise-in-a-karma-jasmine-test
