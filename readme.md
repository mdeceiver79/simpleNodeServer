## Simple Server

## Synopsis

This is a very basic web server which separates the minimised/post processed app.js, styles.css using gulp.
The clientside of the website is developed in the /src folder and are transferred to the /webserver/dist folder from where they are served.
There is also a very basic example of an express API.

## Motivation

This was made as a convenient, easy to use framework to base a website upon. You can either use the provided gulp task to consolidate scripts in /src/scripts into app.js or you can work, more traditionally, by putting all of your scripts/files into the /src/static. You could even build your website in the /webserver/dist directory - if you do this DO NOT run gulp build! You will need to edit the gitignore file if you wish to version control the /webserver/dist directory.

## Installation

You will need to have gulp and bower installed for this to work.
```
 npm install gulp -g
 npm install bower .g
```

Next you will need to install the node modules and bower components (serverside and clientside packages, modules and libraries)
```
 npm install
 bower install
```

You are now ready to run the website but first we need to build the website.
We use
```
 gulp build
```
to transfer the clientside app (website) from the /src to the /webserver/dist.
Now we start the server from the webserver directory
```
 cd webserver
 node server.js
```

Now go to localhost:8080 (might be configured to use a different port)

## What's next?

Next you will want to edit the /src directory. Add a new file called myFirstScript.js to the /src/scripts directory. Open myFirstScript.js and add
```
 console.log("it's alive!");
```
Now run
```
 gulp build
```
to rebuild the website and restart the server.
(use ctrl+c to stop the website server script) then use
```
 node server.js
```
Now if you open the browser console (f12 in chrome/chromium) and refresh your localhost:8080 webpage you will see a familiar message in the console.

Further steps include adding more pages (to the /src/static directory) or editing the api.

## But What's After That????

You will probably want some kind of authentication for your website (such as passport)
Consider using a clientside javascript framework (such as angularjs)
Consider using something like less or sass for easier stylesheet editing

## API Reference

There are 2 end points provided with this example server.
/api/example/list -
	This will return an arbitrary array to demonstrate a basic api

/api/example/item/:item_id-
	This will return a single object to demonstrate the usage of express request parameters.

## Tests

No tests currently

## What about the future? (TODO)

I'd like to make tests.
I'd like to provide webpack as an alternative to gulp
I'd like to make a demonstration angular app.

## License

MIT