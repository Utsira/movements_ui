/**
 * Dependencies
 */
const path = require('path');
const browserify = require('browserify');
const reactify = require('reactify');
const babelify   = require('babelify');
const source     = require('vinyl-source-stream');

/**
 * Module body / Expose
 */
module.exports = (entry, config) => {
  config = config || {};
  const built = browserify(entry)
    .transform(reactify)
    .transform(babelify);
  return built.bundle().pipe(source(path.basename(entry)));
};
