// Implement a linear search algorithm
const data = [3, 1, 12, 5, 4, 8, 22];
function linearSearch(array, target) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return i;
    }
  }
  return -1;
}

// Implement a binary search algorithm

function binarySearch(array, target) {
  let low = 1;
  let high = array.length;

  if (array[0] == target) return 0;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] == target) {
      return array[mid];
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const binaryData = [1, 4, 12, 15, 21, 28, 32];

// console.log(linearSearch(data, 12));
console.log(binarySearch(binaryData, 28));
