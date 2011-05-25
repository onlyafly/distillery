/*
 * Distillery
 * Copyright (c) 2011 Kevin P. Albrecht
 */

var
  fs = require('fs'),
  Showdown = require('./lib/showdown').Showdown,
  extract = require('./lib/extract').extract,
  arguments = require('./lib/arguments');

var versionNumber = 'v0.3.0';

var argInfo = arguments.getArgumentInfo(versionNumber);

if (argInfo) {
  var converter = new Showdown.converter();
  var htmlContent;
  
  if (argInfo.isRawMarkdown) {
    htmlContent = converter.makeHtml(argInfo.input);
  } else {
    var blocks = extract(argInfo.input);

    var convertedBlocks = blocks.map(function(block) {
      return converter.makeHtml(block);
    });
    
    htmlContent = convertedBlocks.join(argInfo.middle);
  }    

  var output = argInfo.start + htmlContent + argInfo.end;

  if (argInfo.outputFile) {
    fs.writeFileSync(argInfo.outputFile, output, 'utf8');
  } else {
    console.log(output);
  }
}