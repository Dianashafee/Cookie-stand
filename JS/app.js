
'use strict';


// console.log('Entering app.js');

var hours = [
  '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm',
  '6:00pm', '7:00pm', '8:00pm',
];

function Location(locationName, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersPerHourLog = [];
  this.cookiesPerHour = function () {
    this.cookiesPerHourLog = [];
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHourLog.push(Math.floor(this.customersPerHourLog[i] * this.avgCookiesPerCustomer));
    }
    return this.cookiesPerHour;
  };
  this.addToCustomersPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
      this.customersPerHourLog.push(this.customersPerHour());
    }
  };
  this.customersPerHour = function () {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  this.dailyTotal = function () {
    var sum = 0;
    for (var i = 0; i < this.cookiesPerHourLog.length; i++) {
      sum += this.cookiesPerHourLog[i];
    }
    console.log(sum);
    return sum;
  };
  this.render = function () {
    this.addToCustomersPerHour();
    this.cookiesPerHour();
    var tdEl = '';

    var theData = document.getElementById('table-data');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = this.locationName;
    trEl.appendChild(thEl);
    for(var i = 0; i < hours.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesPerHourLog[i];
      trEl.appendChild(tdEl);
      theData.appendChild(trEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.dailyTotal();
    trEl.appendChild(tdEl);
    theData.appendChild(trEl);
  };
}

function makeHeaderRow() {
  var theHeader = document.getElementById('the-header');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  theHeader.appendChild(trEl);
}

function makeFooterRow() {
  var hourlyTotals = [];
  var dailySum = 0;
  var theFooter = document.getElementById('the-footer');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  for (var i = 0; i < allLocations.length; i++) {
    dailySum += allLocations[i].dailyTotal();
  }
  console.log('All locations total:', dailySum);
  for (var hour = 0; hour < hours.length; hour++) {
    var hourlySum = 0;
    for (let hourlyValue of allLocations) {
      hourlySum += hourlyValue.cookiesPerHourLog[hour];
    }
    hourlyTotals.push(hourlySum);
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotals[hour];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = dailySum;
  trEl.appendChild(thEl);
  theFooter.appendChild(trEl);
}

var Seatle = new Location('Seatle', 23, 65, 6.3);
var Tokyo = new Location('Tokyo', 3, 24, 1.2);
var Dubai = new Location('Dubai', 11, 38, 3.7);
var Paris = new Location('Paris', 20, 38, 2.3);
var Lima = new Location('Lima', 2, 16, 4.6);

var allLocations = [Seatle, Tokyo, Dubai, Paris, Lima];

console.log(allLocations);

(function() {
  makeHeaderRow();
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
  makeFooterRow();
})();

// Here we add javascript for form data

var locationForm = document.getElementById('input-form');
var newLocationData = [];

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById('the-footer').remove();

  var newLocationName = event.target.locationName.value;
  var newMinCustomers = event.target.minCustomers.value;
  var newMaxCustomers = event.target.maxCustomers.value;
  var newAvgCookiesPerCustomer = event.target.avgCookiesPerCustomer.value;

  var newLocation = new Location(newLocationName, parseInt(newMinCustomers), parseInt(newMaxCustomers), parseInt(newAvgCookiesPerCustomer));
  allLocations.push(newLocation);
  newLocation.render();

  //event.target.name.value = null;
  event.target.newLocationName.value = null;
  event.target.newMinCustomers.value = null;
  event.target.newMaxCustomers.value = null;
  event.target.newAvgCookiesPerCustomer.value = null;

  newLocationData.unshift(newLocation);
  makeFooterRow();

  console.log(newLocation);
}

locationForm.addEventListener('submit', handleSubmit, false);

console.log(allLocations);