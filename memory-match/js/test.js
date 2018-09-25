$(() => {

ISSUES AS OF T, 9/25:
    Randomize card placement in section/grid

    Re-assign .one(click) to previously flipped cards so they can be flipped again
        update: changed one click to on click
        NOW NEED TO STOP CLICKS AFTER MATCH:
        WORKS FOR FIRST CARD, not second:
          $('.card').off('click');

    Ensure only two cards can be clicked at a time:
      * setTimeout on noMatch() ???
      * create a function for on click -- include in checkPair?
      
    Code loss state

//ADD ONs:
    //background images
    //loss modal with system failure image + reset prompt/button
    //digital rain wallpaper
    //timer
    //reset button
    //(brain/health/damage counter)
    //add darkening overlay onto matched cards


//===============================
// STORE CARDS & PUSH INTO ARRAY
//===============================

// const cards = () => {
//   for (let i = 0; i < 16; i++) {
//     let cards = document.createElement('div');
//     cards.className =
//   }
// }
//create an array to store all back image possibilities
const cards = [
  { name: '000', img: 'images/000.jpg', value: '000' },
  { name: '000', img: 'images/000.jpg', value: '000' },
  { name: '001', img: 'images/001.jpg', value: '001' },
  { name: '001', img: 'images/001.jpg', value: '001' },
  { name: '010', img: 'images/010.jpg', value: '010' },
  { name: '010', img: 'images/010.jpg', value: '010' },
  { name: '011', img: 'images/011.jpg', value: '011' },
  { name: '011', img: 'images/011.jpg', value: '011' },
  { name: '100', img: 'images/100.jpg', value: '100' },
  { name: '100', img: 'images/100.jpg', value: '100' },
  { name: '101', img: 'images/101.jpg', value: '101' },
  { name: '101', img: 'images/101.jpg', value: '101' },
  { name: '110', img: 'images/110.jpg', value: '110' },
  { name: '110', img: 'images/110.jpg', value: '110' },
  { name: '111', img: 'images/111.jpg', value: '111' },
  { name: '111', img: 'images/111.jpg', value: '111' },
];


// let cards = document.querySelectorAll(.cards);
//
//   for (let i=0; i < cards.length; i++) {
//     cards.style.backgroundImage = cards[i]
// }


//OR:
// cards.sort(function() {return 0.5 - Math.random() });


   //multiply number of cards in array by 2???
    //FOR NOW, simply add a copy of each card to test randomization
 //create an array to store flipped cards (to check for match)
let cardsFlipped = [];
//  //for testing, create a variable to represent object1 in the cards array
// let cardOne = (cards[0]);
//  //push first card into cardsFlipped array:
// cardsFlipped.push('cardOne');
// // console.log('Card one flipped');
//  //for testing, create a variable to represent object2 in the cards array + push it to cardsFlipped array
// let cardTwo = (cards[1]);
// cardsFlipped.push('cardTwo');
// console.log('Card two flipped');

//PUSH ALL CARDS INTO CARDS FLIPPED ARRAY!!!!

// $('.card').addEventListener('click', function (event) {
//   let clicked = event.target;
//
//   let count = 0;
//     if (count < 2) {
//       count++;
//       clicked.addClass('flipped');
//   }
// })
 //===============================
//         FLIP 2 CARDS
//===============================
 //create a function to randomize placement of cards on grid
  //use either Math.random OR shuffle array of possible cards?
//create a function to flip card to view back
// const flipCard = () => {

// $('.card').one('click', (function() => {
//   $target.toggleClass('rotated');
// })

  //function initiates on click
  //function allows only one click per card (no returning card to initial state)
// const onClick = () => {
//
// }
  $('.card').on('click', function (e) {
    let $target = $(e.currentTarget);
    let $img;
    let $parent = $target.parent().parent();
    if($target.is('img')) {
      $img = $target;
      cardsFlipped.push($img);
    }
    $target.toggleClass('rotated');
    checkPair();
  });

  // let addOneClick = () => {
  //
  // }

const matchedCards = [];

const checkPair = () => {
    //check that 2 cards, and only 2 cards, have been flipped
    if(cardsFlipped.length === 2) {
      //check for a match
      // console.log(cardsFlipped[0].attr('value'));
      // console.log(cardsFlipped[1].attr('value'));
      if(cardsFlipped[0].attr('value') === cardsFlipped[1].attr('value')) {
        // console.log(cardsFlipped);
        match();
        // offClick();
        matchedCards.push(cardsFlipped[0]);
        matchedCards.push(cardsFlipped[1]);

        checkForWin();
        //remove event addEventListener -- no need to remove, since .one click is there
        // cardsFlipped[0]
        cardsFlipped = [];

      } else {
        noMatch();
      }
    }
}


const match = () => {

  // window.setTimeout(function() {cardsFlipped[0].parent().parent().addClass('match') }, 1200);
  // window.setTimeout(function() {cardsFlipped[1].parent().parent().addClass('match') }, 1200);
  (cardsFlipped[0]).parent().parent().addClass('match');
  (cardsFlipped[1]).parent().parent().addClass('match');

// const offClick = () => {
//   window.setTimeout(function() {cardsFlipped[0].parent().parent().off('click') }, 1200);
//   window.setTimeout(function() {cardsFlipped[1].parent().parent().off('click') }, 1200);
//WORKS FOR FIRST CARD!!!!!
  // $('.card').off('click');
// }

// const offClick = () => {
//
// }

// WORKS FOR FIRST CARD
//   window.setTimeout(function() {cardsFlipped[0].parent().off('click') }, 1200);
//   window.setTimeout(function() {cardsFlipped[1].parent().off('click') }, 1200);

  // window.setTimeout(function() {cardsFlipped[0].parent().parent().off('click') }, 1200);
  // window.setTimeout(function() {cardsFlipped[1].parent().parent().off('click') }, 1200);
  // $(cardsFlipped[0]).parent().parent().addClass('match').off('click');
  // $(cardsFlipped[1]).parent().parent().addClass('match').off('click'));
}

const noMatch = () => {
  //STILL NEED:
    //RE-INITIATE oneclick on flipped cards run .one on each of cards in array or [0]/[1]
      //resolved with onclick
    //flip cards
    //empty array

  window.setTimeout(function() {cardsFlipped[0].parent().parent().removeClass('rotated') }, 1200);
  //IF TIME: shake/vibrate cards btwn removeClass and 1200ms

  window.setTimeout(function() {cardsFlipped[1].parent().parent().removeClass('rotated') }, 1200);
  //IF TIME: shake/vibrate cards btwn removeClass and 1200ms

  // window.setTimeout(function() {cardsFlipped[0].$('.card').on('click', ) }, 1250);
  // window.setTimeout(function() {cardsFlipped[1].$('.card').on('click') }, 1250);

  window.setTimeout(function() {cardsFlipped = [] }, 1300);

//ISSUE - CAN'T RESUME .ONE CLICK ON PREVIOUSLY FLIPPED cards
  //EXPLORE PREVIOUS OBJECT...
  // window.setTimeout(function() {cardsFlipped[0].one('click', function ('rotated')) }, 1420);
  // window.setTimeout(function() {cardsFlipped[1].one('click', toggleClass('rotated')) }, 1430);

  //run .one('click') on all cards in array or [0]/[1]
}


 //==============================
//      CHECK FOR A MATCH
//==============================

//===============================
//        MATCH & NOMATCH
//===============================

//===============================
//       WIN & LOSS STATES
//===============================

//create winState function
const checkForWin = () => {
  //if all cards matched
    if (matchedCards.length === 16) {
      // console.log(cardsFlipped)
    console.log('Winner winner chicken dinner!');
  } else {
    //do nothing
  }
}
  //win alert/prompt

  //option to reset

// checkForWin();

});

  // if all cards have been flipped and matched
  //   prompt -- play again? / reset game?
  //   congratulations modal
  //   digital rain

//create lossState function

  //else if all cards have not been matched by timer
      //LOSS
      //system failure modal
      //reset button

//===============================
//          GRID RESET
//===============================
