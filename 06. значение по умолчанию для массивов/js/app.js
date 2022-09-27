'use strict'

// Значения по умолчанию при деструктуризации массива в JavaScript
/* №1⊗jsPmDstADV
В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer'];

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];

let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'trainee';
}
Переделайте этот код через деструктуризацию согласно изученной теории. */
/* let arr = ['John', 'Smit', 'development'];
let [name, surname, department, position = 'trainee'] = arr;
console.log(name, surname, department, position); */


