# Trees

Trees are non-linear, hierarchical data structures, commonly used in software engineering.
There are several kinds of Tree data-structure, but most used and common is `Binary-Tree`

Usually, tree consists set of nodes connected via edges. A good example of a tree can be file system data.

#### Common Terms

`Binary-Tree` more specified by, restriction of child node by two. A node can only have maximum two child.

`Path` = The specific way/nodes to access from one node to another.

`Tree-Traversal` = Visiting all nodes in a particular way.

`Root-Node` = First node of a Tree.

`Key` = Value of each node.

`Level` = Specific break down of a tree.

![alt text](_media/tree.jpg)

## Implementation

A tree class implement with some sub-functions.

1. insert

2. travers

3. search

4. remove

#### Basic structure

Before moving toward implementing insert function, lets build the node object first. This object hold all specific information for each node, and maintaining 3 parameter.

```js
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
// display data inside
function show() {
  return this.data;
}
```

Now lets move forward to constructor.

```js
function BinarySearchTree() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
}
```

### insert()

After finishing our basic structure, we are now prepared to insert some data into our tree.

So the algorithm should be:

1. `root node === current node`

2. `if (datavalue in inserted node > datavalue of current node) set the new current node as left child, else skip step 4`

3. `if (left child value === null) insert the value and exit, else go on`

4. `current node == right child`

5. `if (value of right child === null ) insert new node and exit, else go on`

Code:

```js
function insert(data) {
  var n = new Node(data, null, null);

  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}
```

### traverse()

The reason for traversing, is displaying data into multiple orders.

There are three traversing function:

1. `inOrder` = Visit all the node in ascending order via node key value
2. `preOrder` = Will visit via node order (root => parent => children => left => right)
3. `postOrder` = Will visit (left child => root and then right child => root )

Code

```js
// inOrder using recurssion
function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    node.show();
    inOrder(node.right);
  }
}

/*difference between inOrder and preOrder is the line order,
 apart of that, both of the functions are identical. */

// preOrder using recurssion
function preOrder(node) {
  if (!(node == null)) {
    node.show();
    preOrder(node.left);
    preOrder(node.right);
  }
}

// postOrder
function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    node.show();
  }
}
```

### search()

There can be three type of search in a binary search tree.

1. Min Value
2. Max Value
3. Specific Value

Min and max value searching is relatively easy, all min value can be found via traversing left nodes and max value can be found via traversing right node.
Specific value searching done via comparison of all nodes.

Code

```js
// MinValue Search
function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

// MaxValue Search
function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

// Specific value search
function find(data) {
  var current = this.root;
  while (current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current == null) {
      return null;
    }
  }
  return current;
}
```

### remove()

!> Removing node from a tree is way more complex than any other operation.

Removing node without child is easy, but removing node with child is complex. The safest way to do this operation is using `recurssion`

If the removed node is a LeafNode, the parent node pointer should set as a null.

If the removed node has one children that adjust the pinter and if there is multiple children ,then compare the value between children and adjust pointer accordingly.

A function will find the smallest value of a subtree, then use the value and delete the node.

Code

```js
// Receive the value to be remove.
function remove(data) {
  root = removeNode(this.root, data);
}

// Main function
function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has no left child
    if (node.left == null) {
      return node.right;
    }
    // node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}
```

## Full Code

```js
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BinarySearchTree() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
}

// insert
function insert(data) {
  var n = new Node(data, null, null);

  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

// traverse
function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    node.show();
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (!(node == null)) {
    node.show();
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    node.show();
  }
}

// Search

function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  var current = this.root;
  while (current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current == null) {
      return null;
    }
  }
  return current;
}

// remove
// Receive the value to be remove.
function remove(data) {
  root = removeNode(this.root, data);
}

// Main function
function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has no left child
    if (node.left == null) {
      return node.right;
    }
    // node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}
```
