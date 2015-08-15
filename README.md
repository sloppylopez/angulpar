# angulpar
Migrating from angularclient from Grunt to Gulp, benefits:#
  1)Less code, better organized using 'components' folder and same functionality as original project
  
  2)Gulp builds faster, has the same capabilities than Grunt but with more freedom
  
  3)Angular Bower dependencies get injected automatically on index.html thanks to 'inject' plugin
  
  4)Bower dependencies get injected automatically in Karma browser in testing time (this is disconnected atm
  because I was facing issues with elasticsearch dependencies, but will switch it on soon)
  
  5)Protractor testing working out-of-the-box and connected with Travis build
  
  6)Cleaned lots of not useful dependencies
  
  7)All js files wrapped with functions to avoid global variables and global use of 'use strict'
  
# version
v.1.enthusiastic.0.0.concupiscency.1439499925.7

# versioning info
I am going to use drone-ver until I have something solid that can be considered a real 1.0.0
http://drone-ver.org/

Given a version number MAJOR.MOOD.ISSUES.SOCIAL.DICTIONARY.UNIXTIME.SEVEN, manage your releases as laid out in this comic :

MAJOR is incremented when you feel like you've added something cool.
MOOD is how you felt when you released this version.
ISSUES is the number of open GitHub issues against your project.
SOCIAL is the number of GitHub forks & favourites of your project.
DICTIONARY is a random dictionary word.
UNIXTIME is the unix time, and
SEVEN is always the number seven (7).

# info
