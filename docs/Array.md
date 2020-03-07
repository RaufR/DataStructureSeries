# Array

`Array` is the most common data structure in computer programming. Every
programming language includes some form of array. Because arrays are built-in, they are
usually very efficient and are considered good choices for many data storage purposes.
In this section we explore how arrays work in JavaScript and when to use them.

## Create an array

There is several ways to create an array.

##### Create an empty array by [] operator

```js
var arr = [];
```

##### Create an array with elements

```js
var arr = [1, 2, 3, 4, 5];
```

##### Create an empty array with array constructor

```js
var arr = new Array();
```

##### Create an array constructor with elements

```js
var arr = new Array(1, 2, 3, 4, 5, 6);
```

##### Create an array constructor with defined length

```js
var arr = new Array(10);
```

!> you can verify Javascript array via below code.

```js
var arr = [7, 1, 33, 55];
print(Array.isArray(arr));

//output
true;
```

## Create array from string

You can also create array from a string

```js
var str = "the quick brown fox jumped over the lazy dog";
var wrd = str.split(" ");
for (var i = 0; i < wrd.length; ++i) {
  console.log(wrd[i]);
}

//output
the;
quick;
brown;
fox;
jumped;
over;
the;
lazy;
dog;
```

## Access and writing array

The best way to access an array is using for loop.

##### Access an array with for loop

```js
var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = i + 1;
}
```

Also you can access an array by using `[]` operator

##### Access an array via [] operator

```js
var numbers = [1, 2, 3, 4, 5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
print(sum);

//output
15;
```

## Array Mutator function

Javascript provide some mutator function, which allow you to modify the array content without writing large js.

### Adding Element to array

There is two different mutator function can be used to add elements to an array:

1. push()
2. unshift()

#### push()

Example

```js
var arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

//output
[1, 2, 3, 4, 5, 6];
```

!> Adding data to the beginning of an array is much harder than adding data to the end
of an array.

##### Below code demonstrate how to do that

```js
var arr = [2, 3, 4, 5];
var newEl = 1;
var N = arr.length;
for (var i = N; i >= 0; --i) {
  arr[i] = arr[i - 1];
}
arr[0] = newEl;
console.log(arr);
```

```output
[1,2,3,4,5]
```

#### unshift()

There is an alternative solution. Using `unshift()` to add a elements to the beginning of the array

```js
var arr = [2, 3, 4, 5];
arr.unshift(1);
console.log(arr);
```

Output

```output
[1,2,3,4,5]
```

### Removing Element to array

There are two different mutator function to do that

1. pop()
2. shift()

#### pop()

For removing element from the beginning of an array you can use `pop()` mutator function
Example

```js
var arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr);

//output
[1, 2, 3, 4];
```

#### shift()

For removing element from the end of an array you can use `shift()` mutator function
Example

```js
var arr = [1, 2, 3, 4, 5];
arr.shift();
console.log(arr);

//output
[2, 3, 4, 5];
```

### Others

#### splice()

You can use `splice()` for adding or removing elements from middle of an array
To add elements to an array using splice(), you have to provide the following
arguments:

1. The starting index (where you want to begin adding elements)
2. The number of elements to remove (0 when you are adding elements)
3. The elements you want to add to the array

Example

```js
var nums = [1, 2, 3, 7, 8, 9];
var newElements = [4, 5, 6];
nums.splice(3, 0, newElements);
console.log(nums);

//output
[1, 2, 3, 4, 5, 6, 7, 8, 9];
```

Here is an example of using splice() to remove elements from an array

```js
var nums = [1, 2, 3, 100, 200, 300, 400, 4, 5];
nums.splice(3, 4);
console.log(nums);

//output
[1, 2, 3, 4, 5];
```

#### reverse()

Reverses the order of the elements of an array. Here
is an example of its use:

```js
var nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums);

//output
[5, 4, 3, 2, 1];
```

#### sort()

The mutator function for this
task, sort(), works very well with strings:

```js
var names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
nums.sort();
console.log(nums);

//output
Bryan, Clayton, Cynthia, David, Mike, Raymon;
```

!>But sort() does not work so well with numbers:

```javascript
var nums = [3, 1, 2, 100, 4, 200];
nums.sort();
console.log(nums);

//output
1, 100, 2, 200, 3, 4;
```

!>The sort() function sorts data lexicographically, assuming the data elements are strings,
even though in the preceding example, the elements are numbers. We can make the
sort() function work correctly for numbers by passing in an ordering function as the
first argument to the function, which sort() will then use to sort the array elements.

```js
function compare(num1, num2) {
  return num1 - num2;
}
var nums = [3, 1, 2, 100, 4, 200];
nums.sort(compare);
console.log(nums);

//output
1, 2, 3, 4, 100, 200;
```

## Array Accessor functions

Accessor functions can be used to access array elements.
one of the most used Accessor function is `indexOf()`. Lets take a look

#### indexOf()

Example

```js
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
//  output: 1
```

## Array iterator functions

The final set of array functions we examine are iterator functions. These functions apply
a function to each element of an array, either returning a value, a set of values, or a new
array after applying the function to each element of an array.

### Non duplication Iterator functions

This group of iterator functions do not generate a new array; instead,
they either perform an operation on each element of an array or generate a single value
from an array.

#### forEach()

This function takes a function as an argument
and applies the called function to each element of an array.

Example

