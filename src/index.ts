import parse, { ParseOptions } from "js-parse-key-value";
import deepmerge from "deepmerge";

/**
 * Object that has string keys
 */
type StrKeyObj = { [key: string]: string | number | boolean | StrKeyObj };

/**
 * Evaluate a leaf string into a string, number, or boolean
 */
function v(val: string): string | number | boolean {
  if (/^[\d\.]+$/.test(val)) return Number(val);
  if (/^(true|false)$/.test(val)) return val === "true";
  return val;
}

/**
 * Recursively parse a key-value pair into an object
 * "person.name.first = Alice" => {person: {name: {first: "Alice"}}}
 */
function str2obj(keyStr: string, val: string): StrKeyObj {
  const [key, ...rest] = keyStr.split(".");
  if (!rest.length) return { [key]: v(val) };
  return { [key]: str2obj(rest.join("."), val) };
}

/**
 * Parse key-value paired lists of object properties into an object
 * "person.name.first = Alice person.name.last = Smith person.age = 21"
 *  => {person: {name: {first: "Alice", last: "Smith"}, age: 21}}
 */
function parseDotProps(s: string, options = {} as ParseOptions): StrKeyObj {
  const parsed = parse(s, options);
  const entries = Object.entries(parsed);
  const objects = entries.map(([key, val]) => str2obj(key, val));
  return deepmerge.all<StrKeyObj>(objects);
}

export default parseDotProps;
