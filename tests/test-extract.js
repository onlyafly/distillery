var extract = require('../lib/extract').extract;
var fs = require('fs');

exports.extractTestOne = function(test) {

  var testDataOne = fs.readFileSync('files/one.js', 'utf8');
  
  var actual = extract(testDataOne);
  
  var expected0 = 'Hello!\n\n    This is an example.\n';
  test.equal(actual[0], expected0);
  
  var expected1 = 'Hello!\n\n    This is an example.\n';
  test.equal(actual[1], expected1);

  test.done();
};