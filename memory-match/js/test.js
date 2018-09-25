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

  $('.card').one('click', (e) => {
    let $target = $(e.currentTarget);
    // console.log($target);
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
        console.log(cardsFlipped[0].parent().parent());
        console.log(cardsFlipped[1].parent().parent());
        //add animation -- cardsFlipped[1]
        // cardsFlipped[0].parent().parent().removeClass('rotated');
        window.setTimeout(function() {cardsFlipped[0].parent().parent().removeClass('rotated') }, 1200);
        // cardsFlipped[1].parent().parent().removeClass('rotated');
        //run .one on each of cards in array or [0]/[1]
        //flip cards
        //empty array
        window.setTimeout(function() {cardsFlipped[1].parent().parent().removeClass('rotated') }, 1200);
        // console.log(window);
      }
    } else {
    }
 }

const match = () => {
  $(cardsFlipped[0]).parent().parent().addClass('match');
  $(cardsFlipped[1]).parent().parent().addClass('match');
}

// const match = () => {
//  let flipped = document.querySelectorAll('.flipped');
//  flipped.forEach(card => {
//    card.addClass('match');
//  });
// }
//
// const noMatch = () => {
//
// }
//
// const reverseFlip = () => {
//
// }


//GET THE ID FOR THAT CARD AND GET IT TO LOG


// }
  //function initiates on click
  //function allows only one click per card (no returning card to initial state)
//   $('.card').one('click', () => {
//     //card rotates -180 degrees
//     $(this).toggleClass('rotated');
//   }));
//   const countFlips = () => {
//     if(cardsFlipped.length > 2) {
//       return false;
//     } else if (cardsFlipped.length === 2) {
//       // checkPair();
//       alert('Hallelujah! Max flips achieved!');
//     }
//   }
// }
 //call the function
// flipCard();
});
 //==============================
//      CHECK FOR A MATCH
//==============================
//  //create a function to check if pair of flipped cards matches
// const checkPair = () => {
//   //call $flipCard() function to ensure cards have been flipped
//   $flipCard();
//     //check that 2 cards, and only 2 cards, have been flipped
//     if(cardsFlipped.length === 2) {
//       //check for a match
//       if(cardsFlipped[0] === cardsFlipped[1]) {
//         //ULTIMATELY...call match() function
//             //add animation
//  // const currentTurn = () => {
//             //remove event listener on 2 matched cards???
//          //FOR NOW...placeholder alert
//         // alert('Match!!!');
//       } else {
//         //ULTIMATELY...call noMatch() function
//           //add animation - shake/vibrate
//            //return cards to initial state through reverseFlip() function
//          //FOR NOW...placeholder alert
//         alert('No match!');
//       }
//     }
//  }

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
//     cards.sort(() => 0.5 - Math.random());
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

 //create a function to flip card to view back
  //function initiates on click
  //function allows only one click
  //card rotates -180 degrees
// const $flipToBack = () => {
//   $('.card').one('click', (function() {
//     $(this).toggleClass('rotated');
//   }));
// }
//  $flipToBack();
