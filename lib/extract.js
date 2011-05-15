/**
 * @param {string} content The contents of a JavaScript file.
 * @param {string=} commentStartTokenArg The comment token that begins the
 * comments to strip. Defaults to '/***'
 * @returns {Array.<string>} The blocks of comments from the file.
 */
exports.extract = function(content, commentStartTokenArg) {

  var commentStartToken = commentStartTokenArg || '/***';

  var lines = content.split('\n');
  var isProcessingBlock = false;
  var blocks = [];
  var currentBlock = '';
  var currentBlockContentStart = 0;

  for ( var i = 0, count = lines.length; i < count; i++) {
    var line = lines[i];
    var trimmedLine = line.trim();

    if (isProcessingBlock) {

      if (trimmedLine === '*/') {
        isProcessingBlock = false;
        blocks.push(currentBlock);
        currentBlock = '';
        currentBlockContentStart = 0;
      } else {

        if (currentBlockContentStart === 0) {
          var iStar = trimmedLine.indexOf('*');
          var withoutStar = trimmedLine.substr(iStar + 1);
          var trimmedWithoutStar = withoutStar.trim();
          var iBegin = trimmedLine.indexOf(trimmedWithoutStar.charAt(0), iStar);
          currentBlockContentStart = iBegin;
        }

        var lineContent = trimmedLine.substr(currentBlockContentStart);
        currentBlock += lineContent + '\n';
      }

    } else if (trimmedLine === commentStartToken) {
      isProcessingBlock = true;
    }

  }

  return blocks;

};
