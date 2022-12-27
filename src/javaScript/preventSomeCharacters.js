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

input1.addEventListener("click", () => {
  label1.style.border = "1px solid #d87d4a";
  label2.style.border = "1px solid #CFCFCF";
  card_info_div.style.display = "block";
  card_info.style.display = "none";
});

input2.addEventListener("click", () => {
  label1.style.border = "1px solid #CFCFCF";
  label2.style.border = "1px solid #d87d4a";
  card_info_div.style.display = "none";
  card_info.style.display = "flex";
});

if(input2.checked) {
  label1.style.border = "1px solid #CFCFCF";
  label2.style.border = "1px solid #d87d4a";
  card_info_div.style.display = "none";
  card_info.style.display = "flex";
}