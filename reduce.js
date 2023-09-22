// let arr = [1, 2, 3, 4, 5];
// // sum = 0 > 1 + 2 = 3
// // sum = 3 > sum + 3
// // sum = 6 > sum + 4
// // sum = 10 > sum + 5
// // sum = 15

// const sum = arr.reduce((accumulator, current) => {
//   return (accumulator += current);
// }, 0);

// console.log(sum);

const testScores = [
  { name: "Diovanne", score: 61 },
  { name: "Daniel", score: 12 },
  { name: "JC", score: 88 },
  { name: "Aaron", score: 90 },
  { name: "Froi", score: 45 },
  { name: "Kristian Jay", score: 100 },
];

const initialValue = { pass: [], fail: [] };

const result = testScores.reduce((accumulator, current) => {
  current.score >= 60
    ? accumulator.pass.push(current)
    : accumulator.fail.push(current);
  return accumulator;
}, initialValue);

console.log(result);

// accumulator = {
//   pass: [
//     { name: "Diovanne", score: 61 },
//     { name: "JC", score: 88 },
//     { name: "Aaron", score: 90 },
//     { name: "Kristian Jay", score: 100 },
//   ],
//   fail: [
//     { name: "Daniel", score: 12 },
//     { name: "Froi", score: 45 },
//   ],
// };
