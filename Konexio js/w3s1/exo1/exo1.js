// TODO: Écrire la fonction "afficherListeTriee" qui va afficher une liste des 
//demi-finalistes de la coupe du monde 2018 triee par ordre alphabetique
function afficherListeTriee() {
    var table = ["France", "Angleterre", "Belgique", "Croatie"];
    var text = '<li>';
    for (i = 0; i < table.length; i++) {

        text += table[i] + '; ';
    }
    text += '</li>';
    document.getElementById('liste').innerHTML = 'Tableau initial' + text;
    var nbelement = table.length;
    table.sort();
    var text = '<li>';
    for (i = 0; i < nbelement; i++) {

        text += table[i] + '; ';
    }
    text += '</li>';
    document.getElementById('liste2').innerHTML = 'After sort' + text;

}
