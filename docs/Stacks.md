# Stacks


A stack is a list of elements that are accessible only from one end of the list, which is
called the top. One common, real-world example of a stack is the stack of trays at a
cafeteria. Trays are always removed from the top, and when trays are put back on the
stack after being washed, they are placed on the top of the stack. The stack is known as
a last-in, first-out (LIFO) data structure.


## Implementation
To build a stack, we first need to decide on the underlying data structure we will use to
store the stack elements. We will use an array in our implementation.


```js
//main function
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop; 
    this.peek = peek;
}

```

!> The array that stores the stack elements is named dataStore. The constructor sets it to
an empty array. The top variable keeps track of the top of the stack and is initially set
to 0 by the constructor, indicating that the 0 position of the array is the top of the stack,
at least until an element is pushed onto the stack


FullCode

```js
//main function
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop; 
    this.peek = peek;
}

//push
function push(element) {
this.dataStore[this.top++] = element;
}


//pop
function pop() {
return this.dataStore[--this.top];
}


//peek
function peek() {
return this.dataStore[this.top-1];
}

//length
function length() {
return this.top;
}

//clear
function clear() {
this.top = 0;
}

```


## How to use stacks
There are several problems for which a stack is the perfect data structure needed for the
solution. In this section, we look at several such problems.

### Multiple base conversion

Stack can be used to convert a number from on ebase to another. Given a number,
`n`, which we want to convert to `a` base, `b`, here is the algorithm for performing the
conversion:

1. The rightmost digit of `n` is `n%b`. Push this onto stack
2. Replace `n` with `n/b`
3. Repeate step 1 & 2 until `n=0`
4. Pop the stack until empty

!> This algorithm will work only with bases 2 through 9.

Code

```js
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
        var converted = "";
      while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}
```


Use-Case

```js
var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);


//output
32 converted to base 2 is 100000
125 converted to base 8 is 175
```





### Palindromes
A palindrome is a word, phrase, or number that is spelled the same forward and back‐
ward. For example, “dad” is a palindrome; “racecar” is a palindrome; “A man, a plan, a
canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
and 1,001 is a numeric palindrome.


Code
```js
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
}
var rword = "";
while (s.length() > 0) {
    rword += s.pop();
}
if (word == rword) {
    return true;
}
else {
    return false;
}
}
var word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}
word = "racecar"
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}

//output

hello is not a palindrome.
racecar is a palindrome.

```

