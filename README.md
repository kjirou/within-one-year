# within-one-year

[![npm version](https://badge.fury.io/js/within-one-year.svg)](https://badge.fury.io/js/within-one-year)

A module for judging whether it is within one year


## Installation

```bash
npm install within-one-year
```


## Usage

```js
const withinOneYear = require('within-one-year');

const from = new Date('2017-01-01T00:00:00.000Z');
console.log(withinOneYear(from, new Date('2018-01-01T00:00:00.000Z')));  // -> true
console.log(withinOneYear(from, new Date('2018-01-01T00:00:00.001Z')));  // -> false
```


## Interpretation of leap years
- `2016-02-29 + 1 year` => `2017-03-01`
- `2015-03-01 + 1 year` => `2016-03-01`
- `2015-02-28 + 1 year` => `2016-02-28`
