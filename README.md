Distillery
==========

__Current Version__:
v0.2.0

__License__:
MIT (see included LICENSE file)

__Author__:
Kevin P. Albrecht - <http://www.kevinalbrecht.com>
        
__Web Site__:
<http://www.github.com/onlyafly/distillery>

What is Distillery?
-------------------

Distillery is a Node.js program which extracts multiline comments that start
with /\*\*\* (a forward slash and three asterisks) of Markdown-formatted text
from a JavaScript file, then generates an HTML file from the results.

Dependencies
------------

### Included

* showdown.js - <https://github.com/fivesixty/mdext>

### Required

* Node - <https://github.com/joyent/node>

### To run unit tests

* nodeunit - <https://github.com/caolan/nodeunit>

Running Distillery
------------------

From the root folder, run this:

    > node distillery.js
    
Running the Example
-------------------

From the root/examples folder, run this to regenerate output.html:

    > . example.sh

Running the Unit Tests
----------------------

From the root folder, run this:

    > nodeunit tests