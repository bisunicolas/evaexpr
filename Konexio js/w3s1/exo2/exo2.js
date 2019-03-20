// TODO: Écrire la fonction "chercherEquipe" qui va chercher si une équipe est parmi les demi-finalistes de la coupe du monde 2018

// A l'interieur de la fonction:
// Initialiser un tableau de 4 equipes: "France", "Angleterre", "Belgique", "Croatie"

// Recuperer la valeur entrée en input dans la champ "equipe" avec getElementById

// Stocker dans une variable le nombre d'elements dans le tableau avec la propriete length

// Ecrire la boucle for qui va regarder si la valeur entrée en input est egale a 
//un des elements du tableau
// Afficher "Demi-finaliste" si cette equipe est trouvée ou "Non trouve" sinon, en utilisant getElementById
// pour injecter le contenu de le resultat dans la balise <p id="chercher-resultat">
// Arreter de chercher si cette valeur est trouvée au cours du parcours du tableau.
function chercherEquipe() {
  var table = ["France", "Angleterre", "Belgique", "Croatie"];
  var team = document.getElementById('equipe').value;
  i = 0;
  while (i < table.length) {
    if (team === table[i]) {
      var message = '';
      message = team + ' est dans les premiers 4 groupes!';
      document.getElementById('chercher-resultat').innerHTML = message;
      break;
    }
    else { i++; }
  }
  if (team !== table[i])
  document.getElementById('chercher-resultat').innerHTML = 'Desole, cette equipe a ete eliminee.'
}
