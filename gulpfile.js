var gulp = require('gulp'),
sass     = require('gulp-sass'),
uglify   = require('gulp-uglifyjs'),
concat   = require('gulp-concat'),
useref = require('gulp-useref'),
assets = require("gulp-assets"),
jasmine = require('gulp-jasmine'),
reporters = require('jasmine-reporters');



gulp.task('sass', function(){         /// Заработало
	console.log("open task SASS");
	return gulp.src('construct/sass/main.sass')
	//.pipe(sass.on('error', sass.logError())
	.pipe(sass())
	.pipe(gulp.dest('product/css'))
	
});



gulp.task('jas', function () {
	gulp.src('JASMIN\spec\ANSVER.js')
		
		.pipe(jasmine( {
		reporter: new reporters.JUnitXmlReporter()
		}))
		.pipe(gulp.dest('product/js'));
});
 


gulp.task('JS', function () { 
      console.log("open task JS");
    return gulp.src(['construct/js/JS.JS'])
           .pipe(concat('Full.js'))
		   .pipe(uglify())
		   .pipe(gulp.dest('product/js'));					  

});