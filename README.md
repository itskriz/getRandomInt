# getRandomInt
A JavaScript function designed to generate a random integer within a range supporting excluding numbers from result.

## About
Having run into a few scenarios where I've needed to generate a random number in a range repeatedly without getting the same results twice or more, I decided I needed an elegant solution to do so that I could repeat anywhere. **getRandomInt** is that result.

## How to Use

### Syntax
`getRandomInt(int min, int max, int|array exclude)`

### Parameters
`min`

An integer. **Default value is 0**

`max`

An integer. **Default value is 1**

`exclude`

An integer or array. **Default value is false**

## Examples

### 1
Generate a number from 1 through 10.
`getRandomInt(1, 10);1
