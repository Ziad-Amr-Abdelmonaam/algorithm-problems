function binarySearch(array, key) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if ((key == array[mid])) {
      return mid;
    }
    if (key > array[mid]) {
      low = mid + 1;
    } else high = mid - 1;
  }
  return -1;
}
let arr = [1, 3, 5, 7, 8, 9];
console.log( binarySearch(arr, 7));

