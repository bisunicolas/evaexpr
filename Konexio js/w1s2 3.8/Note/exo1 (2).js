function handleClick(event) {
  alert("You have clicked the button !");
  // TODO: Créer une fonction qui prévient l'utilisateur à chaque clic sur le bouton.
}

function handleKeyDown(event) {
  
  console.log(event.key);
  // TODO: Créer une fonction qui affiche dans la console chaque caractère tapé par l'utilisateur.
}

function handleMouseOver(event) {
  document.getElementById("square").className = "red";
  // TODO: Créer une fonction qui change la couleur du div carré en rouge quand la souris est sur le bouton.
}

function handleMouseOut(event) {
  document.getElementById("square").className = "blue";
  // TODO: Créer une fonction qui change la couleur du div carré en bleu quand la souris n'est pas sur le bouton.
}
