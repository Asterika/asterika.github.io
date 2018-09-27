$(() => {
//
// ISSUES AS OF W, 9/26:
//
//   REMOVE BLUE - DONE
//   SET RESET & QUIT MODES
//   CREATE READ.ME
//   ADD WIN MODAL?
//   ADD MOVE COUNTER?
//   WORK ON CLICKS
//   DIGITAL RAIN
//
//   Qs for Matt:
//   * move counter or timer?
//   * second modal (TA hours?)
//   * Error messages on console
//   * READ.me
// second player
// win state
// push to repo
// README.
//
// Qs for TA:
// 1. RESET!!!!
// 2. Second player logic -- any glaring holes?
// 3. Need modal to close and game to reset once reset button clicked
//     * do i need a closeModal function or just location.reload?

//
//     After attempting to add counter,
//     cards are now considered all matching once a match is made
//
//     Randomize card placement in section/grid
//
//     Re-assign .one(click) to previously flipped cards so they can be flipped again
//         update: changed one click to on click
//         NOW NEED TO STOP CLICKS AFTER MATCH:
//         WORKS FOR FIRST CARD, not second:
//           $('.card').off('click');
//
//     Ensure only two cards can be clicked at a time:
//       * setTimeout on noMatch() ???
//       * create a function for on click -- include in checkPair?

//ADD ONs:
    //background images
    //loss modal with system failure image + reset prompt/button
    //digital rain wallpaper
    //timer
    //reset button
    //(brain/health/damage counter)
    //add darkening overlay onto matched cards
let playerOne;
let playerTwo;

let cardsFlipped = [];
let matchedCards = [];

const scoreboard = () => {
  $('#scoreboardOne').html('Moves: ' + cardsFlipped.length);
  $('#scoreboardTwo').html('Moves: ' + cardsFlipped.length);
}


const startGame = () => {
  //zero-out last player's score, set new player's moves to 0
  $('.rotated').removeClass('rotated');
  cardsFlipped = [];
  matchedCards = [];
  let moves = 0;
  scoreboard();
  //need to unflip cardsFlipped
}
  //create a for loop to count moves?
  // for (let i = 0; i < moves.length; i++) {
  //   moves[i];
  // }


  const closeModal = () => {
    openModalLoss.hide();
  }

    //Grabbing modal element
    const $modal = $('#modal');
    const $redPill = $('button.red-pill');
    $redPill.on('click',function() {
      $('#modal').hide('slow');
      startGame();
    })

    const $bluePill = $('button.blue-pill');
    $bluePill.on('click',function(){
    $('#modal').hide('slow');
    startGame();
  })

    const openModalLoss = () => {
      $modal.css('display','block');
    }
      // error message - 'Illegal invocation'
      // $(redPill).on('click', 'reset');
      // $redPill.addEventListener('click', reset());
      // if the red pill reset button is clicked
      // $('redPill').on('click', reset());
      // $('bluePill').on('click', ) {
      //   close modal


      // setTimeout(openModalLoss, 2000);
      // alternate method: $modal.show();

    const $openModalWin = () => {
      $modal.css('display', 'block');
    }
    // $redPill.on('click', location.reload);
    // $bluePill.on('click', function());

    // $('openModalWin').show().on('shown', function() {
    //     $('openModalWin').modal('hide')
    // });

  // const currentTurn = true;


// const currentPlayer = ['playerOne', 'playerTwo'];

    // create player 1 and player 2 options
    // const switchPlayer = () => {
    //   if (currentTurn === true) {
    //   //condition true = player 1
    //   clickCard();
    //   checkForWin();
    // }

      //   readyPlayerTwo();
      //     * add class playerTwo?
      //       - moves++
      //     * append playerTwo moves++ to scoreboard?
      // } else {
      //   reset();
      //   readyPlayerOne();
      //     * add class playerOne?
      //       moves++;
      //     * append playerOne moves++ to scoreboard?
      // }


  // const readyPlayerOne = () => {
  //   let score = 0;
  //
  // }



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


// let countMoves = () => {
//   moves++;
//   counter.innerHTML = moves;
// }

let moves = 0;

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
let clickCard = (e) => {
  let $target = $(e.currentTarget);
  let $img;
  // console.log($img);
  let $parent = $target.parent().parent();
  if($target.is('img')) {
    $img = $target;
    cardsFlipped.push($img);
  }
  $target.toggleClass('rotated');
  checkPair();
}

$('.card').on('click', clickCard);


  // $('.card').on('click', function (e) {
  //   let $target = $(e.currentTarget);
  //   let $img;
  //   // console.log($img);
  //   let $parent = $target.parent().parent();
  //   if($target.is('img')) {
  //     $img = $target;
  //     cardsFlipped.push($img);
  //   }
  //   $target.toggleClass('rotated');
  //   checkPair();
  // });

  // let addOneClick = () => {
  //
  // }

// create an array to store matched cards
  //this removes cards from play and stores them for win state


// const match = () => {

 //==============================
//     CHECK PAIR FOR A MATCH
//===============================

// create a function to check whether a pair cards is matched
const checkPair = () => {
    //check that two cards have been flipped
      //LATER: disable all other card flips until match has been determined/animation resolved
      // console.log('hi');
    if(cardsFlipped.length === 2) {
      //count moves
      // while (cardsFlipped.length === 2)
      // countMoves();
      moves++;
      scoreboard();

      //check if two cards match, using 'value' of the image
      if(cardsFlipped[0].attr('value') === cardsFlipped[1].attr('value')) {
        //if cards match, run match() function
        moves++;
        scoreboard();
        match();
        console.log(moves);
        //push matched cards into an array to store for win state
        matchedCards.push(cardsFlipped[0]);
        matchedCards.push(cardsFlipped[1]);
        cardsFlipped = [];
        //check to see if all cards have been placed into the array of matched cards
        checkForWin();
//remove event addEventListener -- no need to remove, since .one click is there
//NOW NEED TO REMOVE, SINCE ON CLICK?
        //add move to TURN
        // console.log(moves);
        //empty the cardsFlipped array as a way to "refresh"
        // cardsFlipped = [];
      //create an 'else' statement containing a function for unmatched cards
      } else {
        noMatch();
        // moves++;
        console.log(moves);
        // cardsFlipped = [];

      }
    }
    }




// setTimeout(function(){
//     openedCards[0].classList.remove("show", "open", "no-event","unmatched");
//     openedCards[1].classList.remove("show", "open", "no-event","unmatched");
//     enable();
//     openedCards = [];
// },1100);

//===============================
//            MATCH
//===============================

//create a function that runs when a match is detected
const match = () => {
  // const card1 = cardsFlipped[0];
  // const card2 = cardsFlipped[1];

  //add off.click
}
  // console.log(cardsFlipped);
  // console.log(cardsFlipped[0]);
// window.setTimeout(function() {
// {card1.parent().parent().addClass('match') } 1300);
// }
// window.setTimeout(function() {
// {card2.parent().parent().addClass('match') } 1300);
// // (cardsFlipped[0]).parent().parent().off('click');
// // (cardsFlipped[1]).parent().parent().off('click');
// // }
// }

  //once two cards are matched....
//   (cardsFlipped[0]).parent().parent().addClass('match');
//   (cardsFlipped[1]).parent().parent().addClass('match');
// }
//
// const offClick = () => {
//   window.setTimeout(function() {cardsFlipped[0].parent().parent().off('click') }, 1200);
//
//   window.setTimeout(function() {cardsFlipped[1].parent().parent().off('click') }, 1200);
// WORKS FOR FIRST CARD!!!!!
//   $('.card').off('click');
// }
//
// const offClick = () => {
//
// }
//
// WORKS FOR FIRST CARD
//   window.setTimeout(function() {cardsFlipped[0].parent().off('click') }, 1200);
//   window.setTimeout(function() {cardsFlipped[1].parent().off('click') }, 1200);
//
//   window.setTimeout(function() {cardsFlipped[0].parent().parent().off('click') }, 1200);
//   window.setTimeout(function() {cardsFlipped[1].parent().parent().off('click') }, 1200);
//   $(cardsFlipped[0]).parent().parent().addClass('match').off('click');
//   $(cardsFlipped[1]).parent().parent().addClass('match').off('click'));

//===============================
//           NO MATCH
//===============================

//create a function that runs once cards are declared a mismatch
const noMatch = () => {
  const card1 = cardsFlipped[0];
  const card2 = cardsFlipped[1];

  // setTimeout(noMatch, 1200);
  // use setTimeout for both unmatched cards to ensure that cards return to original state at the same time
      //IF TIME: add shake/vibrate animation to cards btwn removeClass and 1200ms
  window.setTimeout(function() {
    card1.parent().parent().removeClass('rotated') }, 1200);

  window.setTimeout(function() {
    card2.parent().parent().removeClass('rotated') }, 1200);

  //use setTimeout to empty the array cards are drawn from after cards have returned to initial state
  window.setTimeout(function() { cardsFlipped = [] }, 1400);
}

//===============================
//       WIN & LOSS STATES
//===============================

//create reset function
// const reset = () => {
//   location.reload();
// }
// const gameOver = () => {
//   openModalLoss();
// }

//create win state function
  //use an if/else statement to check if all cards have been matched
const checkForWin = () => {
    //if the length of the array of stored matched cards = number of cards
    if (matchedCards.length === 16 && moves >= 8 && moves < 18) {
      //then all cards have been matched
      //create a win/winState function that runs once a win is determined
     let winChoice = prompt('You beat the Matrix! On to Phase 2?', 'yes / no');
      if (winChoice === 'yes') {
        startGame();
      } else if (winChoice === 'no') {
        startGame();
      }

     // openModalWin();
     //modalWin();
    //if all cards have not yet been matched, do nothing
  } else if (moves >= 18) {
    console.log('LOOSAH!');
    // $('openModalLoss').show();
    openModalLoss();
    //modalLoss();
  } else {
    //do nothing
  }
    // reset();
}

checkForWin();


// .show
// // const modalWin = () => {
// // //
// //
// // }
// //
// // //create a loss modal that opens upon a determined loss
// const modalLoss = () => {
//
// }
// //build in time so modal does not appear immediately
// setTimeout(modalLoss, 2000);


});

// //create a function to count player's moves
// const countMoves = () => {
//   //increment moves by 1 each turn
//   moves++;
//     //if player matches all cards within 12 moves
//     if (matchedCards.length === 16 && moves <= 12) {
//       console.log('congratulations!');
//     } else {
//       console.log('LOOSAH!');
//     }
//
// }


//WIN STATE FUNCTION
    //congratulations modal???
    //digital rain backgroundImage
    //prompt / reset button -- play again?
      //red pill/blue pill?

//LOSS STATE FUNCTION
    //if all cards are not matched by timer --> loss



//create lossState function

  //else if all cards have not been matched by timer
      //LOSS
      //system failure modal
      //reset button

//===============================
//          GRID RESET
//===============================
