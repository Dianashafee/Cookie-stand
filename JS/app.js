
'use strict';


var Seattle = {
    Name: 'Seattle',
    MinHourlyCustomers: 23,
    MaxHourlyCustomers: 65,
    AverageCookiesPerCustomer: 6.3,
    Arr1: [],
    // declaring method to round the number to intiger number equlas or less 
    randomNumber: function () {
        var random = Math.random();
        random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
        random = Math.floor(random);
        return random;
    },
    //  declaring method 
    averagePurchased: function () {
        var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());
        return AverageCookies;
    },
    //  declaring a method to add elemnts to an array
    finalResults: function () {
        for(var i= 0 ; i<14 ; i++) {
        this.Arr1.push(this.averagePurchased());
    }  
    }
};
Seattle.finalResults();
//  creating the unordered list
var x = document.getElementById('unorderedList');
var y = document.createElement('h2');
x.appendChild(y);
y.textContent = 'Seattle';

var list = document.createElement('ul');
x.appendChild(list);
var strFlag = 'am'; 
for (var i =0 ; i<14;i++){
    var list_ = document.createElement('li');
    list.appendChild(list_);
    j = i+6;
    if(j>=12)strFlag='pm';
    if(j>12){j-=12;}
    list_.textContent = j+strFlag+': '+ Seattle.Arr1[i] +' cookies';
}
//  creating Total.
var summSeattle = 0 ;
for(var j= 0 ; j< Seattle.Arr1.length; j++) {
    summSeattle += Seattle.Arr1[j];
}
var chList15 = document.createElement('li');
list.appendChild(chList15);
chList15.textContent = 'Total: ' + summSeattle  + ' cookies';


 // Tokyo location ________________________________________________________________________

 var Tokyo = {
    Name: 'Tokyo',
    MinHourlyCustomers: 3,
    MaxHourlyCustomers: 24,
    AverageCookiesPerCustomer: 1.2,
    Arr1: [],
     // declaring method to round the number to intiger number equlas or less 
    randomNumber: function () {
        var random = Math.random();
        random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
        random = Math.floor(random);
        return random;
    },
    averagePurchased: function () {
        var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());
        return AverageCookies;
    },
    //  declaring a method to add elemnts to an array
    finalResults: function () {
        for(var i= 0 ; i<14 ; i++) {
        this.Arr1.push(this.averagePurchased());
    }  
    }
};
Tokyo.finalResults();
// creating unordered list
var x = document.getElementById('unorderedList');
var y = document.createElement('h2');
x.appendChild(y);
y.textContent = 'Tokyo';

var list = document.createElement('ul');
x.appendChild(list);
var strFlag = 'am'; 
for (var i =0 ; i<14;i++){
    var list_ = document.createElement('li');
    list.appendChild(list_);
    j = i+6;
    if(j>=12)strFlag='pm';
    if(j>12){j-=12;}
    list_.textContent = j+strFlag+': '+ Tokyo.Arr1[i] +' cookies';
}
//  creating total 
var summTokyo = 0 ;
for(var j= 0 ; j< Tokyo.Arr1.length; j++) {
    summTokyo += Tokyo.Arr1[j];
}
var chList15 = document.createElement('li');
list.appendChild(chList15);
chList15.textContent = 'Total: ' + summTokyo  + ' cookies';

//  Dubai location _________________________________________________________

var Dubai = {
    Name: 'Dubai',
    MinHourlyCustomers: 11,
    MaxHourlyCustomers: 38,
    AverageCookiesPerCustomer: 3.7,
    Arr1: [],
    // declaring method to round the number to intiger number equlas or less 
    randomNumber: function () {
        var random = Math.random();
        random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
        random = Math.floor(random);
        return random;
    },
    averagePurchased: function () {
        var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());
        return AverageCookies;
    },
    finalResults: function () {
        for(var i= 0 ; i<14 ; i++) {
        this.Arr1.push(this.averagePurchased());
    }  
    }
};
Dubai.finalResults();
//  creating unordered list 
var x = document.getElementById('unorderedList');
var y = document.createElement('h2');
x.appendChild(y);
y.textContent = 'Dubai';

