/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

  var screen1 = new UI.Card({
  title: '    Pubble',
  icon: 'images/menu_icon.png',
  body: '            Home',
  bodyColor: '#9a0036', // Hex colors
  scrollable: true
  
});

screen1.show();

// this is for screen 3
var screen3 = new UI.Card ({
  title: 'EAST SIDE MARIOS',
  font: 'bithan-30-bold',
  
});

screen3.show();