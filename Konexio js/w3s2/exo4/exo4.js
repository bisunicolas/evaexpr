// TODO: Afficher des alertes pour saluer chaque apprenant.
function saluer() {
  // A l'interieur de la fonction:  document.getElementById('alert').innerHTML = 'text';
  // Initialiser une variable avec la liste des prenoms des apprenants
  var table = ['Dara', 'Grizlane', 'Idriss', 'Corentin', 'Claire', 'Etienne'];

  // Ecrire la boucle for qui va afficher une alerte pour chaque apprenant et dire "Salut " suivi du prenom de l'apprenant.
  var text = "";
  for (i = 0; i < table.length; i++) {
    text += '<li>' + 'Bonjour, mon cher apprenant ' + table[i] + '!' + '</li>';
  }
console.log(text);
document.getElementById('alert').innerHTML = text;
}


