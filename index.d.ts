/**
Get the name of the current operating system.

By default, the name of the current operating system is returned.

@param platform - Custom platform name.
@param release - Custom release name.

@example
```
import os from 'node:os';
import osName from 'os-name';

// On a macOS Sierra system

osName();
//=> 'macOS Sierra'

osName(os.platform(), os.release());
//=> 'macOS Sierra'

osName('darwin', '14.0.0');
//=> 'OS X Yosemite'

osName('linux', '3.13.0-24-generic');
//=> 'Linux 3.13'

osName('win32', '6.3.9600');
//=> 'Windows 8.1'
```
*/
export default function osName(): string;
export default function osName(platform: NodeJS.Platform, release: string): string;
