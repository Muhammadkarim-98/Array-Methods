const str = 'code explain is code !';
// console.log(str.length)
// console.log(str.charAt(7))
// console.log(str.indexOf('code', 0))
// console.log(str.lastIndexOf('code'))
// console.log(str.slice(5)) out: explain is code!
// console.log(str.substring(5)) out: explain is code!
// console.log(str.slice(-11)) out: n is code!
// console.log(str.substring(-11)) out: code explain is code! (we can see difference when indexStart is negative number)
// console.log(str.slice(23)) out: '';
// console.log(str.substring(23)) out: '';
// console.log(str.split('e', 2)); out: ['cod', ' '];
// console.log(str.includes('is')); out: true;
// console.log(str.startsWith('e', 3)); out: true
// console.log(str.endsWith('!')) out: true;
// const str2 = 'Good code is good and ';
// console.log(str2.concat(str)) out: Good code is good and code explain is code!;
// console.log(str.repeat(2)) out: code explain is code!code explain is code!
// console.log(str.trim()) --> The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string. <--
// console.log(str.trimStart())
// console.log(str.trimEnd())
// console.log(str.padStart(3));
// console.log(str.padEnd(3));
// const a = 'réservé';
// const b = 'RESERVE';
// console.log(a.localeCompare(b));out: 1
// console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));out: 0
// console.log(str.search(/is/)) out: 13;
// console.log(str.match('ain'));
// out: ['ain', index: 9, input: 'code explain is code !', groups: undefined]
// console.log(str.match(/ain/));
// out: ['ain', index: 9, input: 'code explain is code !', groups: undefined]
// console.log(str.match(/ain/g)); out: ['ain'];
// console.log(str.replace('code', 'si'));
// out: si explain is code !
// console.log(str.replace('code', (str) => { return str.toUpperCase() })); out: CODE explain is code!
// console.log(str.replaceAll(/code/, 'some')); out: TypeError: String.prototype.replaceAll called with a non - global RegExp argument;
// console.log(str.charCodeAt(1)) out:111;
// console.log(str.charCodeAt(2)) out:100;
// console.log(str.charCodeAt(10)) out:105;
// let t = new String('hey man');
// console.log(t.toString()) out: hey man;