const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
console.log("----ARRAY MAP----");
//1. Get array of all names
const names = characters.map((char) => char.name);

console.log("Problem 1:", names);
//2. Get array of all heights
const heights = characters.map((char) => char.height);
console.log("Problem 2:", heights);

//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map((char) => {
  const newObj = {};
  newObj["name"] = char.name;
  newObj["height"] = char.height;
  return newObj;
});

console.log("Problem 3:", nameAndHeight);
//4. Get array of all first names
// Anakin Skywalker
// 0      1
// Anakin
const firstNames = characters.map((char) => char.name.split(" ")[0]);
console.log("Problem 4:", firstNames);

//***REDUCE***
console.log("----ARRAY REDUCE----");
//1. Get total mass of all characters
const totalMass = characters.reduce(
  (accumulator, current) => (accumulator += current.mass),
  0
);
console.log("Problem 1:", totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce(
  (accumulator, current) => (accumulator += current.height),
  0
);
console.log("Problem 2:", totalHeight);

//3. Get total number of characters by eye color
const eyeColor = characters.reduce((accumulator, current) => {
  const color = current.eye_color;
  accumulator[color] = (accumulator[color] || 0) + 1;
  return accumulator;
}, {});
console.log("Problem 3:", eyeColor);

// 4. Get total number of characters in all the character names
const charOfName = characters.reduce((accumulator, current) => {
  accumulator += current.name.split("").length;
  return accumulator;
}, 0);

console.log("Problem 4", charOfName);

//***FILTER***
console.log("----ARRAY FILTER----");
//1. Get characters with mass greater than 100
const greaterThan = characters.filter((char) => char.mass > 100);
console.log("Problem 1:", greaterThan);

//2. Get characters with height less than 200
const lessThan = characters.filter((char) => char.height < 200);
console.log("Problem 2:", lessThan);

//3. Get all male characters
const male = characters.filter((char) => char.gender == "male");
// 1 == "1" // true
// 1 === "1" // false
console.log("Problem 3:", male);

//4. Get all female characters
const female = characters.filter((char) => char.gender == "female");
console.log("Problem 4:", female);

//***SORT***
console.log("----ARRAY SORT----");
//1. Sort by mass
// arr = [2,4,1,5,3,6]

const mass = characters.sort(
  (a, b) => (a.mass < b.mass ? -1 : a.mass > b.mass ? 1 : 0)
  // ternary condition
  // if else
);
console.log("Problem 1:", mass);
//2. Sort by height
const height = characters.sort((a, b) =>
  a.height < b.height ? -1 : a.height > b.height ? 1 : 0
);
console.log("Problem 2:", height);
//3. Sort by name
const byName = characters.sort((a, b) =>
  a.name < b.name ? -1 : a.name > b.name ? 1 : 0
);
console.log("Problem 3:", byName);
//4. Sort by gender
const gender = characters.sort((a, b) =>
  a.gender < b.gender ? -1 : a.gender > b.gender ? 1 : 0
);
console.log("Problem 4:", gender);

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
