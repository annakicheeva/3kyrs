let id = Symbol("id");
let bank = {
  name: "Василий",
  surname: "Петров",
  age: 30,
  [id]: 11
};

let clinic = {
  name: "Николай",
  job: "Врач",
  [id]: 3
};

let citizen = {
  name: "Иван",
  surname: "Васильев",
  city: "Москва",
  [id]: 1532
};

for (let key in bank) console.log(key); 
for (let key in clinic) console.log(key);
for (let key in citizen) console.log(key);
console.log( "Напрямую: " , clinic[id] );
