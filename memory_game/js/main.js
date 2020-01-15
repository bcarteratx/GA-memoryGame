/**
* Memory Game
*
* Starting with an array of four unique cards,
* the cards get placed face down on the game board,
* The user clicks on a card to reveal the face image.
* After two cards get flipped, they are checked for a matching rank,
* returning a message depending on true/false match condition.
* The reset button shuffles and deals a set of cards in different order.
*
* @author BrandonCarter & GA
*/

//Card array
const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

//Fisher-Yates shuffle. (activated with reset button)
function shuffle(cards) {
	let counter = cards.length;
	while (counter > 0) {
		let index = Math.floor(Math.random() * counter);
		counter --;
		let temp = cards[counter];
		cards[counter] = cards[index];
		cards[index] = temp;
	}
	return cards;
}

//Check for matching card rank. (called in flipCard function)
function checkForMatch(cardId) {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
	  	alert("You found a match!");
		} else {
	  		alert("Sorry, try again.");
		};
	};
};

//Stores flipped card data, then runs checkForMatch function.
function flipCard() {
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	setTimeout(checkForMatch, 150);
};

//Populates cards into game-board. Runs flipCard when card gets clicked.
function createBoard() {
	for (let i = 0; i < cards.length; i ++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
   		document.getElementById('game-board').appendChild(cardElement);  
	}
};

//Shuffles then rebuilds game-board when reset button clicked.
const resetButton = document.getElementById('reset');
		resetButton.addEventListener("click", function() {
			shuffle(cards);
			var playedCards = document.getElementById("game-board").children
			for (var i = 0; i < playedCards.length; i++) { 
			playedCards[i].setAttribute("src", "images/back.png");
			cardsInPlay = [];
		}
	});

createBoard();


