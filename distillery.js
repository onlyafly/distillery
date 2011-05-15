var
  fs = require('fs'),
  Showdown = require('./lib/showdown').Showdown,
  extract = require('./lib/extract').extract;

if (process.argv.length < 7) {
  
  console.error(
    'Usage: distillery inputfile.js outputfile.html startTemplate.html middleTemplate.html endTemplate.html');
  
} else {
  
  // Get files from the program arguments
  var
    inputFile = process.argv[2],
    outputFile = process.argv[3],
    startFile = process.argv[4],
    middleFile = process.argv[5],
    endFile = process.argv[6];

  // Read in file contents
  var
    input = fs.readFileSync(inputFile, 'utf8'),
    start = fs.readFileSync(startFile, 'utf8'),
    middle = fs.readFileSync(middleFile, 'utf8'),
    end = fs.readFileSync(endFile, 'utf8');

  var converter = new Showdown.converter();
  var blocks = extract(input);
  
  var convertedBlocks = blocks.map(function(block) {
    var html = converter.makeHtml(block);
    return html;
  });
  
  var convertedContent = convertedBlocks.join(middle);
  
  var output = start + convertedContent + end;
  fs.writeFileSync(outputFile, output, 'utf8');
  
}
