$(() => {

//ISSUES AS OF M, 9/24:
    //Randomize card placement in section/grid
    //Re-assign .one(click) to previously flipped cards so they can be flipped again
    //Code win state
    //Code loss state

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

// const generateGrid () {
//   cardsFlipped = 0;
//   cards = _.shuffle(cards);
//   //for loop to populate grid?
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

  $('.card').one('click', function (e) {
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


const checkPair = () => {
    //check that 2 cards, and only 2 cards, have been flipped
    if(cardsFlipped.length === 2) {
      //check for a match
      // console.log(cardsFlipped[0].attr('value'));
      // console.log(cardsFlipped[1].attr('value'));
      if(cardsFlipped[0].attr('value') === cardsFlipped[1].attr('value')) {
        // console.log(cardsFlipped);
        match();

        //remove event addEventListener -- no need to remove, since .one click is there
        // cardsFlipped[0]
        cardsFlipped = [];

      } else {
        noMatch();
      }
    }
}


const match = () => {
  $(cardsFlipped[0]).parent().parent().addClass('match');
  $(cardsFlipped[1]).parent().parent().addClass('match');
}

const noMatch = () => {
  //STILL NEED:
    //RE-INITIATE oneclick on flipped cards run .one on each of cards in array or [0]/[1]
    //flip cards
    //empty array

  window.setTimeout(function() {cardsFlipped[0].parent().parent().removeClass('rotated') }, 1200);
  //IF TIME: shake/vibrate cards btwn removeClass and 1200ms

  window.setTimeout(function() {cardsFlipped[1].parent().parent().removeClass('rotated') }, 1200);
  //IF TIME: shake/vibrate cards btwn removeClass and 1200ms

  window.setTimeout(function() {cardsFlipped = [] }, 1300);

//ISSUE - CAN'T RESUME .ONE CLICK ON PREVIOUSLY FLIPPED cards
  //EXPLORE PREVIOUS OBJECT...
  // window.setTimeout(function() {cardsFlipped[0].one('click', function ('rotated')) }, 1420);
  // window.setTimeout(function() {cardsFlipped[1].one('click', toggleClass('rotated')) }, 1430);

  //run .one('click') on all cards in array or [0]/[1]
}
});

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

  //if all cards have been flipped and matched
    //prompt -- play again? / reset game?
    //congratulations modal
    //digital rain

//create lossState function

  //else if all cards have not been matched by timer
      //LOSS
      //system failure modal
      //reset button

//===============================
//          GRID RESET
//===============================
