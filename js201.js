'use strict';

var year = Number(prompt('Which year is this?'));

console.log('This is a leap year: ' + (year % 4 === 0) || (year % 100 === 0) || (year % 400 === 0));

