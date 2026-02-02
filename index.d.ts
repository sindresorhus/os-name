/**
Get the name of the current operating system.

By default, the name of the current operating system is returned.

On Linux, it reads the pretty name from `/etc/os-release` when available (e.g., `'Ubuntu 20.04.1 LTS'`, `'Debian GNU/Linux 12 (bookworm)'`). When a custom release is provided, it falls back to `'Linux <version>'`.

@param platform - Custom platform name.
@param release - Custom release name.

@example
```
import osName from 'os-name';

// On a macOS Sierra system

osName();
//=> 'macOS Sierra'

// On an Ubuntu system

osName();
//=> 'Ubuntu 20.04.1 LTS'

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
