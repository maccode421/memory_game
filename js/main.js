var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardOne = [0];
cardsInPlay.push('cardOne');
console.log('User flipped queen')

var cardTwo = [2];
cardsInPlay.push('cardTwo');
console.log('User flipped king')
// Code to be executed if condition1 is true
// come back and fix these
if (cardsInPlay.length === 2) {
  alert('You found a match!');
}  else if (cardsInPlay[0] === cardsInPlay[2]) {
    alert('You found a match!');
}  else (cardsInPlay[0] !== cardsInPlay[2]) {
    alert('Sorry, try again.');
}
