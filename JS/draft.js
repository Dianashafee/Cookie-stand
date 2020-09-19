
//  adding the form 

var form = document.getElementById('Add-information');
form.addEventListener('submit', function(event){ event.preventDefault();

    
console.log(event);
console.log('location ...' , event.target.locationField.value);

var location = event.target.locationField.value;
console.log('location is ...', location);


var minField = event.target.minField.value;
console.log('Min value is ...', minField);

var maxField = event.target.maxField.value;
console.log('Max value is ...', maxField);

var avrField = event.target.avrField.value;
console.log('average is ...', avrField);


var addedInfo = new Cafe(name, MinHourlyCustomers, MaxHourlyCustomers, AverageCookiesPerCustomer);

// var container = document.getElementById('body-page');
// container.innerHTML= ' '; 
// for (var i = 0; i < Location_.length; i++) {
//     Location_[i].render();
// }




});

//  the form should work ! 