// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

// for (let i = 0; i <= 10; i += 1) {
//     console.log(i)
// }

// const friends = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]

// console.table(friends);

// for (let friend of friends) {
//     console.log(friend)
// }

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"]
// };

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
  
// };
// apartment.price = 5000;
//   apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push("trusted")
// // Change code below this line

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60
// apartment.rooms = 3
// apartment.location = {
//   country = "Jamaica",
//   city = "Kingston",



// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook (oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza("Your pizza is being prepared, please wait.");
// const pointer = makePizza;
// console.log(result)
// console.log(pointer)

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName, callback);
// }


// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);

// }
// // const add = function (a, b) {
// //   return a + b;

// // }

// // const sub = function (a, b) {
// //   return a - b;

// // }
// doMath(2, 3, function (a, b) {
//   return a + b;

// })
// doMath(168,323,sub = function (a, b) {
//   return a - b;

// })


// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName){
//   console.log(`Eating pizza ${pizzaName}.`);
// });



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort("");

// const sortedByReversedAuthorName = [...books].sort("");

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating  );

// Change code below this line
// const sortByDescendingFriendCount = users => {
//    return users.sort((firstUser, secondUser) => secondUser.friends - firstUser.friends )
// };
// Change code above this line


// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = 'Welcome';
// const isOpen = true;
// const shouldConfirm = false;

// const message = 'Хотите продлить подписку?'
// const shouldConfirm = confirm(message)

// console.log(shouldConfirm)

// let quantity = prompt('Введите кол-во товара')
// quantity = Number(quantity)
// console.log(quantity)
// console.log(typeof quantity)

// let elemetWidth = '50px'
// elemetWidth = Number.parseInt(elemetWidth)

// console.log('elementWidth:', elemetWidth)

// let elemetHeight = '200.74px'
// elemetHeight = Number.parseFloat(elemetHeight)
// console.log(elemetHeight)

// let salary = 300.21458
// salary = salary.toFixed(4)
// salary = Number(salary)
// console.log(salary)


const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = (pricePerDroid*orderedQuantity) + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

console.log(message)

function sayHi(){
    console.log("Hello, this is my first function!")
}
sayHi()

// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a+b+c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);


// function add(a, b, c) {
//   // Change code below this line

// return a+b+c

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};
