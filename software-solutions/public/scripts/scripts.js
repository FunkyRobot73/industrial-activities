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

function printArray(arr) {
  for (let q = 0; q < array.length; q++) {
    console.log(array[q]);
    
  }
}

document.getElementById("demo-01").innerHTML = (bubblesort(array01));
document.getElementById("demo-02").innerHTML = (bubblesort(array02));

document.getElementById("demo-03").innerHTML = (sumNumbers(array01));
document.getElementById("demo-04").innerHTML = (sumNumbers(array02));

document.getElementById("demo-05").innerHTML = (printArray(array01));
document.getElementById("demo-06").innerHTML = (printArray(array02));