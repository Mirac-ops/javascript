console.log("========================================");

// Divider ohne funktion:
const spacer = "=".repeat(20);
console.log(spacer, "Thema", spacer);

// Divider mit funktion
function divider(input) {
  const spacer = "=".repeat(20);
  console.log("\n" + spacer, input, spacer, "\n");
}

divider("pb-uebungen");

const persons = [
  { name: "John Doe", age: 35 },
  { name: "Jane Smith", age: 41 },
  { name: "Bob Johnson", age: 28 },
  { name: "Mary Williams", age: 67 },
  { name: "Tom Brown", age: 59 },
];

const names = persons.map((person) => {
  return person.name + person.age;
});

console.log(names);

divider("pb-uebungen");

const woerter = ["hallo", "du", "ich", "er", "dort", "hier"];
const longWord = woerter.filter((wort) => {
  return wort.length >= 2;
});

console.log(longWord);

divider("pb-uebungen");



const products = [
  {
    marke: "Apple",
    prod: "Iphone",
    gb: 256,
    preis: 700,
    rate: 5.0,
  },
  {
    marke: "Samsung",
    prod: "Galaxy S21 Ultra",
    gb: 128,
    preis: 500,
    rate: 4.9,
  },
  {
    marke: "Huawei",
    prod: "Yui",
    gb: 32,
    preis: 400,
    rate: 4.4,
  },
];


console.log(products)


divider("pb-uebungen");



const overview = {
    manufactorer: "Ferrari",
    assembly: "Maranello",
    country: "Italy"
};

const body = {
    class: "Sports car",
    doors: "Butterfly"
};

const enzo = {...overview,
             ...body,
            production: "2002" };

console.table(enzo);
    
    
divider("pb-uebungen");



const family = 
[

  {name:"Johnson", age:67},
  {name : 'Jane',age: 55},
  {name: 'Kenan', age: 15},
  {name: 'Cem', age: 24},
  {name: 'Cenk', age: 14},
  {name: 'Tolga', age: 18},
  {name: 'Mert', age: 33},
  {name: 'Ayhan', age: 88},

];

const family2 = family.filter(persons => 
  
  {
    return persons["age"] > 19;
  });

console.log(family)


divider("pb-uebungen");




const obst = ['Apfel','Birnen','Bananen'];
const gemuese = ['Moehren','Sellerie','Kohl'];
const brot = ['Graubrot','Schwarzbrot','Volkornbrot'];
const klamotten = ['Hose','T-Shirt','Pullover'];
klamotten.push('Socken');

const einkaufsliste = [...obst, ...gemuese, ...brot, ...klamotten];
einkaufsliste.push('Schuhe');
console.log(einkaufsliste[3].charAt().toUpperCase() + einkaufsliste[3].slice(1));
console.log(einkaufsliste[3].toString().toUpperCase());
console.log(einkaufsliste[3]); 
console.log(einkaufsliste);  
  
divider("pb-uebungen");


const persons2 = 

[
    {name: 'Max', alter: 25, corona: true},
    {name: 'Lisa', alter: 30, corona: true},
    {name: 'Anna', alter: 21, corona: false},
    {name: 'Tim', alter: 25, corona: true},
    {name: 'Jan', alter: 30, corona: false},
    {name: 'Hueseyin', alter: 45, corona: true},
    {name: 'Dirk', alter: 60, corona: true},
    {name: 'Umut', alter: 45, corona: true},

]; 

const corona = persons2.filter(person => person.corona === true);
console.log(corona); 


divider("pb-uebungen");



const data = 
[
  {
    "name": "De Niro",
    "country": "USA",
    "job": "Artist",
    "age": 78
  },
  {
    "name": "Arkin",
    "country": "Turkey",
    "job": "Artist",
    "age": "death"
  },
  {
    "name": "Arkin",
    "country": "Turkey",
    "job": "Artist",
    "age": 49
  },
  {
    "name": "Pacino",
    "country": "USA",
    "job": "Actor/Director",
    "age": 90
  },
  {
    "name": "Stallone",
    "country": "USA",
    "job": "Actor/Director",
    "age": 85
  },
  {
    "name": "Imirzalioglu",
    "country": "Turkey",
    "job": "Artist",
    "age": 49
  },
  {
    "name": "Garcia",
    "country": "USA",
    "job": "Artist",
    "age": 61,
  },
  {
    "name": "Sasmaz",
    "country": "Turkey",
    "job": "Artist",
    "age": 53
  },
  {
    "name": "Oezcivit",
    "country": "Turkey",
    "job": "Artist",
    "age": 28
  }
];

console.table(data);
