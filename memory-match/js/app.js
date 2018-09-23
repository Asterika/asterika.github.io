$(() => {

//create a function to randomize placement of cards on grid
  //use either Math.random OR shuffle array of possible cards?


// const currentTurn = () => {
//
// }

//create a function to limit player to two clicks/turn


//create a function to flip card to view back
  //function initiates on click
  //function allows only one click
  //card rotates -180 degrees
const $flipToBack = () => {
  $('.card').one('click', (function() {
    $(this).toggleClass('rotated');
  }));
}

$flipToBack();

//create a function to checkPair
  //within function, create an if/else statement
    //if images on cards match
        //have card images fade to black background
    //if there is no match
        //(created animated shake feature for both)
        //auto return flipped cards to original/front state
// const $checkPair = () => {
//   //if card front matches card back
//   if()
//
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
