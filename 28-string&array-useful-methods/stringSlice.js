//28-3 How to split, slice, substr, substring, concat, join
const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';

//split
const words = anthem.split(' ');
console.log(words);

const withoutA = anthem.split('a');
console.log(withoutA);

//slice
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);

//substr
const anotherPart = anthem.substr(11, 6);
console.log(anotherPart);

//substring
const anotherAnotherPart = anthem.substring(11, 15);
console.log(anotherAnotherPart);

//concat
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc');
console.log(fullString);

// join
const words2 = ['a', 'b', 'c', 'd'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join('WWW');
console.log(allJoined);