```js
function square(num) {
console.log(num, num * num);
}
var nums = [1,2,3,4,5];
console.log(nums.forEach(square));

//output
1 1
2 4
3 9
4 16
5 25

```

#### every()

Applies a Boolean function to an array and returns
true if the function can return true for every element in the array.

Example

```js
function isEven(num) {
return num % 2 == 0;
}
var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if (even) {
console.log("all numbers are even");
}
else {
console.log("not all numbers are even");
}

//output
all numbers are even

```

#### some()

Will take a Boolean function and return true if at least one of the
elements in the array meets the criterion of the Boolean function.

Example

```js
function isEven(num) {
return num % 2 == 0;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if (someEven) {
console.log("some numbers are even");
}
else {
console.log("no numbers are even");
}
nums = [1,3,5,7,9];
someEven = nums.some(isEven);
if (someEven) {
console.log("some numbers are even");
}
else {
console.log("no numbers are even");
}

//output
some numbers are even
no numbers are even

```

### Duplication iterator functions

There are two iterator functions that return new arrays: `map()` and `filter()`.

#### map()

The `map()`function works like the forEach() function.

```js
function curve(grade) {
  return (grade += 5);
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades);

//output
82, 70, 86, 97, 88;
```

#### filter()

Work similar as `every()` function

Example

```js
function passing(num) {
return num >= 60;
}
var grades = [];
for (var i = 0; i < 20; ++i) {
grades[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades.filter(passing);
console.log("All grades: ")
console.log(grades);
console.log("Passing grades: ");
console.log(passGrades);

//output
All grades:
39,43,89,19,46,54,48,5,13,31,27,95,62,64,35,75,79,88,73,74
Passing grades:
89,95,62,64,75,79,88,73,74
`
```

## Multi-Dimensional Array

In Javascript array only one-dimensional, we can create multi dimensional array by creating arrays of arrays.

### Create multi dimensional array

A better way to create a two dimensional array in javascript.

```js
Array.matrix = function(numrows, numcols, initial) {
  var arr = [];
  for (var i = 0; i < numrows; ++i) {
    var columns = [];
    for (var j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
};
```

Now lets test the array we have created.

```js
var nums = Array.matrix(5, 5, 0);
print(nums[1][1]); // displays 0
var names = Array.matrix(3, 3, "");
names[1][2] = "Joe";
print(names[1][2]); // display "Joe"
```

We can also create a two-dimensional array and initialize it to a set of values in one line:

!> For small data sets, this is the easiest way to create a two-dimensional array

```js
var grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89]
];
print(grades[2][2]); // displays 89
```

### Process two-dimensional array elements

There are two fundamental pattern used to process the elements of two-dimensional array.

1. Process array elements by column
2. Process array elements by row

##### Process array elements by Column

!> For columnar processing the outer loop will move through the rows and inner loop will process the columns

```js
var grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89]
];
var total = 0;
var avg = 0.0;

for (var row = 0; row < grades.length; row++) {
  for (var col = 0; col < grades[row].length; col++) {
    total += grades[row][col];
  }

  avg = total / grades[row].length;
  console.log("Student  " + parseInt(row + 1) + "average " + avg.toFixed(2));

  total = 0;
  avg = 0.0;
}

// output
Student 1 average: 81.33
Student 2 average: 79.67
Student 3 average: 91.33


```

##### Process array elements by row

!> To perform row-wise way, we simply have to flip the for loops so that the outer loop control the columns and the inner loops will control the rows.

Example:

```js
var grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89]
];
var total = 0;
var avg = 0.0;
for (var col = 0; col < grades.length; ++col) {
  for (var row = 0; row < grades[col].length; ++row) {
    total += grades[row][col];
  }
  avg = total / grades[col].length;
  console.log("Test " + parseInt(col + 1) + " average: " + avg.toFixed(2));
  total = 0;
  avg = 0.0;
}


//output
Test 1 average: 85.33
Test 2 average: 84.33
Test 3 average: 82.67

```

### Jagged Array

Jagged array is the array where rows in the array have different element.

```js
var jaggedArray = [
  [89, 77],
  [76, 82, 81],
  [91, 94, 89, 99]
];
```

!>Many programming languages have
problems handling jagged arrays, but JavaScript does not since js can compute the
length of any row

Example:

```js
var grades = [
  [89, 77],
  [76, 82, 81],
  [91, 94, 89, 99]
];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log(
    "Student " + parseInt(row + 1) + " average: " + average.toFixed(2)
  );
  total = 0;
  average = 0.0;
}

//Output
Student 1 average: 83.00
Student 2 average: 79.67
Student 3 average: 93.25
```

## Arrays of Objects

Array can consist of objects and this is most common situation when you are dealing with data from an API.

```js
let products = [
  {
    name: "chair",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unit_price: 123.75
  },
  {
    name: "sofa",
    inventory: 2,
    unit_price: 399.5
  }
];
function listProducts(prods) {
  let product_names = [];
  for (let i = 0; i < prods.length; i += 1) {
    product_names.push(prods[i].name);
  }
  return product_names;
}
console.log(listProducts(products));

function totalValue(prods) {
  let inventory_value = 0;
  for (let i = 0; i < prods.length; i += 1) {
    inventory_value += prods[i].inventory * prods[i].unit_price;
  }
  return inventory_value;
}
console.log(totalValue(products));

//output
["chair", "table", "sofa"];
2266.45;
```

## Arrays in Objects

....coming soon....
