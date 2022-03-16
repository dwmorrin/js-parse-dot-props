# Parse Dot Props

Parses a string of key/value pairs where the keys can be written in dot notation like

`a.value = 1 a.type = "example"`

which will become

```js
{ a: { value: 1, type: "example" } }
```

after parsing.

The key/value delimiter in the above example is an equals sign (`=`) and
the list of key/value pairs are separated by spaces. These are options, so
you can also do things like

`a.value: 1, a.type: "example"`

where colons and commas are used instead of equals signs and spaces.

The property values can be strings, numbers, or booleans. "true" and "false"
are converted to the corresponding boolean values.
