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

### Data sort

### Assign dance partner
