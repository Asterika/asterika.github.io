$(() => {

// const currentTurn = () => {
//
// }

//set card to flip front-to-back on click (card will turn -180deg)
$('.card').click(function() {
  $(this).toggleClass('rotated');
});

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
})
