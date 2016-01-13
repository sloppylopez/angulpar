[![Code Climate](https://codeclimate.com/github/sloppylopez/angulpar/badges/gpa.svg)](https://codeclimate.com/github/sloppylopez/angulpar)
[![Travis](https://travis-ci.org/sloppylopez/angulpar.svg)](https://travis-ci.org/sloppylopez/angulpar)
[![Test Coverage](https://codeclimate.com/github/sloppylopez/angulpar/badges/coverage.svg)](https://codeclimate.com/github/sloppylopez/angulpar/coverage)
[![built with gulp](https://raw.github.com/cyparu/artwork/master/builtwith.png)](http://gulpjs.com)
[![oficial site](https://img.shields.io/badge/sloppy-lopez-pink.svg)](http://sloppylopez.com)


# angulpar
Migrating from angularclient from Grunt to Gulp, benefits:

  1)Less code, better organized using 'components' folder and same functionality as original project
  
  2)Gulp builds faster, has the same capabilities than Grunt but with more freedom
  
  3)Angular Bower dependencies get injected automatically on index.html thanks to 'inject' plugin
  
  4)Bower dependencies get injected automatically in Karma browser in testing time (this is disconnected atm
  because I was facing issues with elasticsearch dependencies, but will switch it on soon)
  
  5)Protractor testing working out-of-the-box and connected with Travis build
  
  6)Cleaned lots of not useful dependencies
  
  7)All js files wrapped with functions to avoid global variables and global use of 'use strict'
  
# info sources
https://www.npmjs.com/package/firebase-tools
http://docs.travis-ci.com/user/encryption-keys/
  



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/sloppylopez/angulpar/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

