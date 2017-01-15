var ncp = require('ncp').ncp;
var path = require('path');
var fs = require('fs');

var ComponentCommand = function(name) {

  var capitalName = name[0].toUpperCase() + name.slice(1).toLowerCase();

  var newComponent = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Please name your component");
      throw new Error('rens component Name');
    }

    console.log("Creating your component");

    var src = path.join(__dirname, '..', '..', 'project', 'component');
    var dest = path.join(workDir, 'app', 'components', name);
    var file = path.join(workDir, 'app', 'components', name, 'Component.vue');
    var newFile = path.join(workDir, 'app', 'components', name, capitalName + '.vue');

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Creating React Component ...');

       fs.rename(file, newFile, function(e) {
         
       });

       // rename Main in Component.jsx
       fs.readFile(newFile, 'utf8', function (err,data) {

        var result = data.replace(/main/g, capitalName);

        fs.writeFile(newFile, result, 'utf8', function (err) {
          // null
        });
      });

       console.log("Your component is ready to go!");
    });

  };
  return {
    handle: newComponent
  }
};

module.exports = ComponentCommand;
