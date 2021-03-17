# getRandomInt
A JavaScript function designed to generate a random integer within a range supporting excluding numbers from result.

## About
Having run into a few scenarios where I've needed to generate a random number in a range repeatedly without getting the same results twice or more, I decided I needed an elegant solution to do so that I could repeat anywhere. **getRandomInt** is that result.

## How to Use

### Syntax

`getRandomInt(int min, int max, int|array exclude)`

### Parameters
`min`

An integer. **Default value is 0.**

`max`

An integer. **Default value is 1.**

`exclude`

An integer or array. **Default value is false.**

### Return

`int` An integer from within range *min*-*max* excluding any integers in *exclude*.

## Examples

### Example 1: Simple usage

Generate an integer from 1 through 10.

`getRandomInt(1, 10);`

### Example 2: Excluding an integer

Generate an integer from 1 through 10 except 5.

`getRandomInt(1, 10, 5);`

### Example 3: Excluding multiple integers

Generate an integer from 1 through 10 except 4, 5, and 6.

`getRandomInt(1, 10, [4, 5, 6]);`
