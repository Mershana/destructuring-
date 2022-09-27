"use strict";

// Деструктуризация параметров функций в JavaScript

/* №1⊗jsPmDstFP
Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	let position   = employee[3];
	let salary     = employee[4];
}
func( ['John', 'Smit', 'development', 'programmer', 2000] ); */

/* function func([name, surname, department, position, salary]) {
	return name + '- ' + surname + ' - ' + department + ' - ' + position + ' - ' + salary;
	}
	console.log(func( ['John', 'Smit', 'development', 'programmer', 2000])); */

/* 	№2⊗jsPmDstFP
Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name     = employee[0];
	let surname  = employee[1];
	let info     = employee[2];
}

func( ['John', 'Smit', 'development', 'programmer', 2000] ); */

/* function func([name, surname, ...info]) {
	return info;
	}
	console.log(func( ['John', 'Smit', 'development', 'programmer', 2000] ));
 */

/* 	№3⊗jsPmDstFP
Переделайте следующий код через деструктуризацию согласно изученной теории: */
/* function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	
	let position;
	if (arr[3] !== undefined) {
		position = arr[3];
	} else {
		position = 'джуниор';
	}
}

func( ['John', 'Smit', 'development'] ); */

/* function func([name, surname, department, position = 'джуниор']){
	func(['John', 'Smit', 'development']);
	console.log(func(['John', 'Smit', 'development']));
}
 */

// Объекты в параметрах

/* №5⊗jsPmDstFP
Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(options) {
	let color  = options.color;
	let width  = options.width;
	let height = options.height;
}

func( {color: 'red', width: 400, height: 500} ); */

/* function func({color,width, height}){
	console.log(color);
	console.log(width);
	console.log(height);
}
func( {color: 'red', width: 400, height: 500} ); */

/* №6⊗jsPmDstFP

Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(options) {
	let width  = options.width;
	let height = options.height;
	
	let color;
	if (options.color !== undefined) {
		color = options.color;
	} else {
		color = 'black';
	}
}

func( {color: 'red', width: 400, height: 500} ); */

/* function func({color = 'black',width, height}){
	console.log(color);
	console.log(width);
	console.log(height);
}
func( { width: 400, height: 500} ); */
