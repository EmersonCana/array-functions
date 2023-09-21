const items = [
  { name: "item1", price: 59.99 },
  { name: "item2", price: 39.99 },
  { name: "item3", price: 29.99 },
  { name: "item4", price: 65.99 },
  { name: "item5", price: 15.99 },
  { name: "item6", price: 89.99 },
];

// const maxPrice = 40;

// const list = items.filter((item) => item.price <= maxPrice);

// console.log(filteredItems);

// Reference only
let productList = document.getElementById("productList");
let ul = document.createElement("ul");
productList.appendChild(ul);

// reference to ul
let child = productList.children[0];

items.forEach((item) => {
  child.innerHTML +=
    "<li>Name: " + item.name + " Price: " + item.price + "</li>";
});

function filterList() {
  let budget = document.getElementById("budget").value;
  let filteredList = items.filter((item) => item.price <= budget);

  //   filteredList = [{ name: "item2", price: 39.99 },{ name: "item3", price: 29.99 },{ name: "item5", price: 15.99 }]

  child.innerHTML = "";
  filteredList.forEach((item) => {
    child.innerHTML +=
      "<li>Name: " + item.name + " Price: " + item.price + "</li>";
  });
}
