# List

Lists are one of the most common organizing tools people use in their day-to-day lives.
We have to-do lists, grocery lists, top-ten lists, bottom-ten lists, and many other types.
Our computer programs can also use lists, particularly if we only have a few items to
store in list form.

!> List can be implement as an ADT (abstract data type)

## Implement List

In order to implement an ADT we have to give definition of the list including all properties as well as all operations.

!> A list is an ordered sequence of data. Each data item stored in a list is called an
element. In JavaScript, the elements of a list can be of any data type. There is no
predetermined number of elements that can be stored in a list, though the practical limit will be
the amount of memory available to the program using the list.

A list with no element describe as `EmptyList`, and number of elements refers as `Lenght`

List ADT does not specify a storage function for a list, but for the implementation we will use an `array` named `dataStore`

Below table demonstrate complete List ADT

| Name         |                    Operation                     | Type     |
| ------------ | :----------------------------------------------: | :------- |
| `listSize`   |            Number of elements in list            | property |
| `pos`        |             Current position in list             | property |
| `length`     |      Returns the number of elements in list      | property |
| `clear`      |          Clears all elements from list           | function |
| `tostring`   |      Returns string representation of list       | function |
| `getElement` |       Returns element at current position        | function |
| `insert`     |    Inserts new element after existing element    | function |
| `append`     |         Adds new element to end of list          | function |
| `remove`     |            Removes element from list             | function |
| `front`      |  Sets current position to first element of list  | function |
| `end`        |  Sets current position to last element of list   | function |
| `prev`       |     Moves current position back one element      | function |
| `next`       |    Moves current position forward one element    | function |
| `currPos`    |       Returns the current position in list       | function |
| `moveTo`     | Moves the current position to specified position | function |

### Class implementation

```js
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // initializes an empty array to store list elements
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}
```

### Add element to list

Remember append function, this function will add elements to our new list

```js
function append(element) {
  this.dataStore[this.listSize++] = element;
}
```

### Find and remove elements from list

For implement `remove()` function we have to define the `find()` function at first to find element in list
Lets implement functions for removing element from list

```js
function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}
```

Below remove function use the position returned by find() function. After elements removed listSize will decrease.

```js
function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}
```

### List size

The `length()` function will return number of elements in list

```js
function length() {
  return this.listSize;
}
```

### Retrieve list element

Lets create a function allow us to view list elements.

```js
function toString() {
  return this.dataStore;
}
```

### Insert element to list

Below function will insert element into list

```js
function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}
```

`insert()` uses the helper function `find()` to determine the correct insertion position
for the new element by finding the element specified in the after argument. Once this
position is found, we use `shift()` to insert the new element into the list. Then we
increment listSize by 1 and return true to indicate the insertion was successful.

### Remove all element from list

Below function will remove all elements from list

```js
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}
```

### Search element in array

Below function will return boolean value based on a particular element is in list or not.

```js
function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}
```

### Traversing a List

This final set of functions allows movement through a list, and the last function,
getElement(), displays the current element in a list:

```js
function front() {
  this.pos = 0;
}
function end() {
  this.pos = this.listSize - 1;
}
function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}
function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
}
function currPos() {
  return this.pos;
}
function moveTo(position) {
  this.pos = position;
}
function getElement() {
  return this.dataStore[this.pos];
}
```

## Iterating through list

An iterator allows us to traverse a list without referencing the internal storage
mechanism of the List class. The functions front(), end(), prev(), next(), and currPos
provide an implementation of an iterator for our List class. Some advantages to using
iterators over using array indexing include:

1. Not having to worry about the underlying data storage structure when accessing
   list elements.
2. Being able to update the list and not having to update the iterator, where an index
   becomes invalid when a new element is added to the list.
3. Providing a uniform means of accessing elements for different types of data stores
   used in the implemenation of a List class.

With these advantages in mind, here is how to use an iterator to traverse through a list:

```js
for (names.front(); names.currPos() < names.length(); names.next()) {
  print(names.getElement());
}
```

The for loop starts by setting the current position to the front of the list. The loop
continues while the value of currPos is less than the length of the list. Each time through
the loop, the current position is moved one element forward through the use of the
next() function.

.
We can also traverse a list backward using an iterator. Here is the code:

```js
for (names.end(); names.currPos() >= 0; names.prev()) {
  print(names.getElement());
}
```

The loop starts at the last element of the list and moves backward using the prev()
function while the current position is greater than or equal to 0.
Iterators are used only to move through a list and should not be combined with any
functions for adding or removing items from a list.
