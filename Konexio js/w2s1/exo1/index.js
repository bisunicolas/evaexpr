/* Exercice 1 - Change la couleur de fond du body */

// Cette fonction est executée à chaque fois que l'utilisateur va changer
// la valeur de l'élément "select" dans le HTML, c'est à dire, à chaque fois
// qu'il va "changer" d'option... c'est pourquoi elle est liée à l'événement
// onChange
// dans le code HTML.
function selectChange() {

  // cette variable récupère la valeur de l'option sélectionnée.
  var divselect = document.getElementById('colors').value;

  // Cette ligne de code permet d'afficher le choix de l'utilisateur dans la 
  //console du navigateur.
  if (divselect === 'bleu') { 
    document.body.style.backgroundColor = 'blue';
  }
  else if (divselect === 'vert') {  
    document.body.style.backgroundColor = 'green';
  }
  else if (divselect === 'rouge') { 
    document.body.style.backgroundColor = 'red';
  }

  
  // ou if if if; Instructions:
  // Écrire le code pour changer la couleur de fond du body en fonction de
  // la valeur qu'a choisi l'utilisateur, en utilisant des conditions (if)

  // Pour changer la couleur de fond du body, il faut utiliser le code ci-dessous:
  // document.body.style.backgroundColor = '...';


  /* MON CODE EN DESSSOUS */

  /* MON CODE AU DESSUS */

};
