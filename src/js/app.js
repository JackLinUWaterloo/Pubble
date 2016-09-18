
// GETTING DATA FROM PHONE 

var price = 0; // needs to be integer
var rating = 0; // needs to be a float
var foreign_curr = ""; // needs to be in str, max len(3)

// SCREEN LAYOUTS

var UI = require('ui');
var Vector2 = require('vector2');

/** var screen1 = new UI.Card({
  title: '    Pubble',
  icon: 'images/menu_icon.png',
  body: '            Home',
  bodyColor: '#9a0036', // Hex colors
  scrollable: true
  
});
screen1.show();
**/

// this is for screen 2
  
var screen2 = new UI.Window();
var size = screen2.size();
var width = size.x;
var height = size.y;

var image1 = new UI.Image({
  position: new Vector2(0, 5),
  size: new Vector2(width, 30),
  image: 'images/letterp.png'
});

var box1 = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(width, height/3 - 15), 
  backgroundColor: 'white',
  color: 'black',
  textAlign: 'center',
  textOverflow: 'wrap',
});

var box2 = new UI.Text({
  position: new Vector2(0, 40),
  size: new Vector2(width, 30), 
  backgroundColor: 'black',
  text: 'Restaurant Name',
  font: 'GOTHIC_18',
  color: 'white',
  textAlign: 'center',
  textOverflow: 'wrap',
});

var box3 = new UI.Text({
  position: new Vector2(0, 75),
  size: new Vector2(width/2, height/3),
  backgroundColor: 'white',
  text: 'PRICE:',
  color: 'black',
  textAlign: 'center',
  textOverflow: 'wrap',
  
});

var box4 = new UI.Text({
  position: new Vector2(0, 115),
  size: new Vector2(width/2, height/3 + 10),
  backgroundColor: 'white',
  text: 'RATING:',
  color: 'black',
  textAlign: 'center',
  textOverflow: 'wrap',
});

var box5 = new UI.Text ({
  position: new Vector2(width/2, 75),
  size: new Vector2(width/2, height/3),
  backgroundColor: 'white',
  text: price.toString() + foreign_curr,
  color: 'black',
  textAlign: 'center',
  textOverflow: 'wrap',
});

var box6 = new UI.Text ({
  position: new Vector2(width/2, 115),
  size: new Vector2(width/2, height/3 + 10),
  backgroundColor: 'white',
  text: rating.toString() + ' STAR',
  color: 'black',
  textAlign: 'center',
  textOverflow: 'wrap',
});

screen2.add(box1);
screen2.add(image1);
screen2.add(box2);
screen2.add(box3);
screen2.add(box4);
screen2.add(box5);
screen2.add(box6);
screen2.show();




