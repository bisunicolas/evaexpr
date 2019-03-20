// TODO: Écrire la fonction "calculerSomme" qui va calculer la somme des nombres d’un tableau
function calculerSomme() {
  // A l'interieur de la fonction:
  // Initialiser un tableau de 4 nombres
  var table = [55, 23, 42, 88];

  // Initialiser une variable, compteur d'indice de tableau a 0.
  var i = 0;
  var resultat = 0;
  // Initialiser une variable avec la somme des nombres a 0.
  // Ecrire la boucle while qui va faire la somme des nombres dans le tableau
  // et additionner les nombres dans la variable precedemment initialisee a 0.
  // En utilisant getElementById, injecter le contenu de la somme dans la balise <p id="somme-resultat">
  while (i<table.length) {
    resultat += table[i];
    i++;
  }
  document.getElementById('somme-resultat').innerHTML = resultat;
}


