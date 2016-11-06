// инициализация переменных
var gulp = require("gulp"),
	connect = require("gulp-connect"),
	opn = require("opn");

// Запуск сервера с лайфрелоадами
gulp.task('connect', function(){
	connect.server({
		root : 'app',
		livereload : true,
		port : 8888
	});
	opn('http://localhost:8888');
});

// Задача по html
gulp.task('html', function(){
	gulp.src('./app/*.html')
	.pipe(connect.reload());
});

// Задача по css
gulp.task('css', function(){
	gulp.src('./app/css/*.css')
	.pipe(connect.reload());
});

//Задача по js
gulp.task('js', function(){
	gulp.src('./app/js/*.js')
	.pipe(connect.reload());
});

// Задача слежения
gulp.task('watch', function(){
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js'])
});

// Задача по умлочанию
gulp.task('default', ['connect', 'watch']);