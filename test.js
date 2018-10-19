import test from 'ava';
import m from '.';

test(t => {
	t.true(m().length > 0);
	t.is(m('darwin', '18.0.0'), 'macOS Mojave');
	t.is(m('darwin', '17.0.0'), 'macOS High Sierra');
	t.is(m('darwin', '16.0.0'), 'macOS Sierra');
	t.is(m('darwin', '14.0.0'), 'OS X Yosemite');
	t.is(m('darwin', '99.0.0'), 'macOS');
	t.is(m('linux', '3.13.0-24-generic'), 'Linux 3.13');
	t.is(m('win32', '5.1.2600'), 'Windows XP');
	t.is(m('win32', '4.90'), 'Windows ME');
	t.is(m('win32', '6.2'), 'Windows 8');
	t.is(m('win32', '10.0'), 'Windows 10');
	t.is(m('win32'), 'Windows');
});
