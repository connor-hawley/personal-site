---
title: "Test Post🤠"
date: "2020-07-20"
---

## Headings

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Horizontal Rules

___

---

***

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

©©©©

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting
```jsx
import React, { useState } from 'react'

export default props => {
  [count, setCount] = useState(0)

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div onClick={() => setCount(count + 1)}>+</div>
      <div>Count is: {count}</div>
      <div onClick={() => setCount(count - 1)}>-</div>
    </div>
  )
}
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

## Images

URL image
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

A self-hosted image.
![image](images/math_equation.jpg)


Like links, Images also have a footnote style syntax

## Plugins

$\LaTeX$ support
$$
t = e^{st}

$$
$$
\sigma_U \sim \mathrm{Normal}(0, \Theta_U^2)
$$

$$
\pi = \sum_{i = 0}^{\infty}{\frac{1}{n}}
$$

this is inline $\pi = \sum_{i = 0}^{\infty}{\frac{1}{n}}$ mathematics