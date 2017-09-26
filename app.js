'use strict';
// 6AM to 8PM
// min number of customers per hour
// max number of customers per hour
// average number of cookies purchased per customer

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstPike = {
  minCustomers: 23,
  maxCustomers: 65,
  cookiePerCustomer: 6.3,
  cookiesArray: [],
  randomCustomers: function () { // generates a random number between the given minimum and maximum customers
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  averageCookieSold: function() { // gives the random number of cookies based on the number generated for customers
    var cookies = Math.round(this.randomCustomers() * this.cookiePerCustomer);
    return cookies;
  },
  getCookies: function() { // gets cookies sold per hour(cPh), adds to <li id="pike"> adds the cPh to the array 'cookiesArray' then tally's up the total.
    this.cookiesArray = []; // resets cookiesArray to an empty array before initializing a new array
    for (var i in openHours) {
      var cookiesSold = this.averageCookieSold(); // runs the method for random cookies
      var liElement = document.createElement('li'); // creates the <li></li> element
      liElement.textContent = openHours[(i)] + ': ' + cookiesSold + ' cookies.'; // creates content for the list element
      var pikeUl = document.getElementById('pike'); // chooses list determined upon the id
      pikeUl.appendChild(liElement); // attaches the given content at the end of the list
      this.cookiesArray.push(cookiesSold); // adds the random cookies generated to an array
    };
    var total = 0; // gives the sum of the cookie array
    for (var j = 0; j < this.cookiesArray.length; j ++) {
      total = total + this.cookiesArray[j]; // adds the next cookie in the array to the total
    };
    var tally = document.createElement('li');
    tally.textContent = 'Total: ' + total; // prints out the total in a list below the list of hours
    pikeUl.appendChild(tally); // attaches the given content at the end of the list chosen above
  }
};

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  cookiePerCustomer: 1.2,
  cookiesArray: [],
  randomCustomers: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  averageCookieSold: function() {
    var cookies = Math.round(this.randomCustomers() * this.cookiePerCustomer);
    return cookies;
  },
  getCookies: function() {
    this.cookiesArray = [];
    for (var i in openHours) {
      var cookiesSold = this.averageCookieSold();
      var liElement = document.createElement('li');
      liElement.textContent = openHours[i] + ': ' + cookiesSold + ' cookies.';
      var seaTacUl = document.getElementById('airport');
      seaTacUl.appendChild(liElement);
      this.cookiesArray.push(cookiesSold);
    };
    var total = 0;
    for (var j = 0; j < this.cookiesArray.length; j ++) {
      total = total + this.cookiesArray[j];
    };
    var tally = document.createElement('li');
    tally.textContent = 'Total: ' + total;
    seaTacUl.appendChild(tally);
  }
};

var seaCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  cookiePerCustomer: 3.7,
  cookiesArray: [],
  randomCustomers: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  averageCookieSold: function() {
    var cookies = Math.round(this.randomCustomers() * this.cookiePerCustomer);
    return cookies;
  },
  getCookies: function() {
    this.cookiesArray = [];
    for (var i in openHours) {
      var cookiesSold = this.averageCookieSold();
      var liElement = document.createElement('li');
      liElement.textContent = openHours[i] + ': ' + cookiesSold + ' cookies.';
      var seaCenterUl = document.getElementById('seaCenter');
      seaCenterUl.appendChild(liElement);
      this.cookiesArray.push(cookiesSold);
    };
    var total = 0;
    for (var j = 0; j < this.cookiesArray.length; j ++) {
      total = total + this.cookiesArray[j];
    };
    var tally = document.createElement('li');
    tally.textContent = 'Total: ' + total;
    seaCenterUl.appendChild(tally);
  }
};

var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  cookiePerCustomer: 2.3,
  cookiesArray: [],
  randomCustomers: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  averageCookieSold: function() {
    var cookies = Math.round(this.randomCustomers() * this.cookiePerCustomer);
    return cookies;
  },
  getCookies: function() {
    this.cookiesArray = [];
    for (var i in openHours) {
      var cookiesSold = this.averageCookieSold();
      var liElement = document.createElement('li');
      liElement.textContent = openHours[i] + ': ' + cookiesSold + ' cookies.';
      var capHillUL = document.getElementById('capHill');
      capHillUL.appendChild(liElement);
      this.cookiesArray.push(cookiesSold);
    };
    var total = 0;
    for (var j = 0; j < this.cookiesArray.length; j ++) {
      total = total + this.cookiesArray[j];
    };
    var tally = document.createElement('li');
    tally.textContent = 'Total ' + total;
    capHillUL.appendChild(tally);
  }
};

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  cookiePerCustomer: 4.6,
  cookiesArray: [],
  randomCustomers: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  averageCookieSold: function() {
    var cookies = Math.round(this.randomCustomers() * this.cookiePerCustomer);
    return cookies;
  },
  getCookies: function() {
    this.cookiesArray = [];
    for (var i in openHours) {
      var cookiesSold = this.averageCookieSold();
      var liElement = document.createElement('li');
      liElement.textContent = openHours[i] + ': ' + cookiesSold + ' cookies.';
      var alkiUL = document.getElementById('alki');
      alkiUL.appendChild(liElement);
      this.cookiesArray.push(cookiesSold);
    };
    var total = 0;
    for (var j = 0; j < this.cookiesArray.length; j ++) {
      total = total + this.cookiesArray[j];
    };
    var tally = document.createElement('li');
    tally.textContent = 'Total: ' + total;
    alkiUL.appendChild(tally);
  }
};

// calling the lists to show up on the webpage first as it loads.
firstPike.getCookies();
seaTac.getCookies();
seaCenter.getCookies();
capHill.getCookies();
alki.getCookies();
