
'use strict';


// var Seattle = {
//     Name: 'Seattle',
//     MinHourlyCustomers: 23,
//     MaxHourlyCustomers: 65,
//     AverageCookiesPerCustomer: 6.3,
//     Arr1: [],
//     // declaring method to round the number to intiger number equlas or less 
//     randomNumber: function () {
//         var random = Math.random();
//         random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
//         random = Math.floor(random);
//         return random;
//     },
//     //  declaring method 
//     averagePurchased: function () {
//         var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());
//         return AverageCookies;
//     },
//     //  declaring a method to add elemnts to an array
//     finalResults: function () {
//         for (var i = 0; i < 14; i++) {
//             this.Arr1.push(this.averagePurchased());
//         }
//     }
// };
// Seattle.finalResults();
// //  creating the unordered list
// var x = document.getElementById('unorderedList');
// var y = document.createElement('h2');
// x.appendChild(y);
// y.textContent = 'Seattle';

// var list = document.createElement('ul');
// x.appendChild(list);
// var strFlag = 'am';
// for (var i = 0; i < 14; i++) {
//     var list_ = document.createElement('li');
//     list.appendChild(list_);
//     j = i + 6;
//     if (j >= 12) strFlag = 'pm';
//     if (j > 12) { j -= 12; }
//     list_.textContent = j + strFlag + ': ' + Seattle.Arr1[i] + ' cookies';
// }
// //  creating Total.
// var summSeattle = 0;
// for (var j = 0; j < Seattle.Arr1.length; j++) {
//     summSeattle += Seattle.Arr1[j];
// }
// var chList15 = document.createElement('li');
// list.appendChild(chList15);
// chList15.textContent = 'Total: ' + summSeattle + ' cookies';


// // Tokyo location ________________________________________________________________________

// var Tokyo = {
//     Name: 'Tokyo',
//     MinHourlyCustomers: 3,
//     MaxHourlyCustomers: 24,
//     AverageCookiesPerCustomer: 1.2,
//     Arr1: [],
//     // declaring method to round the number to intiger number equlas or less 
//     randomNumber: function () {
//         var random = Math.random();
//         random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
//         random = Math.floor(random);
//         return random;
//     },
//     averagePurchased: function () {
//         var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());
//         return AverageCookies;
//     },
//     //  declaring a method to add elemnts to an array
//     finalResults: function () {
//         for (var i = 0; i < 14; i++) {
//             this.Arr1.push(this.averagePurchased());
//         }
//     }
// };
// Tokyo.finalResults();
// // creating unordered list
// var x = document.getElementById('unorderedList');
// var y = document.createElement('h2');
// x.appendChild(y);
// y.textContent = 'Tokyo';

// var list = document.createElement('ul');
// x.appendChild(list);
// var strFlag = 'am';
// for (var i = 0; i < 14; i++) {
//     var list_ = document.createElement('li');
//     list.appendChild(list_);
//     j = i + 6;
//     if (j >= 12) strFlag = 'pm';
//     if (j > 12) { j -= 12; }
//     list_.textContent = j + strFlag + ': ' + Tokyo.Arr1[i] + ' cookies';
// }
// //  creating total 
// var summTokyo = 0;
// for (var j = 0; j < Tokyo.Arr1.length; j++) {
//     summTokyo += Tokyo.Arr1[j];
// }
// var chList15 = document.createElement('li');
// list.appendChild(chList15);
// chList15.textContent = 'Total: ' + summTokyo + ' cookies';

// //  Dubai location _________________________________________________________

