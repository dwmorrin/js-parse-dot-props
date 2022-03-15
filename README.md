# Parse Key Value List

## Key Value List

Defining "key value list" as a list of .

A list can look like

`a.value = 1 a.type = "example"`

and becomes

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
