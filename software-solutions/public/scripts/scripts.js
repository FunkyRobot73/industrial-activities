function bubblesort(array){
  let complete = false;
  while(!complete){
      complete = true;
      for(let i = 1; i< array.length; i++){
          if(array[i -1] > array[i]){
              complete = false;
              let tmp = array[i-1];
              array[i-1] = array[i];
              array[i] = tmp;
          }
      }
  }
  return array;
}


function sumNumbers(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    if(array[index] % 5 == 0) {
      sum += array[index];
    }
  }
  return sum;
}

let array01 = [25,5,8,35,4,9,12,1,3,10]
let array02 = [5,8,4,9,12];

function printArray(array) {
  for (let q = 0; q < array.length; q++) {
    console.log(`Here is a single element in the array: ${array[q]}`);
    
  }
}

console.log(`The Array is now sorted => ${bubblesort(array01)}`);
console.log(`The Array is now sorted => ${bubblesort(array02)}`);

console.log(`Sum of all numbers that are is divisible by 5: ${sumNumbers(array01)}`);
console.log(`Sum of all numbers that are is divisible by 5: ${sumNumbers(array02)}`);

printArray(array01)
printArray(array02)