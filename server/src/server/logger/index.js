const fs = require('fs');

let fileName = '';

function init (fname) {
  fileName = fname;
}

function log(params) {
  if(!fileName){
      console.error("please init logger with file name");
      return;
  }

  const { message, code, timestamp, stackTrace } = params;

  const logString = JSON.stringify({message, code, timestamp, stackTrace});

  fs.appendFileSync(fileName, logString);
}

module.exports = {
    init,
    log
};
