Distillery.js
=============

__License__:
MIT (see included LICENSE file)

__Author__:
Kevin P. Albrecht <http://www.kevinalbrecht.com>
        
__Web Site__:
<http://www.github.com/onlyafly/distillery>

What is Distillery?
-------------------

Distillery is a Node.js program which extracts multiline comments that start
with /\*\*\* (a forward slash and three asterisks) of Markdown-formatted text
from a JavaScript file, then generates an HTML file from the results.

Dependencies
------------

### Required

* node.js [https://github.com/joyent/node]
* showdown.js (included)

### To run unit tests

* nodeunit [https://github.com/caolan/nodeunit]

Running Distillery
------------------

From the root folder, run this:

    > node distillery.js

Running the Unit Tests
----------------------

From the root folder, run this:

    > nodeunit tests