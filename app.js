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
const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbers2 = numbers.slice(-4);
console.log(numbers2)
