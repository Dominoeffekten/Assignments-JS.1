'use strict';

console.log('Truth Table Conjunction');
console.log('var1\tvar2\tvar3\tvar1 && var2 && var3');

var var1 = true; 
var var2 = true;
var var3 = true;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1&&var2&&var3)); //true, true, true, true

var var1 = true;
var var2 = true;
var var3 = false;
console.log(var1 + '\t' + var2 + '\t' + var3  + '\t' + (var1&&var2&&var3)); // true, true, false, false

var var1 = true;
var var2 = false;
var var3 = false;
console.log(var1 + '\t' + var2 + '\t' + var3   + '\t' + (var1&&var2&&var3)); // true, false, false, false

var var1 = true;
var var2 = false;
var var3 = true;
console.log(var1 + '\t' + var2 + '\t' + var3   + '\t' + (var1&&var2&&var3)); // true, false, true, false

var var1 = false;
var var2 = false;
var var3 = false;
console.log(var1 + '\t' + var2 + '\t' + var3   + '\t' + (var1&&var2&&var3)); //false, false, false, false

var var1 = false;
var var2 = true;
var var3 = true;
console.log(var1 + '\t' + var2 + '\t' + var3   + '\t' + (var1&&var2&&var3)); //false, true, true, false

var var1 = false;
var var2 = false;
var var3 = true;
console.log(var1 + '\t' + var2 + '\t' + var3  + '\t' + (var1&&var2&&var3)); // false, false, true, false

var var1 = false;
var var2 = true;
var var3 = false;
console.log(var1 + '\t' + var2 + '\t' + var3  + '\t' + (var1&&var2&&var3)); // false, true, false, false

