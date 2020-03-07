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
