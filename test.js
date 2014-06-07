'use strict';
var assert = require('assert');
var osName = require('.');

it('should return the name a OS', function () {
	assert(osName().length > 0);
	assert.strictEqual(osName('darwin', '14.0.0'), 'OS X Yosemite');
	assert.strictEqual(osName('linux', '3.13.0-24-generic'), 'Linux 3.13');
	assert.strictEqual(osName('win32', '5.1.2600'), 'Windows XP');
	assert.strictEqual(osName('win32'), 'Windows');
});
