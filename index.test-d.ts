import {expectType} from 'tsd-check';
import * as os from 'os';
import osName from '.';

expectType<string>(osName());
expectType<string>(osName(os.platform(), os.release()));
expectType<string>(osName('darwin', '14.0.0'));
expectType<string>(osName('linux', '3.13.0-24-generic'));
expectType<string>(osName('win32', '6.3.9600'));
