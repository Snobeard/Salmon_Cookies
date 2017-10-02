'use strict';
// 6AM to 8PM
// min number of customers per hour
// max number of customers per hour
// average number of cookies purchased per customer

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var locations = [];
var cookieData = document.getElementById('cookieContent');
var cookieTotal = document.getElementById('sum');
var totals = [];
var salmonForm = document.getElementById('salmonForm');

var AddLocation = function(name, min, max, cpCustomer, id) {
  this.name = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.cookiePerCustomer = cpCustomer;
  this.cookiesArray = [];
  this.element = 'li';
  this.id = id;

  locations.push(this);
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// finds random number between min and max customers
AddLocation.prototype.randomCustomers = function() {
  var min = Math.ceil(this.minCustomers);
  var max = Math.floor(this.maxCustomers);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// finds the average cookies sold depending on random customer and rate
AddLocation.prototype.averageCookieSold = function() {
  var cookies = Math.round(this.randomCustomers() * this.cookiePerCustomer);
  return cookies;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// pushes random cookies into the empty array.
AddLocation.prototype.getCookies = function() {
  this.cookiesArray = []; // resets cookiesArray to an empty array before initializing a new array
  this.totalCookies = 0;

  for (var i = 0; i < openHours.length; i ++) {
    var cookiesSold = this.averageCookieSold(); // runs the method for random cookies
    this.cookiesArray.push(cookiesSold); // adds the random cookies generated to an array
  };

  for (var j = 0; j < this.cookiesArray.length; j ++) {
    this.totalCookies = this.totalCookies + this.cookiesArray[j]; // sums up all the random cookies
  };
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
// lists the cookies according to the id

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

  cookieData.appendChild(trEl);
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
  var thEl = document.createElement('th');
  thEl.textContent = this.totalCookies;
  trEl.appendChild(thEl);

  cookieData.appendChild(trEl);
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function sumTotals() {
  totals = [];

  for (var i = 0; i < locations[0].cookiesArray.length; i ++) {
    var sum = 0;
    for (var j = 0; j < locations.length; j ++) {
      sum = sum + locations[j].cookiesArray[i];
    };
    totals.push(sum);
  };
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function addTotals() {
  sumTotals();
  var trEl = document.createElement('tr');
  trEl.id = 'totalRow';

  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  for (var i = 0; i < locations[0].cookiesArray.length; i ++) {
    thEl = document.createElement('th');
    thEl.textContent = totals[i];
    trEl.appendChild(thEl);
  };
  thEl = document.createElement('th');
  var sum = 0;

  for (var j = 0; j < locations.length; j ++) {
    sum = sum + locations[j].totalCookies;
  };
  thEl.textContent = sum;
  trEl.appendChild(thEl);
  cookieTotal.appendChild(trEl);
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function handleSubmit(event) {
  event.preventDefault(); // prevents page reload;

  var name = event.target.name.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var cpPerson = event.target.cookiesPerPerson.value;
  var id = name.split(' ')[0].charAt(0) + name.split(' ')[1];
  id = id.replace(id.charAt(1), id.charAt(1).toUpperCase());
  // ^ creates id value based on first character in first name and second part of the name (first character capitalized) ^

  if (!name) { // check: name input has value
    return alert('Please Enter a name.');
  };

  if (!minCust) { // check: minimum has value
    return alert('Please specify the \'minimum\' amount of customers per hour.');
  } else if (isNaN(parseInt(minCust))) { // check: minimum is a number value
    return alert('Minimum customers: \'' + minCust + '\' is not the right format\nPlease use an integer.');
  }

  if (!maxCust) { // check: maximum has value
    return alert('Please specify the \'maximum\' amount of customers per hour.');
  } else if (isNaN(parseInt(maxCust))) { // check: maximum is a number value
    return alert('Maximum customers: \'' + maxCust + '\' is not the right format\nPlease use an integer.');
  } else if (minCust > maxCust) { // check: minimum is less than maximum
    return alert('Error, \'minimum\' customers cannot exceed \'maximum\' customers');
  }

  if (!cpPerson) { // check: cookies per person has value
    return alert('Please enter an average cookie per customer rate.');
  } else if (isNaN(parseInt(cpPerson))) { // check: cookie/person is a number
    return alert('Cookies per customer: \'' + cpPerson + '\' is not the right format\nPlease use an integer.');
  }


  console.log('Location name is: ' + name);
  console.log('Minimum customers: ' + minCust);
  console.log('Maximum customers: ' + maxCust);
  console.log('Average cookiers per: ' + cpPerson);
  console.log('Id given to the location: ' + id);
  new AddLocation(name, minCust, maxCust, cpPerson, id);

  cookieData.innerHTML = null;
  cookieTotal.innerHTML = null;
  event.target.name.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.cookiesPerPerson.value = null;

  locations[0].addHeader();
  locations[locations.length - 1].getCookies();
  for (var i = 0; i < locations.length; i ++) {
    locations[i].tableCookies();
  };
  addTotals();
}

// Constructor('Name', minimum, maximum, cookiesPer, id);
new AddLocation('First and Pike', 23, 65, 6.3, 'pike');
new AddLocation('SeaTac Airport', 3, 24, 1.2, 'airport');
new AddLocation('Seattle Center', 11, 38, 3.7, 'seaCenter');
new AddLocation('Capital Hill', 20, 38, 2.3, 'capHill');
new AddLocation('Alki Beach', 2, 16, 4.6, 'alki');

salmonForm.addEventListener('submit', handleSubmit);

// initiate table
locations[0].addHeader();
for (var i in locations) {
  locations[i].getCookies();
  locations[i].tableCookies();
};
addTotals();
