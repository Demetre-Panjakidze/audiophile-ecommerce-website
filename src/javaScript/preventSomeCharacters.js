const zipNum = document.getElementById("zip");
const eMoneyNum = document.getElementById("eMoneyNum");
const eMoneyPIN = document.getElementById("eMoneyPIN");
const invalidChars = ["-", "+", "e"];

[zipNum, eMoneyNum, eMoneyPIN].forEach((x) => {
  x.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
});

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function (event) {
  this.value = this.value.replace(/[^0-9+-\s]/g, "");
});

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const card_info_div = document.getElementsByClassName("card-info")[0];
const card_info = document.getElementsByClassName("information")[0];
const choice1 = document.getElementsByClassName("choice")[0];
const choice2 = document.getElementsByClassName("choice")[1];
// const beforeLabel1 = choice1.querySelector(':before');
// const beforeLabel2 = choice2.querySelector(':before');

choice1.addEventListener("click", () => {
  choice1.style.border = "1px solid #d87d4a";
  choice2.style.border = "1px solid #CFCFCF";
  card_info_div.style.display = "block";
  card_info.style.display = "none";
  console.log(beforeLabel1);
  // beforeLabel1.style.background = "#D87D4A"
  // beforeLabel2.style.background = "#CFCFCF"
});

choice2.addEventListener("click", () => {
  choice1.style.border = "1px solid #CFCFCF";
  choice2.style.border = "1px solid #d87d4a";
  card_info_div.style.display = "none";
  card_info.style.display = "flex";
  // beforeLabel1.style.background = "#CFCFCF"
  // beforeLabel2.style.background = "#D87D4A"
  
});

