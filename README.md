#Roses Automotive Website#
- [link to live website](http://mikemeding.github.io/RosesAutomotive/src/server/app/index.html#/home)
- The above link is for seeing the gh-pages hosted link with no back end.

##What you need to know##
###Client Side###
- Client side was written using AngularJS and Bootstrap
- Angular sets up a multi page app using ui-router
- All client side files are stored in /src/server/app/[page 1,2,3...]
- Each folder in this directory contains everything for that page
- Client is 90% finished

###Server Side###
- Server was written using the MEAN stack (MongoDB, ExpressJS, AngularJS, NodeJS)
- Node server only sets up one endpoint for storing vehicle information but was not finished
- MongoDB connector was set up and some tests were run but also not finished.
- Server is 50% finished

###Run Server###
- Requires nodejs and npm to be installed
```
$ cd src/server/
$ node server.js
```
- Then just navigate to localhost:3000 in the browser
