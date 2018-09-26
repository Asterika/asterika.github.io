$(() => {

//create an array that holds all cards
  const cards = [
    { 'name': '000', 'img': 'images/000.jpg', 'value': '000' },
    { 'name': '000', 'img': 'images/000.jpg', 'value': '000' },
    { 'name': '001', 'img': 'images/001.jpg', 'value': '001' },
    { 'name': '001', 'img': 'images/001.jpg', 'value': '001' },
    { 'name': '010', 'img': 'images/010.jpg', 'value': '010' },
    { 'name': '010', 'img': 'images/010.jpg', 'value': '010' },
    { 'name': '011', 'img': 'images/011.jpg', 'value': '011' },
    { 'name': '011', 'img': 'images/011.jpg', 'value': '011' },
    { 'name': '100', 'img': 'images/100.jpg', 'value': '100' },
    { 'name': '100', 'img': 'images/100.jpg', 'value': '100' },
    { 'name': '101', 'img': 'images/101.jpg', 'value': '101' },
    { 'name': '101', 'img': 'images/101.jpg', 'value': '101' },
    { 'name': '110', 'img': 'images/110.jpg', 'value': '110' },
    { 'name': '110', 'img': 'images/110.jpg', 'value': '110' },
    { 'name': '111', 'img': 'images/111.jpg', 'value': '111' },
    { 'name': '111', 'img': 'images/111.jpg', 'value': '111' },
  ];

//create a grid div and add the class of grid as a container for cards
  //append the grid to the matrix div
const $grid = $('<div>').addClass('grid').appendTo(matrix);

//create a for loop to populate the grid with cards
const generateGrid = () => {
  for (let i = 0; i < 16; i++) {
    // console.log(cards[i]);
    const $card = $('<div>').addClass('card').appendTo($grid);
    $('.card').prepend('<img id="apple" src="images/apple.jpg" width=165px height=165px>');
    //step 2: attempted to use function to display apple image, DOES NOT WORK
    // $card.backgroundImage = 'url(images/apple.jpg)';
    // $('.card').appendTo($grid);
  }
}


generateGrid();


//create a div to contain front of card
  //this div should be a child of/contained within the card div
const $front = $('<div>').addClass('card front').appendTo('card');

//create a div to contain back of card
  //this div should be a child of/contained within the card div
// const $back = $('<div>').addClass('card back').appendTo('card');


//create a div to hold the cards on the grid
  //add the class of card to give CSS properties to the card
  //add the classes "front" and "back" to the card to give front and back images
  //append the card to the grid div
// $(() => {
//   // const $card = $('<div>').addClass('card front back');
//   //   $card.appendTo($grid);
// });

})
