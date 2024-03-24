// function parentFn(childFn: () => void) {
//   setTimeout(childFn, 1000);
// }

// function child() {
//   console.log('"i am from child fn": ', "i am from child fn");
// }

// parentFn(child);

interface Person {
  name: string;
  age: number;
  location: string;
}

let person1: Person = {
  name: "saif",
  age: 23,
  location: "nanded",
};
console.log("person1: ", person1);

let users: Person[] = [
  {
    name: "saif",
    age: 23,
    location: "nanded",
  },
  {
    name: "saif",
    age: 23,
    location: "nanded",
  },
  {
    name: "saif",
    age: 23,
    location: "nanded",
  },
  {
    name: "saif",
    age: 23,
    location: "nanded",
  },
];
console.log("users: ", users);
