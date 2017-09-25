'use strict';
// 6AM to 8PM
// min number of customers per hour
// max number of customers per hour
// average number of cookies purchased per customer
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstPike = {
  minCustomers: 23,
  maxCustomers: 65,
  cookiePerCystomer: 6.3,
  cookiesArray: [],
  randomCustomers: function () {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  averageCookieSold: function() {
    var cookies = Math.round(this.randomCustomers() * this.cookiePerCystomer);
    return cookies;
  },
  getCookies: function() {
    for (var i in openHours) {
      var cookiesSold = this.averageCookieSold();
      var liEl = document.createElement('li');
      liEl.textContent = openHours[i] + ': ' + cookiesSold + ' cookies.';
      var pikeUl = document.getElementById('pike');
      pikeUl.appendChild(liEl);
      this.cookiesArray.push(cookiesSold);
    };
  }
};

var seaAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  averageCookie: 1.2
};

var seaCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  averageCookie: 3.7
};

var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  averageCookie: 2.3
};

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  averageCookie: 4.6
};
