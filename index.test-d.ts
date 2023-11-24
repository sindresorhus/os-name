import {platform, release} from 'node:os';
import {expectType} from 'tsd';
import osName from './index.js';

expectType<string>(osName());
expectType<string>(osName(platform(), release()));
expectType<string>(osName('darwin', '14.0.0'));
expectType<string>(osName('linux', '3.13.0-24-generic'));
expectType<string>(osName('win32', '6.3.9600'));
