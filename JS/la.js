
// 'use strict';

// var body = document.getElementById('body-page');
// var table = document.createElement('table');
// body.appendChild(table);

// var Location_ = [];
// var hour = [' 6-AM ', ' 7-AM ', ' 8-AM ', ' 9-AM ', ' 10-AM ', ' 11-AM ', ' 12-PM ', ' 1-PM ', ' 2-PM ', ' 3-PM ', ' 4-PM ', ' 5-PM ', ' 6-PM ', ' 7-PM'];

// var hourTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// function header_() {
//     var headerRow = document.createElement('tr');
//     // var tableH = document.createElement('tableH');
//     // headerRow.appendChild(tableH);
//     var td = document.createElement('td');
//     headerRow.appendChild(td);
//     td.textContent = ' ';

//     for (var i = 0; i < hour.length; i++) {
//         var th = document.createElement('th');

//         // tableH = document.createElement('tableH');
//         headerRow.appendChild(th);
//         th.textContent = hour[i] + " ";
//     }

//     var tH = document.createElement('tH');
//     tH.textContent = 'daily location total';
//     headerRow.appendChild(tH);
//     table.appendChild(headerRow);

// }

// header_();




// function Cafe(name, MinHourlyCustomers, MaxHourlyCustomers, AverageCookiesPerCustomer) {
//     this.name = name;
//     this.MinHourlyCustomers = MinHourlyCustomers;
//     this.MaxHourlyCustomers = MaxHourlyCustomers;
//     this.AverageCookiesPerCustomer = AverageCookiesPerCustomer;
//     this.customersPerHour = [];
//     this.cookiesPerHour = [];
//     this.Total = 0;
//     Location_.push(this);
// }




// Cafe.prototype.generateCustomersPerHour = function () {
//     for (var i = 0; i < hour.length; i++) {
//         this.customersPerHour.push(generateRandomValue(this.MinHourlyCustomers, this.MaxHourlyCustomers));
//     }
// }

// Cafe.prototype.calculateNumberOfCookiesPerHour = function () {
//     this.generateCustomersPerHour();
//     var numberOfcookies;
//     for (var i = 0; i < hour.length; i++) {
//         numberOfcookies = Math.ceil(this.customersPerHour[i] * this.AverageCookiesPerCustomer);
//         this.cookiesPerHour.push(numberOfcookies);
//         this.Total = this.Total + numberOfcookies;
//         hourTotal[i] += numberOfcookies;
//     }
//     hourTotal[hourTotal.length - 1] += this.Total;
// }

// function generateRandomValue(MinHourlyCustomers, MaxHourlyCustomers) {
//     var random = Math.floor(Math.random() * (MaxHourlyCustomers - MinHourlyCustomers + 1) + MinHourlyCustomers);
//     return random;
// }




// Cafe.prototype.render = function () {
//     this.calculateNumberOfCookiesPerHour();

//     var trEL = document.createElement('tr');
//     table.appendChild(trEL);
//     var td = document.createElement('td');
//     trEL.appendChild(td);
//     td.textContent = this.name;

//     for (var i = 0; i < hour.length; i++) {
//         var td = document.createElement('td');
//         trEL.appendChild(td);
//         td.textContent = this.cookiesPerHour[i];
//     }

//     td = document.createElement('td');
//     trEL.appendChild(td);
//     td.textContent = this.Total;
// };

// var Seatle = new Cafe('Seattle', 23, 65, 6.3);
// var Tokyo = new Cafe('Tokyo', 3, 24, 1.2);
// var Dubai = new Cafe('Dubai', 11, 38, 3.7);
// var Paris = new Cafe('Paris', 11, 38, 2.3);
// var Lima = new Cafe('Lima', 2, 16, 4.6);


// var parentElement = document.getElementById('body-page');
// var h2 = document.createElement('h2');
// parentElement.appendChild(h2);
// h2.textContent = this.name;



// for (var i = 0; i < Location_.length; i++) {
//     Location_[i].render();
// };



// function footer_() {
//     var tr = document.createElement('tr');
//     table.appendChild(tr);
//     var td = document.createElement('td');
//     td.textContent = ' Totals';
//     tr.appendChild(td);

//     for (var i = 0; i < hourTotal.length; i++) {
//         td = document.createElement('td');
//         td.textContent = hourTotal[i];
//         tr.appendChild(td);

//     }

//     tr.appendChild(td);

// }

// footer_();


// var infoForm = document.getElementById("newInfo"); console.log(infoForm);
// infoForm.addEventListener('submit', function (event) {
//     console.log(event);
//     event.preventDefault(); var location = event.target.location.value; 
//     var minCustomer = event.target.minCustomers.value; 
//     var maxCustomers = event.target.maxCustomers.value; 
//     var coockieAvg = event.target.coockieAvg.value;
//     var addInfo = new City(location, parseFloat(coockieAvg), [], [], 0, parseInt(minCustomer), parseInt(maxCustomers)); addInfo.cusCount(); 
//     var tr2 = document.createElement('tr');
//     salesResule.appendChild(tr2); 
//     var myCookies = document.createElement('td'); 
//     tr2.appendChild(myCookies);
//     salesResule.insertRow(5, tr2);
//     myCookies.textContent = addInfo.name; for (let i = 0; i < workingHours.length; i++) { myCookies = document.createElement('td'); 
//     tr2.appendChild(myCookies); myCookies.textContent = addInfo.cookiesSold[i]; } myCookies = document.createElement('td'); 
//     tr2.appendChild(myCookies); myCookies.textContent = (addInfo.total); 
//     console.log(coockieAvg); 
//     console.log(addInfo);
// });
// console.log(infoForm);
// City.prototype.totalsOfTotals();