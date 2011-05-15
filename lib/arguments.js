var fs = require('fs');

exports.getArgumentInfo = function(versionNumber) {
  
  var len = process.argv.length;
  if (len > 2) {
    
    var
      inputFiles = [],
      outputFile = null,
      startFile = null,
      middleFile = null,
      endFile = null;
    
    for (var i = 2; i < len; i++) {
      switch (process.argv[i]) {
        case '-o':
          outputFile = process.argv[++i];
          break;
        case '-s':
          startFile = process.argv[++i];
          break;
        case '-m':
          middleFile = process.argv[++i];
          break;
        case '-e':
          endFile = process.argv[++i];
          break;
        default:
          inputFiles.push(process.argv[i]);
      }      
    }
    
    var result = {
      input: inputFiles.map(loadFile).join(),
      outputFile: outputFile,
      start: loadFile(startFile),
      middle: loadFile(middleFile),
      end: loadFile(endFile)
    };
    
    return result;
    
  } else {
    displayUsageInformation(versionNumber);
    return null;
  }
  
};

function displayUsageInformation(versionNumber) {
  console.error(
    'Distillery version ' + versionNumber + '\n' +
    'Usage: node distillery input1.js [input2.js [...]] \n' +
    '\n' +
    'Options (all optional):\n' +
    '\n' +
    '  -o FILE   Specify the output HTML file to create. If output file \n' +
    '            is not specified, it will be directed to the console.\n' +
    '  -s FILE   Specify the HTML start file, which will be prepended\n' +
    '            to the results.\n' +
    '  -m FILE   Specify the HTML middle file, which will be inserted\n' +
    '            between each block of comments from the input.\n' +
    '  -e FILE   Specify the HTML end file, which will be appended\n' +
    '            to the results.\n');
}

function loadFile(filename) {
  if (filename !== null) {
    return fs.readFileSync(filename, 'utf8');
  } else {
    return '';
  }
}