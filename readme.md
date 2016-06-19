# os-name [![Build Status](https://travis-ci.org/sindresorhus/os-name.svg?branch=master)](https://travis-ci.org/sindresorhus/os-name)

> Get the name of the current operating system<br>
> Example: `macOS Sierra`

Useful for analytics and debugging.


## Install

```
$ npm install --save os-name
```


## Usage

```js
const os = require('os');
const osName = require('os-name');

// on a macOS Sierra system

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


## API

### osName([platform, release])

By default the name of the current operating system is returned.

You can optionally supply a custom [`os.platform()`](http://nodejs.org/api/os.html#os_os_platform) and [`os.release()`](http://nodejs.org/api/os.html#os_os_release).

Check out [getos](https://github.com/wblankenship/getos) if you need the Linux distribution name.


## CLI

```
$ npm install --global os-name
```

```
$ os-name --help

  Example
    $ os-name
    OS X Mavericks
```


## Contributing

Production systems depend on this package for logging / tracking. Please be careful when introducing new output, and adhere to existing output format (whitespace, capitalization, etc.).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
