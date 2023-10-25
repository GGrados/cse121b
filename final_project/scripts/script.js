const resumePreview = document.querySelector("#resume-preview"); //main Container
const pdfButton = document.querySelector("#pdf");

const createResume = () => {
  const education = document.querySelector("#education");
  const workExperience = document.querySelector("#work-experience");
  const personalInfoFieldsset = document.querySelector("#personal-information");

  getData(personalInfoFieldsset);
  getData(education);
  getData(workExperience);

  pdfButton.style.display = "block";
};

const getData = (htmlFieldsetTag) => {
  const fieldsetChildrens = htmlFieldsetTag.children;

  const inputs = Array.from(fieldsetChildrens)
    .filter(
      (element) =>
        element.textContent !== "Personal Information" ||
        element.textContent !== "Education" ||
        element.textContent !== "Work Experience"
    )
    .reduce((result, element) => {
      const inputElement = element.firstElementChild;
      if (inputElement) {
        result[inputElement.id] = inputElement.value;
      }
      return result;
    }, {});

  console.log(inputs);
  displaySection(inputs);
};

function displaySection(inputData) {
  const resumeContainer = document.querySelector("#resume-container");

  for (const data in inputData) {
    const text = document.createElement("p");
    text.innerText = inputData[data];
    text.setAttribute("id", data);
    resumeContainer.appendChild(text);
  }

  const hr = document.createElement("hr");
  resumeContainer.appendChild(hr);
}

document.querySelector("#submitBtn").addEventListener("click", createResume);

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});

/*PDF*/
// Configure the PDF options

const resume = document.querySelector("#resume-container");

async function getpdfConfig() {
  const url =
    "https://ggrados.github.io/cse121b/final_project/data/pdfConfig.json";
  const data = await fetch(url);
  const jsonData = await data.json();
  return jsonData;
}

const pdfConfigs = getpdfConfig();

function createPdf() {
  html2pdf().from(resume).set(pdfConfigs).save();
}

pdfButton.addEventListener("click", createPdf);
