const animals = ['pigs', 'goats', 'sheeps'];
const fruits = ['apple', 'banana', 'peach'];

// push 配列の末尾に1つ以上の要素を追加する。戻り値は新しい配列の要素数
const PUSH = animals.push('cows');
console.log("PUSH", PUSH);
console.log("PUSH", animals);

// pop 配列の最後の要素を取り除き、その要素を返す
const POP = animals.pop();
console.log("POP", POP);
console.log("POP", animals);

// shift 配列から最初の要素を取り除き、その要素を返します。
const SHIFT = animals.shift();
console.log("SHIFT", SHIFT);
console.log("SHIFT", animals);

// unshift 配列の最初に１個以上の要素を追加し、配列の変更後の長さを返します
const UNSHIFT = animals.unshift('pigs', 'dogs');
console.log("UNSHIFT", UNSHIFT);
console.log("UNSHIFT", animals);

// reverse
const REVERSE = animals.reverse();
console.log("REVERSE", REVERSE);
console.log("REVERSE", animals);

// concat 配列に他の配列や値をつないでできた新しい配列を返す。
const CONCAT = animals.concat(fruits);
console.log(animals);
console.log(fruits);
console.log(CONCAT);

let slice = CONCAT.slice();
console.log("slice", slice);


