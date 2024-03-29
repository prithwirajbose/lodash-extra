# lodash-extra
<a name="_"></a>

<p>An extended version of the popular lodash library, with lot of exciting extra utility functions</p>


- [lodash-extra](#lodash-extra)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Functions](#functions)
    - [\_.isNumericString(str) ⇒](#_isnumericstringstr-)
    - [\_.isBlank(val) ⇒](#_isblankval-)
    - [\_.isNotBlank(val) ⇒](#_isnotblankval-)
    - [\_ext.csvToArray(csvString, separator, nonAssociative, noHeader) ⇒](#_extcsvtoarraycsvstring-separator-nonassociative-noheader-)



## Installation

```
npm i lodash-extra
```

## Usage

```
const _ = require('lodash-extra');

console.log(_.isBlank("Hello World"));

```

## Functions

<a name="_.isNumericString"></a>

### _.isNumericString(str) ⇒
<p>Checks if the given <code>str</code> is a string representation
of a valid number or not. Float and Int both types are considered valid numbers.</p>

**Kind**: static method of [<code>\_</code>](#_)
**Returns**: <p>boolean</p>

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | <p>Inut string</p> |

<a name="_.isBlank"></a>

### _.isBlank(val) ⇒
<p>Checks if the given <code>val</code> is either null or string which is blank or empty or contains only white spaces</p>

**Kind**: static method of [<code>\_</code>](#_)
**Returns**: <p>boolean</p>

| Param | Type | Description |
| --- | --- | --- |
| val | <code>any</code> | <p>Input value</p> |

<a name="_.isNotBlank"></a>

### _.isNotBlank(val) ⇒
<p>Checks if the given <code>val</code> is string and not null or blank or empty or contains only white spaces</p>

**Kind**: static method of [<code>\_</code>](#_)
**Returns**: <p>boolean</p>

| Param | Type | Description |
| --- | --- | --- |
| val | <code>any</code> | <p>Input value</p> |

<a name="_ext.csvToArray"></a>

### _ext.csvToArray(csvString, separator, nonAssociative, noHeader) ⇒
Converts a given `csvString` into an array

**Kind**: static method of [<code>\_ext</code>](#_ext)
**Returns**: array

| Param | Type | Description |
| --- | --- | --- |
| csvString | <code>string</code> | CSV String - Required |
| separator | <code>string</code> | CSV Separator - Optional, default comma (,) |
| nonAssociative | <code>boolean</code> | Flag to not create an associate array - Optional, default false |
| noHeader | <code>boolean</code> | Flag to specify if the column header exists in the `csvSring` - Optional, default false |