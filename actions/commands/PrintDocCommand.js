var actionJson = require('../../package.json');

var PrintDoc = function() {
  var printMe = function() {
    console.log('___  ___ ___________ _   _ ');
    console.log('|  \\/  ||  ___| ___ \\ \\ | |');
    console.log('| .  . || |__ | |_/ /  \\| |');
    console.log('| |\\/| ||  __||    /| . ` |');
    console.log('| |  | || |___| |\\ \\| |\\  |');
    console.log('\\_|  |_/\\____/\\_| \\_\\_| \\_/');
    console.log("\n");
    console.log("RENS-Stack-Cli - Version" + actionJson.version);
    console.log('├── create             ─ Create a new project');
    console.log('├── make               ─ Create a new component');
    console.log('├── page               ─ Create a new page');
    console.log('└── runs                ─ Verify that your stack works');
  };
  return {
    handle : printMe
  }
};

module.exports = PrintDoc;
