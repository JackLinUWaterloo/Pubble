// Pebble.js

// GETTING DATA FROM PHONE 

var price = 0; // needs to be integer
var rating = 0; // needs to be a float
var foreign_curr = ""; // needs to be in str, max len(3)

// SCREEN LAYOUTS
var UI = require('ui');
var Vector2 = require('vector2');
var tertiaryText = require('./tertiaryText.js');

  var screen1 = new UI.Card({
  title: '    Pubble',
  icon: 'images/menu_icon.png',
  body: '            Home',
  bodyColor: '#9a0036', // Hex colors
  scrollable: true
});

screen1.show();

// this is for screen 2
var screen2 = new UI.Card ({ 
});

function limitLength(text) {
   var maxChars = 3;
   if (text.length === maxChars) {
     screen2.show();
     console.log('text');
   } else if (text.length > maxChars) {
    console.log('Try again. Enter valid currency (3 letters max)');
   }
}

var printOutput = tertiaryText('Home Currency:', function(inputtedText) {
  //limitLength(inputtedText);
});

var screen3 = new UI.Window();
var size = screen3.size();
var width = size.x;
var height = size.y;

var image1 = new UI.Image({
  position: new Vector2(0, 5),
  size: new Vector2(width, 30),
  image: 'images/mario.png'
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

screen3.add(box1);
screen3.add(image1);
screen3.add(box2);
screen3.add(box3);
screen3.add(box4);
screen3.add(box5);
screen3.add(box6);
screen3.show();


