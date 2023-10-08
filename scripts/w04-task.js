/* LESSON 3 - Programming Tasks */

/* Profile Object  */

/* Populate Profile Object with placesLive objects */

let myProfile = {
  name: "Cesar",
  photo: "./images/profile.jpeg",
  favoriteFoods: ["shrimp", "broccoli", "hamburger"],
  hobbies: ["play Guitar", "Write Code", "Watch Series"],
  placesLived: [],
};

myProfile.placesLived.push({
  place: "Caracas",
  lenght: "22 years",
});

myProfile.placesLived.push({
  place: "Lima",
  lenght: "7 Months",
});

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;
/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let listItem = document.createElement("li");
  listItem.textContent = food;
  document.getElementById("favorite-foods").appendChild(listItem);
});

/* Hobbies List */

myProfile.hobbies.forEach((hobbie) => {
  let listItem = document.createElement("li");
  listItem.textContent = hobbie;
  document.getElementById("hobbies").appendChild(listItem);
});

/* Places Lived DataList */
let placesLived = document.getElementById("places-lived");
myProfile["placesLived"].forEach((object) => {
  let dtElement = document.createElement("dt");
  let ddElement = document.createElement("dd");
  dtElement.textContent = object["place"];
  ddElement.textContent = object["lenght"];
  placesLived.append(dtElement);
  placesLived.append(ddElement);
});
