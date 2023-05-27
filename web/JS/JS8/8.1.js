//задание 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.map(item => item + 10);
const arr3 = arr1.map(item => item * 3);
console.log('Задание 1:\n', arr2, arr3, '\n');

//задание 2
const year = [1993, 1998, 2001];
var now = new Date();
const age = year.map(item => now.getFullYear() - item );
console.log('Задание 2:\n', age);