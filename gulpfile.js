'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');

const stylus = require('gulp-stylus');
const nib = require('nib');

const jshint = require('gulp-jshint');

function serverSetup() {
	connect.server({
		root: ['./app'],
		hostname: '0.0.0.0',
		port: 8080,
		livereload: true
	});
}

function stylusReload() {
	gulp.src('./app/css/stylus/style.styl')
		.pipe(stylus({use: nib()}))
		.pipe(gulp.dest('./app/css'))
		.pipe(connect.reload());
}

function htmlReload() {
	gulp.src('./app/**/*.html')
		.pipe(connect.reload());
}

function jsHint() {
	return gulp.src(['./app/js/main.js', './gulpfile.js', './app/js/vsop.js', './app/js/nav.js'])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
}

function watchFiles() {
	gulp.watch(['./app/**/*.html'], ['html']);
	gulp.watch(['./app/css/stylus/**/*.styl'], ['stylus']);
	gulp.watch(['./app/js/**/*.js', './gulpfile.js'], ['jshint']);
}

// Servidor Web de desarrollo
gulp.task('server', serverSetup);

// Proprocesa archivos Stylus a CSS y recarga los cambios
gulp.task('stylus', stylusReload);

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', htmlReload);

// Vigila cambios que se produzcan en el codigo y lanza las tareas relacionadas
gulp.task('watch', watchFiles);

// Busca errores de JS y nos lo muestra por pantalla
gulp.task('jshint', jsHint);

// Carga los cambios cuando se inicia Gulp
gulp.task('start', ['html', 'stylus', 'jshint']);

// Default tarea de Gulp
gulp.task('default', ['server', 'start', 'watch']);
