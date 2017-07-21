var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}
var flipCard = function(cards[0], cards[2]) {
console.log('User flipped' + cards[0]);
cardsInPlay.push(cards[0]);
flipCard();
flipCard(2);
checkForMatch();
  /*var cardOne = cards[0];
  cardsInPlay.push(cardOne);
  console.log('User flipped' + cardOne);

  var cardTwo = cards[2];
  cardsInPlay.push(cardTwo);
  console.log('User flipped' + cardTwo);*/

  // come back and fix these codes
  if (cardsInPlay.length === 2) {
    (cardOne[0] === cardOne[1])
    alert('You found a match!');
  }  else (cardOne[0] !== cardTwo[2]) {
      alert('Sorry, try again.');
  }

};
