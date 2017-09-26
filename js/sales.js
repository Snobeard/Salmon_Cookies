'use strict';

// calling the lists to show up on the webpage first as it loads.
for (var i in locations) {
  locations[i].getCookiesList();
};
