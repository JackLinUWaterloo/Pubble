// Pebble.js

// GETTING DATA FROM PHONE 

var price1 = 0; // needs to be integer
var price2 = 0;
var price3 = 0;
var rating1 = 0; // needs to be a float
var rating2 = 0;
var rating3 = 0;

var foreign_curr = ""; // needs to be in str, max len(3)

// SCREEN LAYOUTS
var UI = require('ui');
var Vector2 = require('vector2');
var tertiaryText = require('./tertiaryText.js');

/** var screen1 = new UI.Card({
  title: '    Pubble',
  icon: 'images/menu_icon.png',
  body: '            Home',
  bodyColor: '#9a0036', // Hex colors
  scrollable: true
});
**/

// screen measurements
var screen3 = new UI.Window();
var size = screen3.size();
var width = size.x;
var height = size.y;

// screen 1
var screen1 = new UI.Window();



var box0 = new UI.Text({
  position: new Vector2(0, 0),
  font: 'BITHAM_30_BLACK',
  size: new Vector2(width, height), 
  backgroundColor: 'white',
  color: 'black',
  text: 'PUBBLE'
});


var image2 = new UI.Image({
  position: new Vector2(0, 30),
  size: new Vector2(width, height),
  image: 'images/rice.png'
});


screen1.add(box0);
screen1.add(image2);
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
  text: 'Restaurant 1 Name',
  font: 'GOTHIC_18',
  color: 'white',
  textAlign: 'center',
  textOverflow: 'wrap',
});

var box3 = new UI.Text({
  position: new Vector2(0, 75),
  size: new Vector2(width/2, height/3),
  backgroundColor: 'white',
  text: 'AVG $:',
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
  text: price1.toString() + foreign_curr,
  color: 'black',
  textAlign: 'center',
  textOverflow: 'wrap',
});

var box6 = new UI.Text ({
  position: new Vector2(width/2, 115),
  size: new Vector2(width/2, height/3 + 10),
  backgroundColor: 'white',
  text: rating1.toString() + ' STAR',
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

// next screen

var screen4 = new UI.Window();

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
  text: 'Restaurant 2 Name', // res 2 name
  font: 'GOTHIC_18',
  color: 'white',
  textAlign: 'center',
  textOverflow: 'wrap',
});

var box3 = new UI.Text({
  position: new Vector2(0, 75),
  size: new Vector2(width/2, height/3),
  backgroundColor: 'white',
  text: 'AVG $:',
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
  text: price2.toString() + foreign_curr,
  color: 'black',
  textAlign: 'center',
  textOverflow: 'wrap',
});

var box6 = new UI.Text ({
  position: new Vector2(width/2, 115),
  size: new Vector2(width/2, height/3 + 10),
  backgroundColor: 'white',
  text: rating2.toString() + ' STAR',
  color: 'black',
  textAlign: 'center',
  textOverflow: 'wrap',
});

screen4.add(box1);
screen4.add(image1);
screen4.add(box2);
screen4.add(box3);
screen4.add(box4);
screen4.add(box5);
screen4.add(box6);
screen4.show();

// proceeding screen

var screen5 = new UI.Window();

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
  text: 'Restaurant 3 Name',
  font: 'GOTHIC_18',
  color: 'white',
  textAlign: 'center',
  textOverflow: 'wrap',
});

var box3 = new UI.Text({
  position: new Vector2(0, 75),
  size: new Vector2(width/2, height/3),
  backgroundColor: 'white',
  text: 'AVG $:',
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
  text: price3.toString() + foreign_curr,
  color: 'black',
  textAlign: 'center',
  textOverflow: 'wrap',
});

var box6 = new UI.Text ({
  position: new Vector2(width/2, 115),
  size: new Vector2(width/2, height/3 + 10),
  backgroundColor: 'white',
  text: rating3.toString() + ' STAR',
  color: 'black',
  textAlign: 'center',
  textOverflow: 'wrap',
});

screen5.add(box1);
screen5.add(image1);
screen5.add(box2);
screen5.add(box3);
screen5.add(box4);
screen5.add(box5);
screen5.add(box6);
screen5.show();


