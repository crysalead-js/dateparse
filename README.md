# dateparse

[![Build Status](https://app.travis-ci.com/crysalead-js/dateparse.svg?branch=master)](https://app.travis-ci.com/crysalead-js/dateparse)

Parse string date value into valid `Date()` instance.

## Usage

```js
var dateParse = require('dateparse');

// Parse string as a local date
dateParse('2014-11-21 10:20:45');

// Parse string as an UTC date.
dateParse('2014-11-21 10:20:45', true);
```
