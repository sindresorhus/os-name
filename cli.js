#!/usr/bin/env node
'use strict';
var meow = require('meow');
var osName = require('./');

meow([
	'Example',
	'  $ os-name',
	'  macOS Sierra'
]);

console.log(osName());
