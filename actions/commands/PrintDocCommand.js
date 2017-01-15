var actionJson = require('../../package.json');

var PrintDoc = function() {
  var printMe = function() {
    /*
     _____ _            _   _            
/  ___| |          | | | |           
\ `--.| | ___   _  | | | |_   _  ___ 
 `--. \ |/ / | | | | | | | | | |/ _ \
/\__/ /   <| |_| | \ \_/ / |_| |  __/
\____/|_|\_\\__, |  \___/ \__,_|\___|
             __/ |                   
            |___/                  
     */

    console.log(`     _____ _            _   _    `)
    console.log(`/  ___| |          | | | |           `)
    console.log(`\\ \`--.| | ___   _  | | | |_   _  ___ `)
    console.log(` \`--. \\ |/ / | | | | | | | | | |/ _ \\`)
    console.log(`/\\__/ /   <| |_| | \\ \\_/ / |_| |  __/`)
    console.log(`\\____/|_|\\_\\__, |  \\___/ \\__,_|\\___|`)
    console.log(`             __/ |                   `)
    console.log(`            |___/                  `)
    console.log("\n");
    console.log("RENS-Stack-Cli - Version" + actionJson.version);
    console.log('├── create             ─ Create a new project');
    console.log('├── make               ─ Create a new component');
    console.log('└── runs                ─ Verify that your stack works');
  };
  return {
    handle : printMe
  }
};

module.exports = PrintDoc;
