const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Sors une array qui contient le prénom et le nom des entrepreneurs ;

array_entr = [];
for(let i in entrepreneurs){
      array_entr.push({ first: entrepreneurs[i].first, last: entrepreneurs[i].last});
}
console.log("Un array avec leurs noms à tous et toutes :")
console.log(array_entr)

// Remplace dates par âge
array_age = [];
for(let i in entrepreneurs){

  array_age.push({ first: entrepreneurs[i].first, last: entrepreneurs[i].last, age: 2020 - entrepreneurs[i].year});
}

console.log("Ils auraient aujourd'hui :")
console.log(array_age)


// Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName


var array_new_keys_names = array_age.map( person => ({firstName:person.first, lastName:person.last, age:person.age }) );
console.log(array_new_keys_names)


// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
console.log("Né.e.s dans les 70's :")
for(let i in entrepreneurs){
  a = entrepreneurs[i].year
    if (a <= 1979 && a >= 1970){
      console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last + " est né en " + a);
    }
}