//Plan for organizing code & initial code to implement ideas

//=========================
//        SET GRID
//=========================

//define grid boundaries
  //set CSS container of fixed width & height for bounds of game
    //set flex properties to wrap, rendering 4x4 grid
  //populate grid

//create buttons
  //generate 16 buttons in html or a for loop squares grid

//set images
  //set outer images on card-buttons
  //create 8 card classes (a-h or 0-7)
    //assign 2 cards to each class
  //set inner images on cards
    //1 image per class, assigned to 2 cards in that class

//=========================
//   CARD FUNCTIONALITY
//=========================

//define a turn
  //create a function "takeTurn"
    //create a function "executeClick"
      //click 1 + flip
      //click 2 + flip
    //create a function "determineMatch"
      //if cardA.imgA && cardA.imgA === true {
        //pair
          //fade dark
          //set unclickable
      //} else {
        //noPair
          //flip to initial state
      //}

//=======================
//     HEALTH STATUS
//=======================

//set initial health state
//at end of each turn
  //if cards match (pair)
    //increment health by 2
    //if currentHealth/healthStatus is between 1 and 19
    //else, do nothing
  //else, if cards do not match (noPair)
    //decrement health by 4
    //if health is above 0 \\ if health is between 1 and 20
    //else, gameOver

//=========================
//        WIN STATE
//=========================

//Conditions for win:
  //create a function winState(?)
    //if all images are paired
      //&& if health > 0
      //&& if timer > 0

//Win Animations
  //alert OR CSS animations cascading down page
  //(if multiple levels - notice of phase 1 success)

//RESET
    //auto refresh
    //OR
    //prompt player to reset

//=========================
//       LOSS STATE
//=========================

//Conditions for loss:
  //if timer runs out
  //OR
  //if health reaches 0

//Loss animations
  //cards scroll off screen
  //prompt for player "Try again?"

//Reset

//=========================
//       RESET PHASE
//=========================

//Reset board state to initial
//Set GRID
  //if follows a loss, repopulate randomized cards
  //if follows a win, reset has to re-randomize cards/shuffle
  //if follows a reset, re-randomize/shuffle
