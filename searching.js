// Implement a linear search algorithm

function linearSearch(array, target) {
  for (var i=0; i<array.length; i++) {
    if (array[i] == target) {
      return i;
    }
  } return -1;
}

// Implement a binary search algorithm

function binarySearch(array, target) {
  
}

const data = [3, 1, 12, 5, 4, 8, 22]
const sorted = [1, 4, 12, 15, 21, 28, 32]

console.log(linearSearch(data, 12));