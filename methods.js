// let arr = [1, 2, 3, 4, 5];
// let names = [
//   {
//     firstName: "Name 1",
//     lastName: "Last Name 1",
//   },

//   {
//     firstName: "Name 2",
//     lastName: "Last Name 2",
//   },

//   {
//     firstName: "Name 3",
//     lastName: "Last Name 3",
//   },
// ];
// names = [object, object, object]
//          0,1,2

// let names = [
//   {
//     firstName: "Name 1",
//     lastName: "Last name 1",
//   },
//   {
//     firstName: "Name 2",
//     lastName: "Last name 2",
//   },
//   {
//     firstName: "Name 3",
//     lastName: "Last name 3",
//   },
// ]; //array
// let names2 = {}; //object

// console.log(typeof names);

// let mappedList = names.map((name) => name.firstName);

// let item = names[0].firstName;
// counts the total number of items
// check each value one by one
// we need to identify each single value

// [ "Name 1", "Name 2", "Name 3" ]

// console.log(item);

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

// let firstNames = characters.map((char) => char.name.split(" ")[0]);
// console.log(firstNames);
// let ch = characters[0].name.split(" ")[0];

// console.log(ch);

// let lorem =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde atque laboriosam illum nesciunt alias. Eveniet qui quas, ad veritatis quam temporibus veniam doloremque dignissimos? Reprehenderit dolorem laborum consectetur odio unde.";

// console.log(lorem.split("."));

// let arrOfObject = characters.map((char) => {
//   let obj = {};
//   obj["name"] = char.name;
//   obj["gender"] = char.gender;
//   // obj = {
//   //     name: "Luke Skywalker",
//   //     gender: "male"
//   // }
//   return obj;
// });

// console.log(arrOfObject);

// arrOfObject = [
//   {
//     name: "Luke Skywalker",
//     gender: "male",
//   },
//   undefined,
//   undefined,
//   undefined,
// ];

let n = 1;
console.log(typeof n.toString());
