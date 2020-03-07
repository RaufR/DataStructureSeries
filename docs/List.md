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

| Name         |               Operation                |
| ------------ | :------------------------------------: |
| `listSize`   |       Number of elements in list       |
| `pos`        |        Current position in list        |
| `length`     | Returns the number of elements in list |
| `clear`      |     Clears all elements from list      |
| `tostring`   | Returns string representation of list  |
| `getElement` |  Returns element at current position   |
| `insert`     |                                        |
| `append`     |                                        |
| `remove`     |                                        |
| `front`      |                                        |
