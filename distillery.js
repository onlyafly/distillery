/*
 * Distillery
 * Copyright (c) 2011 Kevin P. Albrecht
 */

var
  fs = require('fs'),
  Showdown = require('./lib/showdown').Showdown,
  extract = require('./lib/extract').extract,
  arguments = require('./lib/arguments');

var versionNumber = 'v0.2.0';

var argInfo = arguments.getArgumentInfo(versionNumber);

if (argInfo) {
  var converter = new Showdown.converter();
  var blocks = extract(argInfo.input);

  var convertedBlocks = blocks.map(function(block) {
    var html = converter.makeHtml(block);
    return html;
  });

  var convertedContent = convertedBlocks.join(argInfo.middle);

  var output = argInfo.start + convertedContent + argInfo.end;

  if (argInfo.outputFile) {
    fs.writeFileSync(argInfo.outputFile, output, 'utf8');
  } else {
    console.log(output);
  }
}