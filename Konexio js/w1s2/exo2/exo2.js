function add() {
  var firstInput = document.getElementById("left-op-add");
  var secondInput = document.getElementById("right-op-add");
  var firstInputValue = firstInput.value;
  var secondInputValue = secondInput.value;
  var result = parseInt(firstInputValue) + parseInt(secondInputValue);
  // TODO: Créer une fonction pour gérer l'addition de la calculatrice.
  displayResult("add-result", result);
}

function subtract() {
  var subfirstInput = document.getElementById("left-op-sub");
  var subsecondInput = document.getElementById("right-op-sub");
  var subfirstInputValue = subfirstInput.value;
  var subsecondInputValue = subsecondInput.value;
  var result = parseInt(subfirstInputValue) - parseInt(subsecondInputValue);
  // TODO: Créer une fonction pour gérer la soustraction de la calculatrice.
  displayResult("sub-result", result);
}

function multiply() {  var mulInput = document.getElementById("left-op-mul");
var mulsecondInput = document.getElementById("right-op-mul");
var mulInputValue = mulInput.value;
var mulsecondInputValue = mulsecondInput.value;
var result = parseInt(mulInputValue) * parseInt(mulsecondInputValue);
displayResult("mul-result", result);
  // TODO: Créer une fonction pour gérer la multiplication de la calculatrice.
}

function divide() {
  var divfirstInput = document.getElementById("left-op-div");
var divsecondInput = document.getElementById("right-op-div");
var divfirstInputValue = divfirstInput.value;
var divsecondInputValue = divsecondInput.value;
var result = parseInt(divfirstInputValue) / parseInt(divsecondInputValue);
displayResult("div-result", result);
  // TODO: Créer une fonction pour gérer la division de la calculatrice.
}

function displayResult(elementId, result) {
  var show = document.getElementById(elementId); //good way to stock the elementId item
  show.innerHTML = result;
  // TODO: Créer une fonction pour afficher le résultat d'une opération de la calculatrice.
  // "elementId" est l'attribut "id" de l'élément où le résultat devra être affiché.
  // "result" est le résultat à afficher dans l'élément identifié par "elementId".
}
