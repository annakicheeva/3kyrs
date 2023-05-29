const students = [
  { name: 'Peter', v: 5 }, //0 - редактирование не разрешено, 1 - разрешено.
  { name: 'Mark', v: 3 },
  { name: 'John', v: 4 },
  { name: 'Jane', v: 5 },
  { name: 'Tony', v: 4 },
];

const arr = students.map(students => students.v);
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sum/5);

