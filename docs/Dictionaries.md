# Dictionaries

Dictionary data structure store data as `key-value` pair.

!> Javascript object class is designed to operate as a dictionary.

## Implementation

Below implementation of dictionary class is using an array rather than a object, if you remember! everything in javascript is object, so in array is also an object in js engine.

##### Main

```js
function Dictionary() {
  this.datastore = new Array();
}
```

##### Add

The first `add()` function have two parameter, a `key` and a `value`. The key is the index for the value

```js
function add(key, value) {
  this.datastore[key] = value;
}
```

##### Find

This function will take key as a arguments and return value.

```js
function find(key) {
  return this.datastore[key];
}
```

##### Remove

For removing data, we will use `delete()` function from javascript. This function will take the key as an arguments

```js
function remove(key) {
  delete this.datastore[key];
}
```

##### View

For viewing all data into a dictionary we will use this function

```js
function showAll() {
    for each (var key in Object.keys(this.datastore)) {
    console.log(key + " -> " + this.datastore[key]);
}
}
```

###### Full code

```js
function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

// add element
function add(key, value) {
    this.datastore[key] = value;
}

// find element
function find(key) {
    return this.datastore[key];
}

// add element
function remove(key) {
    delete this.datastore[key];
}
// view element
function showAll() {
    for each (var key in Object.keys(this.datastore)) {
    console.log(key + " -> " + this.datastore[key]);
}
}
```

##### Testing

```js
import("Dictionary.js");
var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();


// Output
David's extension: 345
Mike -> 123
Cynthia -> 456
```

## Helping functions

Lets add some more helping functions in dictionary class.

##### count()

Return number of entry in a dictionary

```js
function count (){
    var n =0;
    for each(var key in Object.keys(this.datastore)){
        ++n
    }
    return n
}
```

!> We can not use `length()` for counting, because length does not work with string keys.

##### clear ()

Will delete all element in a dictionary

```js
function clear () {
    for each (var key in Object.keys(this.datastore)){
        delete this.datastore[key]
    }
}
```
