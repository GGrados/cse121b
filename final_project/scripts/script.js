const resumePreview = document.querySelector("#resume-preview"); //main Container

const createResume = () => {
  const education = document.querySelector("#education");
  const workExperience = document.querySelector("#work-experience");
  const personalInfoFieldsset = document.querySelector("#personal-information");

  getData(personalInfoFieldsset);
  getData(education);
  getData(workExperience);
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
const options = {
  margin: 10,
  filename: "your-document.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
};

// Create the PDF
html2pdf()
  .from(element)
  .set(options)
  .outputPdf((pdf) => {
    // You can save, display, or do whatever you want with the generated PDF here
    // For example, to display it in a new window:
    pdf.output("dataurlnewwindow");
  });