// var Dubai = {
//     Name: 'Dubai',
//     MinHourlyCustomers: 11,
//     MaxHourlyCustomers: 38,
//     AverageCookiesPerCustomer: 3.7,
//     Arr1: [],
//     // declaring method to round the number to intiger number equlas or less 
//     randomNumber: function () {
//         var random = Math.random();
//         random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
//         random = Math.floor(random);
//         return random;
//     },
//     averagePurchased: function () {
//         var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());
//         return AverageCookies;
//     },
//     finalResults: function () {
//         for (var i = 0; i < 14; i++) {
//             this.Arr1.push(this.averagePurchased());
//         }
//     }
// };
// Dubai.finalResults();
// //  creating unordered list 
// var x = document.getElementById('unorderedList');
// var y = document.createElement('h2');
// x.appendChild(y);
// y.textContent = 'Dubai';

// var list = document.createElement('ul');
// x.appendChild(list);
// var strFlag = 'am';
// for (var i = 0; i < 14; i++) {
//     var list_ = document.createElement('li');
//     list.appendChild(list_);
//     j = i + 6;
//     if (j >= 12) strFlag = 'pm';
//     if (j > 12) { j -= 12; }
//     list_.textContent = j + strFlag + ': ' + Dubai.Arr1[i] + ' cookies';
// }
// //  creating total
// var summDubai = 0;
// for (var j = 0; j < Dubai.Arr1.length; j++) {
//     summDubai += Dubai.Arr1[j];
// }
// var chList15 = document.createElement('li');
// list.appendChild(chList15);
// chList15.textContent = 'Total: ' + summDubai + ' cookies';

// // Paris location _________________________________________________

// var Paris = {
//     Name: 'Paris',
//     MinHourlyCustomers: 20,
//     MaxHourlyCustomers: 38,
//     AverageCookiesPerCustomer: 2.3,
//     Arr1: [],
//     // declaring method to round the number to intiger number equlas or less
//     randomNumber: function () {
//         var random = Math.random();
//         random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
//         random = Math.floor(random);
//         return random;
//     },
//     averagePurchased: function () {
//         var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());
//         return AverageCookies;
//     },
//     //  declaring a method to add elemnts to an array
//     finalResults: function () {
//         for (var i = 0; i < 14; i++) {
//             this.Arr1.push(this.averagePurchased());
//         }
//     }
// };
// Paris.finalResults();

// var x = document.getElementById('unorderedList');
// var y = document.createElement('h2');
// x.appendChild(y);
// y.textContent = 'Paris';

// var list = document.createElement('ul');
// x.appendChild(list);
// var strFlag = 'am';
// for (var i = 0; i < 14; i++) {
//     var list_ = document.createElement('li');
//     list.appendChild(list_);
//     j = i + 6;
//     if (j >= 12) strFlag = 'pm';
//     if (j > 12) { j -= 12; }
//     list_.textContent = j + strFlag + ': ' + Paris.Arr1[i] + ' cookies';
// }
// var summParis = 0;
// for (var j = 0; j < Paris.Arr1.length; j++) {
//     summParis += Paris.Arr1[j];
// }
// var chList15 = document.createElement('li');
// list.appendChild(chList15);
// chList15.textContent = 'Total: ' + summParis + ' cookies';

// // Lima location _________________________________________________________

// var Lima = {
//     Name: 'Lima',
//     MinHourlyCustomers: 2,
//     MaxHourlyCustomers: 16,
//     AverageCookiesPerCustomer: 4.6,
//     Arr1: [],
//     // declaring method to round the number to intiger number equlas or less


// Lima.finalResults();
// //  creating unordered list
// var x = document.getElementById('unorderedList');
// var y = document.createElement('h2');
// x.appendChild(y);
// y.textContent = 'Lima';

// var list = document.createElement('ul');
// x.appendChild(list);
// var strFlag = 'am';
// for (var i = 0; i < 14; i++) {
//     var list_ = document.createElement('li');
//     list.appendChild(list_);
//     j = i + 6;
//     if (j >= 12) strFlag = 'pm';
//     if (j > 12) { j -= 12; }
//     list_.textContent = j + strFlag + ': ' + Lima.Arr1[i] + ' cookies';
// }
// //  creating total 
// var summLima = 0;
// for (var j = 0; j < Lima.Arr1.length; j++) {
//     summLima += Lima.Arr1[j];
// }
// var chList15 = document.createElement('li');
// list.appendChild(chList15);
// chList15.textContent = 'Total: ' + summLima + ' cookies';

