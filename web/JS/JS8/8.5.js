const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
  	if (fn(arr[i]) <= 3){
  		newArray.push(0);
  	} else {
  		newArray.push(1);
  	}
  }
  return newArray;
}
const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});
console.log(lenArray);
