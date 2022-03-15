import parseDotProps from "./lib/index.js";

function test(description, expected, str, options) {
  const res = parseDotProps(str, options);
  const strRes = JSON.stringify(res);
  const expectedStr = JSON.stringify(expected);
  console.log(strRes === expectedStr ? "✅" : "❌", description);
}

test("simple", { a: 1 }, "a:1", ":");

test(
  "person",
  {
    person: {
      name: {
        first: "Alice",
        last: "Smith",
      },
      age: 21,
    },
  },
  "person.name.first = Alice person.name.last = Smith person.age = 21",
  { delimiter: "=" }
);

test(
  "person and location",
  {
    person: {
      id: 3,
      name: "Bob",
      working: true,
    },
    location: {
      id: 4,
      title: "Home",
      occupied: false,
    },
  },
  "person.id = 3 person.name = Bob location.id = 4 location.title = Home person.working = true location.occupied = false",
  { delimiter: "=" }
);

test("odd delimiter", { a: 1 }, "a/1", { delimiter: "/" });

test("comma list", { a: 1, b: 2 }, " a:1, b:2 ", { IFS: /[\s,]+/ });
