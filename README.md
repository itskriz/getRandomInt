# getRandomInt
A JavaScript function designed to generate a random integer within a range supporting excluding numbers from result.

## About
Having run into a few scenarios where I've needed to generate a random number in a range repeatedly without getting the same results twice or more, I decided I needed an elegant solution to do so that I could repeat anywhere. **getRandomInt** is that result.

## How to Use

### Syntax

`getRandomInt(int min, int max, int|array exclude)`

### Parameters

**min**

`int`: *(Optional)* The minimum value of the range. **Default value is 0.**

**max**

`int`: *(Optional)* The maximum value of the range. **Default value is 1.**

**exclude**

`int|array`: *(Optional)* The integer(s) that should be excluded. **Default value is false.**

### Return

`int`: An integer from within range `min` through `max` excluding any integers in `exclude`.

## Examples

### Example 1: Simple usage

Generate an integer from 1 through 10.

`getRandomInt(1, 10)`

### Example 2: Excluding an integer

Generate an integer from 1 through 10 except 5.

`getRandomInt(1, 10, 5)`

### Example 3: Excluding multiple integers

Generate an integer from 1 through 10 except 4, 5, and 6.

`getRandomInt(1, 10, [4, 5, 6])`

### Example 4: Simple Loops

Looping to fetch a random item from an array excluding the previously chosen item.

```
lastItem = false;
while (looping) {
  randomItem = items[getRandomInt(0, items.length - 1, lastItem)];
}
```

### Example 5: Advanced Loops

Generating random integers in a loop and excluding the last 5 results.

```
lastItems = [];
while (looping) {
  randomItem = items[getRandomInt(0, items.length - 1, lastItems)];
  lastItems.push(randomItem);
  if (lastItems.length > 5) {
    lastItems.shift();
  }
}
```


