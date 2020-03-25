
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
//Object destructuring 

const person = {
    name:'ali',
    age:75,
    color: 'White',
    size: 'M',
    location:{
        city:'phili',
        temp: 92
    }
};

//1)
//console.log(`${person.name} is ${person.age}`);
//2)
// const name = person.name; // TAG: LABEL1
// const age = person.age; // TAG: LABEL2
// console.log(`${name} is ${age}`);
// 3)Object destructuring , in ES6 

const {name, age} = person; // equivalent to LABEL1 & LABEL2 
console.log(`${name} is ${age}`);

const {city, temp: temperature} = person.location; //rename temp to temperature 
console.log(`${city} is ${temperature}`);

//adding default 
const {color = 'Anonynouse'} = person; // equivalent to LABEL1 & LABEL2 
console.log(`${color} isssss`);

const {size : Koulour = 'L'} = person; // equivalent to LABEL1 & LABEL2 
console.log(`${Koulour} isssss`);


const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher:{
        name:'Penguin'
    }
};

const {name: publisherName = 'Self publish'} = book.publisher;

console.log(publisherName);


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
//Array destructuring 

const address= ['Juniper Street', 'Phili', 'Penn', '19147'];

const [street, ciity, state, zip]= address; //its constructed from position not name 

console.log(`You are in ${street} ${zip} `);

const [street2, ciity2, state2 ]= address; //not necessary to include all 

const [, , state3 ]= address; //skip first two items, bring me next one  


const Newaddress= [];

//perfectly valid 
const [, , state4= 'New York' ]= Newaddress; //skip first two items, bring me next one  
console.log(`You are in ${state4} `);


const item = ['Cofee (hot)', '$2.00', '$2.50' ,'$2.75'];
const [itemThing,,price] = item;

console.log(`A medium ${itemThing} costs ${price} `);
