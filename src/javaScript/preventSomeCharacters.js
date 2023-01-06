const zipNum = document.getElementById("zip");
const eMoneyNum = document.getElementById("eMoneyNum");
const eMoneyPIN = document.getElementById("eMoneyPIN");
const phoneInput = document.getElementById("phone");
const invalidChars = ["-", "+", "e"];

// zip number, e-money number, e-money pin
[zipNum, eMoneyNum, eMoneyPIN].forEach((x) => {
  x.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
});

// phone number
phoneInput.addEventListener("input", function (event) {
  this.value = this.value.replace(/[^0-9+-\s]/g, "");
});

//---------------------------------------------------------------------------------------------------------------------------

const input1 = document.getElementById("input1"); // e-money input 1
const input2 = document.getElementById("input2"); // e-money input 2
const label1 = document.getElementById("label1"); // e-money label 1
const label2 = document.getElementById("label2"); // e-money label 2
const choice1 = document.getElementsByClassName("choice")[0]; // the first choice
const choice2 = document.getElementsByClassName("choice")[1]; // the second choice
const card_info_div = document.getElementsByClassName("card-info")[0]; // div from the first choice (choice1)
const card_info = document.getElementsByClassName("information")[0]; // div from the second choice (choice2)

choice1.addEventListener("click", () => {
  choice1.style.border = "1px solid #d87d4a";
  choice2.style.border = "1px solid #CFCFCF";
  card_info_div.style.display = "block";
  card_info.style.display = "none";
});

choice2.addEventListener("click", () => {
  choice1.style.border = "1px solid #CFCFCF";
  choice2.style.border = "1px solid #d87d4a";
  card_info_div.style.display = "none";
  card_info.style.display = "flex";
});

//-------------------------------------------------------------------------------------------------------------------

const inputs = document.querySelectorAll(".input"); // divs with label and input inside

inputs.forEach((x) => {
  x.addEventListener("input", () => {
    const firstChildOfX = x.firstElementChild; // <label>...</label>
    const lastChildOfX = x.lastElementChild; // <input>
    const message = firstChildOfX.firstElementChild; // "Field cannot be empty" message inside of the label

    document.addEventListener("click", function (event) {
      if (!x.contains(event.target)) {
        if (lastChildOfX.value == "") {
          firstChildOfX.style.color = "#cd2c2c";
          lastChildOfX.style.border = "2px solid #cd2c2c";
          message.style.display = "block";
        }

        if (lastChildOfX.value !== "") {
          firstChildOfX.style.color = "#000";
          lastChildOfX.style.border = "2px solid #CFCFCF";
          message.style.display = "none";
        }
      }
    });
  });
});

//-------------------------------------------------------------------------------------------------------------------

const mailDiv = document.getElementsByClassName("input-2")[0];
const mailLabel = mailDiv.firstElementChild; // <label>...</label>
const badMessage = mailLabel.firstElementChild; // "Field cannot be empty" message inside of the label
const mailInput = mailDiv.lastElementChild; // <input>

mailDiv.addEventListener("input", () => {
  document.addEventListener("click", function (event) {
    if (!mailDiv.contains(event.target)) {
      badMessage.textContent = "Field cannot be empty";

      if (!mailInput.checkValidity()) {
        badMessage.textContent = "Wrong format";
        mailLabel.style.color = "#cd2c2c";
        mailInput.style.border = "2px solid #cd2c2c";
        badMessage.style.display = "block";
      }
    }
  });
});

//-------------------------------------------------------------------------------------------------------------------

const form = document.getElementsByClassName("form")[0];
const inputFields = form.querySelectorAll("input");
const submit = document.getElementsByClassName("submit-button")[0];

function checkInputFields() {
  let isValid = true;

  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value.trim() === "") {
      isValid = false;
      break;
    }
  }

  submit.disabled = !isValid;
}

function checkInputFieldsMini() {
  let isValid = true;

  for (let i = 0; i < inputFields.length; i++) {
    if (i !== 8 && i !== 9 && inputFields[i].value.trim() === '') {
      isValid = false;
      break;
    }
  }

  submit.disabled = !isValid;
}

checkInputFields();

if (card_info_div.style.display === "none") {
  checkInputFieldsMini();
}

form.addEventListener('input', checkInputFields);