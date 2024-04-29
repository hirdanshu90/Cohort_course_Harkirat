// Map function
const input = [1, 2, 3, 4, 5];

function transform(i) {
  return i * 2;
}
// On input array, map function used transform function.
const ans = input.map(transform);
console.log(ans);

// OR can write directly inside the map function, another function to complete our task.

const ans2 = input.map(function (i) {
  return i * 3;
});

console.log(ans2);

// Filtering.
// Filter out even values
// We pass it inside the filter function, no need to apply for loop or take any particular element, filter function will take care.
const arr_input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const even_arr = input.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(even_arr);
