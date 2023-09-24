/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Cesar Grados";
const currentYear = new Date().getFullYear();
const profilePicture = "images/profile.jpeg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile Image Of ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ["Pizza", "Pasta", "Broccoli"];
foodElement.textContent = favoriteFoods;

let singleFood = "Cheese Burger";
favoriteFoods.push(singleFood);
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;
