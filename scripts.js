"use strict";

//DOM bindings
const balance = document.getElementById('balance');
const lamboName = document.getElementById('lamboName');
const lamboTime = document.getElementById('lamboTime');

//When user selects a lamboghini
const selectLambo = async function(name, price){
	lamboTime.innerHTML = 'It would take you ' + Math.ceil(price / (balance.value * 1.5 * 0.025)).toString() + ' months to buy the ' + name + ' with bEUBI profit shares.';
};