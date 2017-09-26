'use strict';
// 6AM to 8PM
// min number of customers per hour
// max number of customers per hour
// average number of cookies purchased per customer

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var locations = [];
var cookieTable = document.getElementById('cookieTable');

var AddLocation = function(name, min, max, cpCustomer, id) {
  this.name = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.cookiePerCustomer = cpCustomer;
  this.cookiesArray = [];
  this.totalCookies;
  this.element = 'li';
  this.id = id;

  locations.push(this);
};
AddLocation.prototype.randomCustomers = function() {
  var min = Math.ceil(this.minCustomers);
  var max = Math.floor(this.maxCustomers);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
AddLocation.prototype.averageCookieSold = function() {
  var cookies = Math.round(this.randomCustomers() * this.cookiePerCustomer);
  return cookies;
};
AddLocation.prototype.getCookies = function() {
  this.cookiesArray = []; // resets cookiesArray to an empty array before initializing a new array
  for (var i in openHours) {
    var cookiesSold = this.averageCookieSold(); // runs the method for random cookies
    var liElement = document.createElement(this.element); // creates the <li></li> element
    liElement.textContent = openHours[(i)] + ': ' + cookiesSold + ' cookies.'; // creates content for the list element
    var idUl = document.getElementById(this.id); // chooses list determined upon the id
    idUl.appendChild(liElement); // attaches the given content at the end of the list
    this.cookiesArray.push(cookiesSold); // adds the random cookies generated to an array
  };
  var total = 0; // gives the sum of the cookie array
  for (var j = 0; j < this.cookiesArray.length; j ++) {
    total = total + this.cookiesArray[j]; // adds the next cookie in the array to the total
  };
  var tally = document.createElement('li');
  tally.textContent = 'Total: ' + total; // prints out the total in a list below the list of hours
  idUl.appendChild(tally);
  this.totalCookies = total; // attaches the given content at the end of the list chosen above
};

AddLocation.prototype.addHeader = function() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th'); // empty top-left corner of table
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for (var i in openHours) {
    thEl = document.createElement('th');
    thEl.textContent = openHours[i];
    trEl.appendChild(thEl);
  };

  cookieTable.appendChild(trEl);
};

AddLocation.prototype.getCookiesTable = function() {
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  cookieTable.appendChild(trEl);
};

new AddLocation('First and Pike', 23, 65, 6.3, 'pike'); // Constructor('Name', minimum, maximum, cookiesPer, id);
new AddLocation('SeaTac Airport', 3, 24, 1.2, 'airport');
new AddLocation('Seattle Center', 11, 38, 3.7, 'seaCenter');
new AddLocation('Capital Hill', 20, 38, 2.3, 'capHill');
new AddLocation('Alki Beach', 2, 16, 4.6, 'alki');

// calling the lists to show up on the webpage first as it loads.
// for (var i in locations) {
//   locations[i].getCookies();
// };
