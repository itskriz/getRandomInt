# getRandomInt
A JavaScript function designed to generate a random integer within a range supporting excluding numbers from result.

## Installation

Download and include a reference to getRandomInt.js in your website or simply copy and paste the contents of getRandomInt.js into your own JavaScripts file.

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

## About
Having run into a few scenarios where I've needed to generate a random number in a range repeatedly without getting the same results twice or more, I decided I needed an elegant solution to do so that I could repeat anywhere. **getRandomInt** is that result.

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>

