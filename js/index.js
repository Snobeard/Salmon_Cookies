'use strict';

// sets up web page
locations[0].addHeader();
for (var i in locations) {
  locations[i].getCookies();
  locations[i].tableCookies();
};
