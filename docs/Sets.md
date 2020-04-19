# Sets

Sets data structure mainly a collection of unique elements. Very useful when we have to work with unique data.

!> A set consists of an unordered collection of members. Members can be organized in any way but have to be unique

Example

```js
{
  5, 7, 4, 14, 181, 1;
}
```

## Implementation

A sets data structure have 3 main operation:

##### 1. Intersection: Duplicate a sets into a new sets

##### 2. Union: Combine two sets into one sets

##### 3. Difference: Create a new sets with only unique elements in multiple sets

Full Code

```js
function Set() {
  this.dataStore = [];
  this.show = show;
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.contains = contains;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
}

// add members to the set if the member do not exist
function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}

// Remove a member from sets
function remove(data) {
  var pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  } else {
    return false;
  }
}

// return current size of sets
function size() {
  return this.dataStore.length;
}

// return full sets
function show() {
  return this.dataStore;
}

// return boolean depends on member exist on set or not
function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
}

/* Union */
function union(set) {
  // create a new set
  var tempSet = new Set();
  // add all member from previous set to the new set
  for (var i = 0; i < this.dataStore.length; ++i) {
    tempSet.add(this.dataStore[i]);
  }
  //   check the difference between members
  for (var i = 0; i < set.dataStore.length; ++i) {
    if (!tempSet.contains(set.dataStore[i])) {
      tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  // returning new set
  return tempSet;
}

/* Intersection */
function intersect(set) {
  var tempSet = new Set();
  // checking first sets members can be added to second set
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

/* Subset */

function subset(set) {
    // using size fuction to check current set and passed sets size
    if (this.size() > set.size()) {
        return false;
    }
    // check the memebers difference between two sets
    else {
        for each (var member in this.dataStore) {
            if (!set.contains(member)) {
                return false;
            }
        }
    }
    return true;
}

/* Difference */
function difference(set) {
    var tempSet = new Set();
    // returning only unique members in first set
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}


```
