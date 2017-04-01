../node_modules/.bin/http-server &
../node_modules/.bin/watchify main.js -t [ babelify --presets react ] -v -o bundle.js