var list = document.createElement('ul');
x.appendChild(list);
var strFlag = 'am'; 
for (var i =0 ; i<14;i++){
    var list_ = document.createElement('li');
    list.appendChild(list_);
    j = i+6;
    if(j>=12)strFlag='pm';
    if(j>12){j-=12;}
    list_.textContent = j+strFlag+': '+ Dubai.Arr1[i] +' cookies';
}
//  creating total
var summDubai = 0 ;
for(var j= 0 ; j< Dubai.Arr1.length; j++) {
    summDubai += Dubai.Arr1[j];
}
var chList15 = document.createElement('li');
list.appendChild(chList15);
chList15.textContent = 'Total: ' + summDubai  + ' cookies';

// Paris location _________________________________________________

var Paris = {
    Name: 'Paris',
    MinHourlyCustomers: 20,
    MaxHourlyCustomers: 38,
    AverageCookiesPerCustomer: 2.3,
    Arr1: [],
    // declaring method to round the number to intiger number equlas or less
    randomNumber: function () {
        var random = Math.random();
        random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
        random = Math.floor(random);
        return random;
    },
    averagePurchased: function () {
        var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());
        return AverageCookies;
    },
    //  declaring a method to add elemnts to an array
    finalResults: function () {
        for(var i= 0 ; i<14 ; i++) {
        this.Arr1.push(this.averagePurchased());
    }  
    }
};
Paris.finalResults();

var x = document.getElementById('unorderedList');
var y = document.createElement('h2');
x.appendChild(y);
y.textContent = 'Paris';

var list = document.createElement('ul');
x.appendChild(list);
var strFlag = 'am'; 
for (var i =0 ; i<14;i++){
    var list_ = document.createElement('li');
    list.appendChild(list_);
    j = i+6;
    if(j>=12)strFlag='pm';
    if(j>12){j-=12;}
    list_.textContent = j+strFlag+': '+ Paris.Arr1[i] +' cookies';
}
var summParis = 0 ;
for(var j= 0 ; j< Paris.Arr1.length; j++) {
    summParis += Paris.Arr1[j];
}
var chList15 = document.createElement('li');
list.appendChild(chList15);
chList15.textContent = 'Total: ' + summParis  + ' cookies';

// Lima location _________________________________________________________

var Lima = {
    Name: 'Lima',
    MinHourlyCustomers: 2,
    MaxHourlyCustomers: 16,
    AverageCookiesPerCustomer: 4.6,
    Arr1: [],
    // declaring method to round the number to intiger number equlas or less
    randomNumber: function () {
        var random = Math.random();
        random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
        random = Math.floor(random);
        return random;
    },
    averagePurchased: function () {
        var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());
        return AverageCookies;
    },
    // creating method to add elemnts to an array 
    finalResults: function () {
        for(var i= 0 ; i<14 ; i++) {
        this.Arr1.push(this.averagePurchased());
    }  
    }
};
Lima.finalResults();
//  creating unordered list
var x = document.getElementById('unorderedList');
var y = document.createElement('h2');
x.appendChild(y);
y.textContent = 'Lima';

var list = document.createElement('ul');
x.appendChild(list);
var strFlag = 'am'; 
for (var i =0 ; i<14;i++){
    var list_ = document.createElement('li');
    list.appendChild(list_);
    j = i+6;
    if(j>=12)strFlag='pm';
    if(j>12){j-=12;}
    list_.textContent = j+strFlag+': '+ Lima.Arr1[i] +' cookies';
}
//  creating total 
var summLima = 0 ;
for(var j= 0 ; j< Lima.Arr1.length; j++) {
    summLima += Lima.Arr1[j];
}
var chList15 = document.createElement('li');
list.appendChild(chList15);
chList15.textContent = 'Total: ' + summLima  + ' cookies';
