const users = [
  { firstName: "User1", lastName: "LastName1" }, //user 0
  { firstName: "User2", lastName: "LastName2" }, //user 1
  { firstName: "User3", lastName: "LastName3" }, //user 2
  { firstName: "User4", lastName: "LastName4" }, //user 3
  { firstName: "User5", lastName: "LastName5" }, //user 4
  { firstName: "User6", lastName: "LastName6" }, //user 5
];

users.forEach((user, i) => {
  console.log(user, i);
});
