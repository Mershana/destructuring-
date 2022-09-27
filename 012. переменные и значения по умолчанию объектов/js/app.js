'use strict'

// Переменные и значения по умолчанию в JavaScript

/* №1⊗jsPmDstOVDV
В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

let с;
if (options.с !== undefined) {
	с = options.color;
} else {
	с = 'black';
}

let w = options.width;
let h = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории. */

let options = {
	width:  400,
	height: 500,
};

let {width: w, height: h, color: c = 'bluviolet'} = options;
console.log(w);
console.log(h);
console.log(c);