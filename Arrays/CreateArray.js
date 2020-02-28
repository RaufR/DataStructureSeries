// below code will create an empty array
var arrayExample1 = [];

// below code will create an array with elements
var arrayExample2 = [1, 2, 3, 4, 5];

// below code will create array by constructor
var arrayExample3 = new Array();

// below code will create array by constructor with defined length
var arrayExample4 = new Array(10);

// below code will create an array by constructor with elements
var arrayExample5 = new Array(1, 2, 3, 4, 5);

// below code demonstrate how to verify an array
var arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr)); //'true'

// below code demonstrate how to create an array from string
var str = "the quick brown fox jumped over the lazy dog";
var wrd = str.split(" "); //split str via empty space

for (var i = 0; i < wrd.length; ++i) {
  console.log(wrd[i]);
}
