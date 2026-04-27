
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
// select all the descriptions on the page
const descriptions = document.querySelectorAll(".description-display");

// for (let desc of descriptions.values()) {
//   let content = desc.innerText;
//   console.log(content);
// }

// for (let desc of descriptions.values()) {
//   let content = desc.innerText;
//   if (content.length > 250){
//     content = content.slice(0, 250);
//     content = content + '....';
//   }
//   console.log(content);
// }

// for (let desc of descriptions.values()) {
//   let content = desc.innerText;
//   if (content.length > 250){
//     content = content.slice(0, 250);
//     content = content + '....';
//   }
//   desc.innerText = content;
// //   console.log(content);
// }
 

// for (let desc of descriptions.values()) {
//   let content = desc.innerText;
//   if (content.length > 250){
//     content = content.slice(0, 250);
//     content = content + '<a href="#">....</a>>'
//   }
//   desc.innerText = content;

// }

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}

// select all rating values
const ratings = document.querySelectorAll(".rating-display .value");
// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);
//   console.log(ratingValue);
// }

// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);

//   if (ratingValue > 4.7) {
//     rating.style.fontWeight = "bold";
//   }
// }

// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);

//   if (ratingValue > 4.7) {
//     rating.style.fontWeight = "bold";
//     rating.style.color = "#3ba17c";
//   }
// }


for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

// Select all parks
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;

// create a new element
const newElement = document.createElement("div");

// add the text
newElement.innerText = `${numberParks} exciting parks to visit`;

//add the class
newElement.classList.add("header-statement");

// insert the new element
const header = document.querySelector("header");
header.appendChild(newElement);

// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
// main.removeChild(park);

const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", () => {
  firstBtn.classList.toggle("favourite");
});
// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // console.log(event.target.parentNode);
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});
 
// // 1st method
// // Select the `nameSorter` link
// const nameSorter = document.querySelector("#name-sorter");

// // Add an event listener
// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();

//   // 1. Get the main element
//   const main = document.querySelector("main");

//   // 2. Get the list of parks
//   const parksList = main.querySelectorAll(".park-display");

//   // 3. Empty the main element
//   main.innerHTML = "";

//   // 4. Create an array
//   const parksArray = Array.from(parksList);

//   // 5. Sort the array
//   parksArray.sort((parkA, parkB) => {
//     const parkAName = parkA.querySelector("h2").innerText;
//     const parkBName = parkB.querySelector("h2").innerText;
//     if (parkAName < parkBName) {
//       return -1;
//     } else if (parkAName > parkBName) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   // 6. Insert each park into the DOM
//   parksArray.forEach((park) => {
//     main.appendChild(park);
//   });
// });

// 2nd Method:
// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler);

console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");