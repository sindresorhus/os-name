'use strict';
const os = require('os');
const macosRelease = require('macos-release');
const winRelease = require('windows-release');

module.exports = function (platform, release) {
	if (!platform && release) {
		throw new Error('You can\'t specify a `release` without specifying `platform`');
	}

	platform = platform || os.platform();

	let id;

	if (platform === 'darwin') {
		release = release || os.release();
		const prefix = Number(release.split('.')[0]) > 15 ? 'macOS' : 'OS X';
		id = macosRelease(release).name;
		return prefix + (id ? ' ' + id : '');
	}

	if (platform === 'linux') {
		release = release || os.release();
		id = release.replace(/^(\d+\.\d+).*/, '$1');
		return 'Linux' + (id ? ' ' + id : '');
	}

	if (platform === 'win32') {
		id = release ? winRelease(release) : '';
		return 'Windows' + (id ? ' ' + id : '');
	}

	return platform;
};
