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

// finds random number between min and max customers
AddLocation.prototype.randomCustomers = function() {
  var min = Math.ceil(this.minCustomers);
  var max = Math.floor(this.maxCustomers);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// finds the average cookies sold depending on random customer and rate
AddLocation.prototype.averageCookieSold = function() {
  var cookies = Math.round(this.randomCustomers() * this.cookiePerCustomer);
  return cookies;
};

// pushes random cookies into the empty array.
AddLocation.prototype.getCookies = function() {
  this.cookiesArray = []; // resets cookiesArray to an empty array before initializing a new array

  for (var i = 0; i < openHours.length; i ++) {
    var cookiesSold = this.averageCookieSold(); // runs the method for random cookies
    this.cookiesArray.push(cookiesSold); // adds the random cookies generated to an array
  };

  this.totalCookies = 0;
  for (var j = 0; j < this.cookiesArray.length; j ++) {
    this.totalCookies = this.totalCookies + this.cookiesArray[j]; // sums up all the random cookies
  };
};

// lists the cookies according to the id
AddLocation.prototype.listCookies = function() {
  var cookiesSold = this.cookiesArray;
  var title = document.createElement('ul');
  title.textContent = this.name;
  var list = document.getElementById('lists');
  list.appendChild(title);

  for (var i in openHours) {
    var liElement = document.createElement(this.element); // creates the <li></li> element
    liElement.textContent = openHours[(i)] + ': ' + cookiesSold[i] + ' cookies.'; // creates content for the list element
    ; // chooses list determined upon the id
    title.appendChild(liElement); // attaches the given content at the end of the list
  };

  var tally = document.createElement('li');
  tally.textContent = 'Total: ' + this.totalCookies; // prints out the total in a list below the list of hours
  title.appendChild(tally);
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

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  cookieTable.appendChild(trEl);
};


AddLocation.prototype.tableCookies = function() {
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for (var i in this.cookiesArray) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesArray[i];
    trEl.appendChild(tdEl);
  };
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);

  cookieTable.appendChild(trEl);
};

// AddLocation.prototype.sumUp = function() {
//   var totals = ['Totals'];
//
//   for (var j in locations[i].cookiesArray) {
//     var sum = 0;
//     for (var i in locations) {
//       sum = sum + locations[i].cookiesArray[j];
//     };
//     totals.push(sum);
//   };
//
//   for (var i = 1; i < totals.length; i ++) {
//     var footer = document.getElementsByTagName('tfoot')[i];
//     var footData = document.createElement('td').innerHTML = '';
//     footData.textContent = 'child test';
//     footer.appendChild(footData);
//   };
//   cookieTable.appendChild(footer);
// };
//
// AddLocation.prototype.addTotals = function() {
//   var trEl = document.createElement('tfoot');
//
//   var tdEl = document.createElement('td');
//   tdEl.textContent = 'Totals';
//   trEl.appendChild(tdEl);
//
//   tfoot.appendChild(trEl);
// };

new AddLocation('First and Pike', 23, 65, 6.3, 'pike'); // Constructor('Name', minimum, maximum, cookiesPer, id);
new AddLocation('SeaTac Airport', 3, 24, 1.2, 'airport');
new AddLocation('Seattle Center', 11, 38, 3.7, 'seaCenter');
new AddLocation('Capital Hill', 20, 38, 2.3, 'capHill');
new AddLocation('Alki Beach', 2, 16, 4.6, 'alki');
new AddLocation('Totals', 0, 0, 0, 'totals');
