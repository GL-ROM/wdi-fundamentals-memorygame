console.log("Up and Running! Oh Yeah!");

const cards = ["Queen", "Queen", "King", "King"];
const cardsInPlay = [];

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match! Congrats!");
    } else {
      alert("Sorry, try again!");
    }
}

function flipCard(cardId){
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2) {
  checkForMatch();
  }
}

flipCard(0);
flipCard(2);
