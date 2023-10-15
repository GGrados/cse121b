/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
const templesList = new Array();

/* async displayTemples Function */

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    const img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
  try {
    const response = await fetch(
      "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );
    templeList = await response.json();
    displayTemples(templeList);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const reset = function () {
  const articles = templesElement.querySelectorAll("article");
  for (const article of articles) {
    article.remove();
  }
};

/* sortBy Function */

const sortBy = function (temples) {
  // Call the reset function to clear the output
  reset();

  // Obtain the value of the HTML element with the ID of 'sortBy'
  const filterElement = document.getElementById("sortBy");
  const filter = filterElement.value;

  // Use a switch statement to handle the filter options
  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temp) => temp.location.includes("Utah")));
      break;
    case "nonutah":
      displayTemples(temples.filter((temp) => !temp.location.includes("Utah")));
      break;
    case "older":
      displayTemples(
        temples.filter(
          (temp) => new Date(temp.dedicated) < new Date(1950, 0, 1)
        )
      );
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      console.error("Invalid filter option");
  }
};

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

getTemples();
