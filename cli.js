#!/usr/bin/env node
'use strict';
var meow = require('meow');
var osName = require('./');

meow({
	help: [
		'Example',
		'  os-name',
		'  OS X Mavericks'
	].join('\n')
});

console.log(osName());
