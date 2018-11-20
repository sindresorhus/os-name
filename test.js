import os from 'os';
import test from 'ava';
import osName from '.';

test('main', t => {
	t.true(osName().length > 0);
	t.is(osName('darwin', '18.0.0'), 'macOS Mojave');
	t.is(osName('darwin', '17.0.0'), 'macOS High Sierra');
	t.is(osName('darwin', '16.0.0'), 'macOS Sierra');
	t.is(osName('darwin', '14.0.0'), 'OS X Yosemite');
	t.is(osName('darwin', '99.0.0'), 'macOS');
	t.is(osName('linux', '3.13.0-24-generic'), 'Linux 3.13');
	t.is(osName('win32', '5.1.2600'), 'Windows XP');
	t.is(osName('win32', '4.90'), 'Windows ME');
	t.is(osName('win32', '6.2'), 'Windows 8');
	t.is(osName('win32', '10.0'), 'Windows 10');

	os.platform = () => 'darwin';
	t.is(osName('win32'), 'Windows');
	t.is(osName('linux'), 'Linux');

	os.platform = () => 'linux';
	t.is(osName('darwin'), 'macOS');
	t.is(osName('win32'), 'Windows');

	os.platform = () => 'win32';
	t.is(osName('darwin'), 'macOS');
	t.is(osName('linux'), 'Linux');
});
