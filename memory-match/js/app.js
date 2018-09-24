$(() => {
//===============================
// STORE CARDS & PUSH INTO ARRAY
//===============================
//create an array to store all back image possibilities
const cards = [
  { name: '000', img: 'images/000.jpg' },
  { name: '000', img: 'images/000.jpg' },
  { name: '001', img: 'images/001.jpg' },
  { name: '001', img: 'images/001.jpg' },
  { name: '010', img: 'images/010.jpg' },
  { name: '010', img: 'images/010.jpg' },
  { name: '011', img: 'images/011.jpg' },
  { name: '011', img: 'images/011.jpg' },
  { name: '100', img: 'images/100.jpg' },
  { name: '100', img: 'images/100.jpg' },
  { name: '101', img: 'images/101.jpg' },
  { name: '101', img: 'images/101.jpg' },
  { name: '110', img: 'images/110.jpg' },
  { name: '110', img: 'images/110.jpg' },
  { name: '111', img: 'images/111.jpg' },
  { name: '111', img: 'images/111.jpg' },
];

  //multiply number of cards in array by 2???
    //FOR NOW, simply add a copy of each card to test randomization

//create an array to store flipped cards (to check for match)
const cardsFlipped = [];

//for testing, create a variable to represent object1 in the cards array
let cardOne = (cards[0]);

//push first card into cardsFlipped array:
cardsFlipped.push('cardOne');
// console.log('Card one flipped');

//for testing, create a variable to represent object2 in the cards array + push it to cardsFlipped array
let cardTwo = (cards[1]);
cardsFlipped.push('cardTwo');
// console.log('Card two flipped');

//===============================
//         FLIP 2 CARDS
//===============================

//create a function to flip card to view back
const $flipCard = () => {
  //function initiates on click
  //function allows only one click per card (no returning card to initial state)
  $('.card').one('click', (function() {
    //card rotates -180 degrees
    $(this).toggleClass('rotated');
  }));
  const countFlips() {
    if($flipCard.length > 2) {
      return false;
    } else if ($flipCard.length === 2) {
      checkPair();
    }
  }
}

//call the function
$flipCard();


//==============================
//      CHECK FOR A MATCH
//==============================

//create a function to check if pair of flipped cards matches
const checkPair = () => {
  //call $flipCard() function to ensure cards have been flipped
  $flipCard();
    //check that 2 cards, and only 2 cards, have been flipped
    if(cardsFlipped.length === 2) {
      //check for a match
      if(cardsFlipped[0] === cardsFlipped[1]) {
        //ULTIMATELY...call match() function
            //add animation

            //remove event listener on 2 matched cards???

        //FOR NOW...placeholder alert
        alert('Match!!!');
      } else {
        //ULTIMATELY...call noMatch() function
          //add animation - shake/vibrate

          //return cards to initial state through reverseFlip() function

        //FOR NOW...placeholder alert
        alert('No match!');
      }
    }
}
//
//===============================
//        MATCH & NOMATCH
//===============================


//===============================
//       WIN & LOSS STATES
//===============================



//===============================
//          GRID RESET
//===============================


// //create a function to randomize placement of cards on grid
//     //use either Math.random OR shuffle array of possible cards?
//     //container = grid or cards = grid?
//     // yourArray.sort(function() { return 0.5 - Math.random() });
// cards.sort(function() {return 0.5 - Math.random() });
//     // cardArray.sort(() => 0.5 - Math.random());
//
// //create a function that defines a 'turn'
//     //define flip/clickOne and flip/clickTwo ($flipToBack = one click)
//     //create a function to limit player to two flips/clicks per turn
//
// //create a function -- checkPair -- to define a match
//     //if match:
//         //animation options: fade, darken, hide, replace img with color
//         //remove eventListener from matched cards
//     //if noMatch:
//         //animation: shake/vibrate previously flipped/clicked cards
//         //reverseFlip
//         //next turn

//create a function to limit number of clicks to 2
// const countFlips() {
//   if($flipCard.length > 2) {
//     return false;
//   } else if ($flipCard.length === 2) {
//     checkPair();
//   }
// }








//create a function to checkPair
  //within function, create an if/else statement
    //if images on cards match
        //have card images fade to black background
    //if there is no match
        //(created animated shake feature for both)
        //auto return flipped cards to original/front state
// const $checkPair = () => {
//   //if card front matches card back
//   if$('.card.back') === ('.card.back') {
//   // if($('card').css('background-image') === ($('card').css('background-image') {
//     //change background image to black, fade to black, darken gradient, hide img?
//     //remove eventListener from cards?
//       // $('card.back').style.backgroundImage = 'none';
//     $('.card').setAttr('class','background');
//     } else {
//     //do nothing
//   }
//  }
//
// const checkPair = () => {
//   if $('card.back') === $('card.back') {
//     $('card').css('background-color','black');
//   } else {
//   $('card').css('background','orange');
//   }
// }


//create a function to flip card to original state/front
  //function initiates only upon noMatch if/else statement
  //card rotates 180 degrees
  //limit function to one click
// const $flipToFront = () => {
//
// }





})

















//set card to flip back-to-front on click (card will turn 180deg)
// $('#card').click(function() {
//   $(this.toggleClass('reverseFlip')
// })


// displaycards
// let displayCards = function() {
//     this.classList.toggle('open');
//     this.classList.toggle('show');
//     this.classList.toggle('disabled');
//
// //push cardArray values to grid
// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener('click',displayCard);
// };
// }


// =====================================

// $('.card').click(function() {
// $(this).toggleClass('flipToBack');
// });
//once flipCard is executed
  //stop TURn = check for pair


//=======================================
// $('#card').click(function() {
//   $(this).toggleClass('flipToFront');
// });

//create a function to flip the card 180deg from front
// const $flipCardFront = $() => {
//   const $imgFront = $(e.currentTarget).one('click').addClass('transform');
// }

//create a function to flip the card/img 180deg from back to front, returning it to initial state
// const flipCardBack = $(e.currentTarget).one('click').addClass('transform');


//
// const $img = $('img');
//   $img.one('click').addClass('transform');

//TURN is defined as the steps + a max of two clicks (.two clicks?)
// on click, 1st img has to be assigned a class of transform so it rotates 180deg
    ///.one click?
//next a 2nd card should be clicked, rotated 180deg
    //.one click?
//checkPair
  // const match === true if 2cards with 2identicalimages are clicked
    //if match, (shake?) + fade to black
  //else, const noMatch
    //if noMatch - flip 1st img and 2nd image over (rotateY180deg?)

//begin turn again -- loop this way until:
    //all cards have been matched OR
    //timer runs out
