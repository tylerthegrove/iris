const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build' , function(cb) {
	runSequence(
        ['compileComponentListJSX','compileEntryPoints-Dev'],
        'reactDocGenBuild',
        'reactDocGenParse',
        'compileColorVariables',
        'sassGlobals',
        'copyStaticAssets',
        'compilePackageIndexJSX',
        'copyFavicon',
        'webpackReact',
		cb);
});
