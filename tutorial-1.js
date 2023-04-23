// FOREACH

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach((item, index, arr) => {
// 	sum += item
// });
// ----------------
// const letter = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];
// let count = {};
// letter.forEach((item, index, arr) => {
// 	if (count[item]) {
// 		count[item]++
// 	} else { count[item] = 1 };
// });

// MAP (creates new array)

// const numbers = [1, 2, 3, 4, 5];
// const doubleNum = numbers.map(double);
// function double(val, index, arr) {
// 	return val * 2
// }
// ---------
// const products = [{
// 	name: "laptop",
// 	price: 120,
// 	count: 5,
// }, {
// 	name: "macbook",
// 	price: 1400,
// 	count: 8,
// }, {
// 	name: "phone",
// 	price: 1100,
// 	count: 11,
// },];
// const totalProduct = products.map(double);
// function double(val, index, arr) {
// 	let g = (val.price * val.count) * index;
// 	return g;
// }
//-----------------
// const str = [1, 2, 3, 4, 5];
// const numbers = str.map(Number)

// FILTER (creates new array)

// const numbers = [1, 2, 3, 4, 5, 6];
// const even = numbers.filter(isEven);
// function isEven(val) {
// 	return val % 2 === 0;
// };
//--------------
// const people = [
// 	{ name: "Florida", age: 26 },
// 	{ name: "Ivan", age: 18 },
// 	{ name: "Jai", age: 15 },
// ];
// const adults = people.filter((person) => person.age >= 18);
// console.log(adults)
//------------------
// const numbers = [1, 2, 2, 3, 1, 4, 2, 5, 6, 7, 4];
// const nums = numbers.filter((val, index, arr) => {
// 	return arr.indexOf(val) === index;
// })
// console.log(nums)

// REDUCE

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const total = numbers.reduce(sum);
// function sum(accumulator, value) {
// 	return accumulator + value;
// }
// console.log(total);
//-----------------
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const max = numbers.reduce(callback);
// function callback(accumulator, value) {
// 	if (accumulator > value) {
// 		return accumulator
// 	} else { return value }
// }
// console.log(max);
//----------------
// const store = [
// 	{ product: "laptop", value: 1000, count: 3 },
// 	{ product: "desktop", value: 1500, count: 4 },
// 	{ product: "mobile", value: 500, count: 10 },
// ];
// const totalValue = store.reduce((acc, item) => acc + item.value * item.count, 0);
// console.log(totalValue);
//-----------------
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const numbers2 = numbers.slice(-4);

// SPLICE

// const numbers = [1, 2, 3, 4];
// const deleted = numbers.splice(2, 1);

// SORT

// const names = ['Sam', 'Jam', 'Ram', 'Dam', 'Bam'];
// names.sort();
// output: ['Bam', 'Dam', 'Jam', 'Ram', 'Sam']
//---------------
// const numbers = [76, 18, 29, 109, 4];
// numbers.sort(comparing);
// function comparing(a, b) {
// 	// 1. < 0 ... a comes first.
// 	// 2. 0 ... nothing will be changed.
// 	// 1. > 0 ... b comes first.
// 	return a - b;
// }
// out: [4, 18, 29, 76, 109]
//-----------------------
// const store = [
// 	{ product: "laptop", price: 1000, },
// 	{ product: "desktop", price: 1500, },
// 	{ product: "mobile", price: 500, },
// ];
// store.sort((a, b) => a.price - b.price);

// CONCAT

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [7, 8, 9];
// const d = a.concat(b, c);
// out: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// FILL

// const numbers = [76, 18, 29, 109, 4, 90, 1];
// numbers.fill(0);
// out: [0, 0, 0, 0, 0, 0, 0];
// numbers.fill(0, 2, 5);
// out: [76, 18, 0, 0, 0, 90, 1];
//--------------------
// function fillInNumbers(n) {
//   return Array(n)
//     .fill(0)
//     .map((val, inx) => inx + 1);
// }
// out: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// INCLUDES

// const fruits = ["Apple", "Orange", "Mango"];
// const res = fruits.includes("Orange");
// if (res) {
// 	console.log("True");
// } else {
// 	console.log("False");
// }
//out: True

// REVERSE

// const numbers = [1, 2, 3, 4, 5];
// numbers.concat();
// out: [5, 4, 3, 2, 1];
//-----------------
// const str = 'Coding is fun!';
// const res = str.split('').reverse().join('');
// out: '!nuf si gnidoC'

// PUSH

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6)
// out: [1, 2, 3, 4, 5, 6]

// POP

// const numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// out: [1, 2, 3, 4]

// UNSHIFT

// const numbers = [1, 2, 3, 4];
// numbers.unshift(2);
// out: [2, 1, 2, 3, 4];

//SHIFT

// const numbers = [1, 2, 3, 4];
// numbers.shift();
// out: [2, 3, 4]

//indexOf

// const names = ['Florin', 'Ivan', 'Liam'];
// const idx = names.indexOf('Ivan');
// names[idx] = 'Jay'
// out: ['Florin', 'Jay', 'Liam'];

// EVERY

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.every(isPositive);
// function isPositive(item) {
// 	return item > 0;
// }
// out: true;
//------------------------
// const persons = [{ name: "Anwar" }, { name: "Islom" }, { name: "Sardor" }, { surname: "Jay" }];
// const res = persons.every(person => person.name !== undefined);
// out: false;
//--------------------
// const arrays = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];
// const res = arrays.every(arr => Array.isArray(arr));
// out: true;

//SOME

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.some(greaterThanFour);
// function greaterThanFour(item) {
// 	return item > 4;
// }
// out: true;

//FIND

// const persons = [{ name: "Florin", age: 25 }, { name: "Ivan", age: 20 }, { name: "Liam, age: 18" }];
// const res = persons.find(findIvan);
// function findIvan(person) {
// 	return person.name === 'Ivan';
// }
// out: { name: 'Ivan', age: 20 }

//findIndex

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.findIndex(findThree);
// function findThree(value) {
// 	return value === 3;
// }
// out: 2;

//FROM

// const str = '1234567';
// // const res = Array.from(str, x => Number(x));
// const res = Array.from(str, Number);
// out: [
// 	1, 2, 3, 4,
// 	5, 6, 7
// ];
//--------------
// const numbers = [1, 2, 2, 4, 3, 4, 5, 6, 7, 1, 5, 7, 8];
// // const names = ['Florin', 'Ivan', 'Liam', 'Ivan', 'Florin'];
// // out: Set(3) { 'Florin', 'Ivan', 'Liam' }
// const res = Array.from(new Set(numbers));
// console.log(res);
// out: [1, 2, 4, 3, 5, 6, 7, 8];

//isArray

// const names = ["Florin", "Ivan", "Liam", "Ivan", "Florin"];
// const str = "hello sam";
// const number = 23;
// console.log(Array.isArray(names));
// out: true;
// console.log(Array.isArray(number));
// out: false;

//FLAT

// const arr = [1, [2, [3, [4]]]];
// const res = arr.flat(Infinity);
// console.log(res);
// out: [1, 2, 3, 4];
