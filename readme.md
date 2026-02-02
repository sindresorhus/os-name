# os-name

> Get the name of the current operating system\
> Example: `macOS Sierra`

Useful for analytics and debugging.

## Install

```sh
npm install os-name
```

## Usage

```js
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

## API

### osName(platform?, release?)

By default, the name of the current operating system is returned.

On Linux, it reads the pretty name from `/etc/os-release` when available (e.g., `'Ubuntu 20.04.1 LTS'`, `'Debian GNU/Linux 12 (bookworm)'`). When a custom release is provided, it falls back to `'Linux <version>'`.

You can optionally supply a custom [`os.platform()`](https://nodejs.org/api/os.html#os_os_platform) and [`os.release()`](https://nodejs.org/api/os.html#os_os_release).

## Related

- [os-name-cli](https://github.com/sindresorhus/os-name-cli) - CLI for this module
