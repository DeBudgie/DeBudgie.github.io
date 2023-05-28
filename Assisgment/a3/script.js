/*Find text*/
function findText(e) {
  if (dwindow.getSelection) {
    var selectedText = window.getSelection().toString();
    showText.innerHTML = selectedText;
  }
  else if (document.selection) {
    sourceText.length = "0"
    document.selection.createRange().text;
  }
}

function newElement() {
  let newElement = document.createElement("p");
  p.innerHTML = "selected text"; 
  newP.appendChild(newText);
  const currentDiv = document.getElementById("showText");
  document.body.insertBefore(newP, currentDiv);
}

/*Reload page*/
function refreshPage(){
  window.location.reload();
} 




/*modal - Code from worksheet*/
let modal = document.getElementById("modalDialog");

let showModalButton = document.getElementById("showModal");

showModalButton.addEventListener("click", () => {
  modal.showModal();
});
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});

/*Random - Code from worksheet*/
let randBFour = document.getElementById("randomButtonFour");
let randEFour = document.getElementById("randomExplanationFour");

randBFour.addEventListener("click", () => {
  randEFour.textContent = nameArray[getRandomIntRange(0, 9)];
});

let nameArray = [
  "principe",
  "hyperdub",
  "allergy season",
  "diasart",
  "spectrum spools",
  "orange milk",
  "powertrip",
  "presto!?",
  "pan",
  "naafi"
];

let usedNameArray = [];

function displayArray(){
  shuffleArray(nameArray);
  listP1.innerHTML = nameArray;
  listP1.innerHTML = nameArray.shift();
  let newName = nameArray.shift();
  listP1.innerHTML = newName;
  usedNameArray.push(newName);
  if(nameArray.length > 0){
    let newName = nameArray.shift();
    randEFour.textContent = newName;
    usedNameArray.push(newName);
  } else {
    nameArray = usedNameArray;
    usedNameArray = [];
    let newName = nameArray.shift();
    randEFour.textContent = newName;
    usedNameArray.push(newName);
  }
  console.log(nameArray);
  console.log(usedNameArray);
}

// shuffle array order
function shuffleArray(array){
  array.sort(() => Math.random() - 0.5);
}

