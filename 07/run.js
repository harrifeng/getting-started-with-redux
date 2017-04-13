const shell = require('shelljs');

const cmd = '../node_modules/.bin/watchify main.jsx -t [ babelify --presets react ] -v -o bundle.js';

if (shell.exec(cmd).code !== 0) {
  shell.echo('compile failed');
  shell.exit(1);
}
