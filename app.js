// Task 1

var itemsArray = [
    {name:"juice",price:50, quantity:3},
    {name:"cookie",price:30, quantity:9},
    {name:"shirt",price:880, quantity:1},
    {name:"pen",price:100, quantity:2}
];

let totalPrice = 0;
itemsArray.forEach(element => {
    let itemPrice = element.price * element.quantity
    totalPrice += itemPrice;
});
console.log(totalPrice)

// Task 2
var obj={
    name:{firstName:'Absheer', lastName:'Hussain'},
    email:'absheerhussain@gmail.com', 
    password:'Absheer123', 
    age:'22',
    gender:'male', 
    city:'Karachi', 
    country:'Pakistan',
}
if (obj.hasOwnProperty('age') && obj.hasOwnProperty('country')) {
    console.log('<p> Age and Country is available in obj.</p>');
    
    if (obj.name.hasOwnProperty('firstName') && obj.name.hasOwnProperty('lastName')) {
        console.log('<p> First Name and Last Name is available in obj.</p>');
    }
}


//Task 3
function Record(name, age,city) {
    this.userName = name;
    this.userAge = age;  
    this.userCity = city;
}

let rec1 = new Record('Absheer', 'Karachi', 22);
let rec2 = new Record('Hussain', 'Lahore', 24);

console.log(rec1);
console.log(rec2);




// Task 4

let records = [];

const userInfo = () => {

    var gender = 'Both';
    var inputElements = document.getElementsByClassName('gender');
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            gender = inputElements[i].value;
            break;
        }
    }
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var edu = document.getElementById('edu').value;


    var res = new InfoConstructor({ name: name, gender: gender, address: address, edu: edu })
    records.push(res)
    console.log(records)
}

function InfoConstructor({ name, gender, address, edu }) {
    this.userName = name;
    this.userGender = gender;
    this.userAddress = address;
    this.userEducations = edu;
}

const calculatePop = () => {
    let resText = `Population of your area is ${records.length}`;
    document.querySelector('.result').innerText = resText;
}

document.getElementById('btn').addEventListener('click', userInfo);
document.getElementById('check').addEventListener('click', calculatePop);
