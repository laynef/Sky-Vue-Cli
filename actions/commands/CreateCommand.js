var ncp = require('ncp').ncp;
var path = require('path');
var jsonfile = require('jsonfile');


var CreateCommand = function(name) {
  var ProjectName = name;

  var newProject = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Please name your project");
      throw new Error('rens create Name');
    }

    console.log("Starting your project: " + name);

    var src = path.join(__dirname, '..', '..', 'project', 'temp');
    var dest = path.join(workDir, name);

    var file = './' + name + '/package.json';

    var obj = {
      "name": ProjectName,
      "version": "1.0.0",
      "description": "",
      "scripts": {
        "start": "nodemon ./server/server.js",
        "build:pro": "webpack -p",
        "postinstall": "webpack",
        "build": "webpack -w"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "babel-core": "^6.18.2",
        "babel-loader": "^6.2.8",
        "babel-plugin-transform-runtime": "^6.15.0",
        "babel-preset-es2015": "^6.18.0",
        "babel-preset-stage-2": "^6.0.0",
        "css-loader": "^0.26.0",
        "extract-text-webpack-plugin": "^1.0.1",
        "html-loader": "^0.4.4",
        "html-webpack-plugin": "^2.26.0",
        "mysql": "^2.12.0",
        "node-sass": "^3.13.0",
        "nodemon": "^1.11.0",
        "sass-loader": "^4.0.2",
        "style-loader": "^0.13.1",
        "vue-loader": "^9.5.0",
        "webpack": "^1.13.3",
        "webpack-dev-server": "^1.16.2"
      },
      "dependencies": {
        "axios": "^0.15.3",
        "babel-polyfill": "^6.20.0",
        "bcrypt-nodejs": "0.0.3",
        "bluebird": "^3.4.7",
        "body-parser": "^1.15.2",
        "cookie-parser": "^1.4.3",
        "cors": "^2.8.1",
        "express": "^4.14.0",
        "express-flash": "0.0.2",
        "express-session": "^1.14.2",
        "morgan": "^1.7.0",
        "pg": "^6.1.0",
        "pg-hstore": "^2.3.2",
        "sequelize": "^3.27.0",
        "serve-favicon": "^2.3.2",
        "socket.io": "^1.7.1",
        "sqlite3": "^3.1.8",
        "tedious": "^1.14.0",
        "vue": "^2.1.0",
        "vue-loader": "^10.0.0",
        "vue-style-loader": "^1.0.0",
        "vue-template-compiler": "^2.1.0"
      }
    };

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Your project is building ...');

       // create package.json
       jsonfile.writeFile(file, obj, {spaces: 2}, function (er) {
         // should be null
       });

       console.log("Your stacks ready to go!");
    });

  };
  return {
    handle: newProject
  }
};

module.exports = CreateCommand;
