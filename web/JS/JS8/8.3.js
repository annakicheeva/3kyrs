const admins = [
  { name: 'Peter', edit: 0 }, //0 - редактирование не разрешено, 1 - разрешено.
  { name: 'Mark', edit: 1 },
  { name: 'John', edit: 1 },
  { name: 'Jane', edit: 0 },
  { name: 'Tony', edit: 1},
];
const admins2 = admins.filter(admins => admins.edit == 1);
console.log(admins2.map(admins => admins.name));




