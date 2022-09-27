'use strict'

// Функции по умолчанию при деструктуризации массива в JavaScript
/* №1⊗jsPmDstAFDV
Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год. */

function getDay(){
	return (new Date).getDate();
}

function getMonth() {
	return (new Date).getMonth();
}

function getYear(){
	return (new Date).getFullYear();
}

let arr = [2022];
let [year = getYear(), month = getMonth(), day = getDay()] = arr;
console.log(year + '-' + month + '-' + day);