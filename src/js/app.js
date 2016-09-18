/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

var main = new UI.Card({
  title: '    Pubble',
  icon: 'images/menu_icon.png',
  body: '            Home',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036', // Hex colors
  scrollable: true
  
});

main.show();
