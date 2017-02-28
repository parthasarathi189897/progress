var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');
var less = require('gulp-less');
var path = require('path');

var config = {
    HTML: 'src/index.html',
    ALL: ['src/**/*.jsx', 'src/**/*.js'],
    MINIFIED_OUT: 'build.js',
    DEST_SRC: 'src/app',
    DEST_BUILD: 'src/build'
};

gulp.task('webpack', [], function() {
    return gulp.src(config.ALL) //gulp looks for all source files under specified config
        .pipe(sourcemaps.init()) // creates a source map which would be very helpful for debugging by maintaining the actual source code structure
        .pipe(stream(webpackConfig)) // blend in the webpack config into the source files
        .pipe(uglify()) // minifies the code for better compression
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.DEST_BUILD));
});



gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;
    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        publicconfig: "/" + myConfig.output.publicconfig,
        stats: {
            colors: true
        }
    }).listen(9090, "localhost", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:9090/webpack-dev-server/index.html");
    });
});


gulp.task("less", function(){
       return gulp.src('src/app/styles/index.less')
        .pipe(less({
          paths: [ path.join(__dirname, 'src/app/styles') ]
        }))
        .pipe(gulp.dest(path.join(__dirname, '/build')));
  });




gulp.task('watch', function() {
    gulp.watch(config.ALL, ['webpack','less']);
});


gulp.task('default', ['webpack-dev-server', 'watch']);