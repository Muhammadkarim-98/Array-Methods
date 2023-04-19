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
