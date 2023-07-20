# lodash-extra
<a name="_"></a>

## \_
<p>An extended version of the popular lodash library, with lot of exciting extra utility functions</p>


- [lodash-extra](#lodash-extra)
  - [\_](#_)
    - [Installation](#installation)
    - [Usage](#usage)
    - [\_.isNumericString(str) ⇒](#_isnumericstringstr-)
    - [\_.isBlank(val) ⇒](#_isblankval-)
    - [\_.isNotBlank(val) ⇒](#_isnotblankval-)



### Installation

```
npm i lodash-extra
```

### Usage

```
const _ = require('lodash-extra');

console.log(_.isBlank("Hello World"));

```



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