console.log("Up and Running! Oh Yeah!");

const cards = ["Queen", "Queen", "King", "King"];
const cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[2]) {
      alert("You found a match! Congrats!");
    } else {
      alert("Sorry, try again!");
    }
}
