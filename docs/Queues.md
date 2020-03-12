# Queues

A queue is an example of a first-in, first-out (FIFO) data structure. Queues are used to
order processes submitted to an operating system or a print spooler, and simulation
applications use queues to model scenarios such as customers standing in the line at a
bank or a grocery store.

## Implementation

Implementing the Queue class using an array is straightforward. Using JavaScript arrays
is an advantage many other programming languages don’t have because JavaScript
contains a function for easily adding data to the end of an array, push(), and a function for
easily removing data from the front of an array, shift().

Lets begin to implement the Queue class

```js
function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

// enqueue() function add an element to the end
function enqueue(element) {
  this.dataStore.push(element);
}

// dequeue() function add an element to the end
function dequeue() {
  return this.dataStore.shift();
}

// front() function will return start element of the queue
function front() {
  return this.dataStore[0];
}

// back() function will return end element of the queue
function back() {
  return this.dataStore[this.dataStore.length - 1];
}

// toString() display all the elements in a queue
function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}

// empty() function let us know if the queue is empty or not
function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}
```

## How to use Queue

Lets test our previous queue implementation

```js
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");

console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());


// output
Meredith
Cynthia
Jennifer
Cynthia
Jennifer
Front of queue: Cynthia
Back of queue: Jennifer

```

## Example

Some example on how to use `queue`

### radix sort

`Radix sort` algorithm is a non-comparison based sorting algorithm, it can be grouped by number place and position.
`Radix sort` works by making two passes over data set, in this case the set of integers from 0 to 99.
The first pass sort the numbers based on the 1s digit, and the second pass sort number based on the 10s digit. Each number is placed in a bin.

Example number:

```js
32, 2, 9, 91, 46, 85, 15, 92, 35, 31, 22;
```

!> `radix sort` algorithm at first defined some empty bin, each bin have a allocated number 0 to 9. Lets demonstrate empty bin by defining empty array.

```js
[[], [], [], [], [], [], [], [], [], []];
```

Now sort the number based on 1s digit

!> 1s digit = first number from the right.  
In number 32, 1s digit is 2 and 10s digit is 3.  
In number 2, 1s digit is 2, and there is no 10s digit.  
In number 578, 1s digit is 8, 10s digit is 7, 100s digit is 8.

So in given number our bin will look like.

##### Based on 1s number:

```js
[[], [31, 91], [32, 2, 92, 22], [], [], [85, 15, 35], [46], [], [], [9]];
```

Now lets sort the number based on 1s bin

```js
31, 91, 32, 2, 92, 22, 85, 15, 35, 46, 9;
```

##### Based on 10s number:

!> Remember, 1s digits are already sorted and we will exclude them from 10s bin

final 10s bin without 1s digit should be look like should be

```js
31, 91, 32, 92, 22, 85, 15, 35, 46;
```

Lets sort 10s bin.

```js
[[], [15], [22], [31, 32, 35], [46], [], [], [], [85], [91, 92]];
```

So based on 10s bin and 1s bin our final sorted list should look like.

```js
// 1s bin
2, 9;
// 10s bin
15, 22, 31, 32, 35, 46, 85, 91, 92;
// combine both bin together
2, 9, 15, 22, 31, 32, 35, 46, 85, 91, 92;
```

Implementation.

!> We need some helper function at first.

First lets create a function that distribute number by the place (1s to 10s) digit:

```js
function distribute(nums, queues, n, digit) {
  // digit represents either the 1s
  // or 10s place
  for (var i = 0; i < n; ++i) {
    if (digit == 1) {
      queues[nums[i] % 10].enqueue(nums[i]);
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
  }
}
```

Below function will collect number from queue

```js
function collect(queues, nums) {
  var i = 0;
  for (var digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}
```

##### Complete Code

```js
// function  distribute number by the place (1s to 10s) digit
function distribute(nums, queues, n, digit) {
  // digit represents either the 1s
  // or 10s place
  for (var i = 0; i < n; ++i) {
    if (digit == 1) {
      queues[nums[i] % 10].enqueue(nums[i]);
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
  }
}

// Below function will collect number from queue
function collect(queues, nums) {
  var i = 0;
  for (var digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

// Function will display arr
function dispArray(arr) {
  for (var i = 0; i < arr.length; ++i) {
    console.log(arr[i] + " ");
  }
}
```

##### Use case/ Main function

```js
var queues = [];
for (var i = 0; i < 10; ++i) {
  queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
  nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);


// output
Before radix sort:
45 72 93 51 21 16 70 41 27 31
After radix sort:
16 21 27 31 41 45 51 70 72 93
Before radix sort:
76 77 15 84 79 71 69 99 6 54
After radix sort:
6 15 54 69 71 76 77 79 84 99
```

### Assign dance partner
