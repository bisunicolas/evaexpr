var random = Math.random(0, 1) * 100;
var price = Math.floor(random);
console.log('l\'utilisateur doit trouver', price);
var prices = [];
var messages = [];
function logPrice(value) {
  console.log('l\'utilisateur a saisi', value);
}
function submitAnswer() {
  var value = parseInt(document.getElementById('price').value);
  //console.log('value ', value);

  if (value > 0 && price > 0) {
    if (value === price) {
      message = ' Bravo! Vous avez trouvé le bon chiffre !';
    }
    if (value !== price && value > price) {
      message = ' n\'est pas bon, il est supérieur du bon chiffre.';
    }
    if (value !== price && value < price) {
      message = ' n\'est pas bon, il est inférieur du bon chiffre.';
    }
  }
  else {
    message = 'Don\'t kiding.';
  }
  messages.push(message);

  prices.push(value);
  var textHTML = "";
  for (i = 0; i <= prices.length - 1; i++) {
    textHTML = textHTML + "<li>" + prices[i] + messages[i] + "</li>";
  }
  //Ici, on veut modifier balise prices
  document.getElementById("prices").innerHTML = textHTML;
  // BONUS:
  // Ajouter les prix saisis par l'utilisateur pour pouvoir les afficher en dessous
  // afin qu'il sache quels prix il a déjà essayé

  // prices[0].innerHTML;
  //prices[1];


}