// ________________________________________________________

// creating table with 5 rows 





var hour = [' 6-AM ', ' 7-AM ', ' 8-AM ', ' 9-AM ', ' 10-AM ', ' 11-AM ', ' 12-PM ', ' 1-PM ', ' 2-PM ', ' 3-PM ', ' 4-PM ', ' 5-PM ', ' 6-PM ', ' 7-PM '];
var Location_ = [];
var hourTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var body = document.getElementById('body-page');
var table = document.createElement('table');
body.appendChild(table);


function header_() {
    var headerRow = document.createElement('tr');
    var tableH = document.createElement('tableH');
    headerRow.appendChild(tableH);
    var td = document.createElement('td');
    headerRow.appendChild(td);
    td.textContent = ' ';

    for (var i = 0; i < hour.length; i++) {
        tableH = document.createElement('tableH')
        tableH.textContent = hour[i];
        headerRow.appendChild(tableH);

    }

    tableH = document.createElement('tableH');
    tableH.textContent = 'daily location total';
    headerRow.appendChild(tableH);
    table.appendChild(headerRow);

}

function footer_() {


}



function Cafe(name, MinHourlyCustomers, MaxHourlyCustomers, AverageCookiesPerCustomer) {
    this.name = name;
    this.MinHourlyCustomers = MinHourlyCustomers;
    this.MaxHourlyCustomers = MaxHourlyCustomers;
    this.AverageCookiesPerCustomer = AverageCookiesPerCustomer;
    this.Arr1 = [];
    this.Total = 0;
    Location_.push(this);
}

Cafe.prototype.randomNumber = function () {
    var random = Math.random();
    for (var i = 0; i < hour.length; i++) {
        random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
        random = Math.floor(random);
        return random;
    }
};


Cafe.prototype.averagePurchased = function () {
    
    var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());
    return AverageCookies;
};

Cafe.prototype.finalResults = function () {
    for (var i = 0; i < hour.length; i++) {
        this.Arr1.push(this.averagePurchased());
    }

};



Cafe.prototype.render = function () {

    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);


    for (var i = 0; i < this.averagePurchased; i++) {
        td = document.createElement('td');
        td.textContent = this.averagePurchased;
        tr.appendChild(td);
    }
    td = document.createElement('td');
    td.textContent = this.Total;
    tr.appendChild(td);
};

var Seatle = new Cafe('Seattle', 23, 65, 6.3);
var Tokyo = new Cafe('Tokyo', 3, 24, 1.2);
var Dubai = new Cafe('Dubai', 11, 38, 3.7);
var Paris = new Cafe('Paris', 11, 38, 2.3);
var Lima = new Cafe('Lima', 2, 16, 4.6);

var parentElement = document.getElementById('body-page');
var h2 = document.createElement('h2');
parentElement.appendChild(h2);
h2.textContent = this.name;






header_();



for (var i = 0; i < Location_.length; i++) {
    Location_[i].randomNumber();
    // console.log(Location_[i].randomNumber());
    Location_[i].averagePurchased();
    // console.log(Location_[i].averagePurchased());
    Location_[i].finalResults();
    // console.log(Location_[i].finalResults());
    Location_[i].render();
    // console.log(); (Location_[i].render());
};


//  for (var rowsCount = 0; rowsCount < 5; rowsCount++) {
//      var rowEL = document.createElement('tr');
//      table.appendChild(rowEL);

//      for (var columnsCount = 0; columnsCount <= 13; columnsCount++) {
//          var column = document.createElement('td');
//            column.textContent = 'rowEL' + (rowsCount+1) + 'column' + (columnsCount+1); 
//          rowEL.appendChild(column);

