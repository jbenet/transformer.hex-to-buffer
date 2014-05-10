#!/usr/bin/env node
var transformer = require('dat-transformer');
var conv = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = transformer.test.conversion(conv, [
  ['6265657020626f6f70', new Buffer('beep boop', 'ascii')]
])
