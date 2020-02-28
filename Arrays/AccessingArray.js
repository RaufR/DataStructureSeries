//below code demonstrate how to access an array within a for loop

var arr = [];
for (var i = 0; i < 100; ++i) {
  //will assign value from 1 to 100
  arr[i] = i + 1;
}

// below code demonstrate how to aceess an array with [] operator or index value of an array

var arr2 = [10, 2, 30, 4, 50];
console.log(arr2[0]); //10
console.log(arr2[1]); //2

// another way to access an array with for loop via length
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

for (var i = 0; i < arr3.length; ++i) {
  //will add up from 1 to 10
  sum += arr3[i];
}
console.log(sum); //55
