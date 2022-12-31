// selecting button5
const generateBtn = document.querySelector("#generate");

const resetBtn = document.querySelector("#reset");

// for verification of presence of input value
let myInput1 = document.getElementById("Fname");
let myInput2 = document.getElementById("Lname");

myInput2.addEventListener("change", stateHandle);

function stateHandle() {
  if (myInput1.value === "" || myInput2.value === "") {
    generateBtn.disabled = true;
    resetBtn.disabled = true;
  } else {
    generateBtn.disabled = false;
    resetBtn.disabled = false;
  }
}

// for reset button

resetBtn.addEventListener("click", () => {
  {
    document.getElementById("myForm").reset();
    generateBtn.disabled = true;
    resetBtn.disabled = true;
    document.querySelector("p").innerHTML = "";
    document.querySelector("img").src =
      "https://c.tenor.com/Gj7mlQDKYqAAAAAC/white-cat-grey-cat.gif";
  }
});
