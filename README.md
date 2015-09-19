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
  

