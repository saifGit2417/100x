// // // // // function parentFn(childFn: () => void) {
// // // // //   setTimeout(childFn, 1000);
// // // // // }

// // // // // function child() {
// // // // //   console.log('"i am from child fn": ', "i am from child fn");
// // // // // }

// // // // // parentFn(child);

// // // // interface Person {
// // // //   name: string;
// // // //   age: number;
// // // //   location: string;
// // // // }

// // // // let person1: Person = {
// // // //   name: "saif",
// // // //   age: 23,
// // // //   location: "nanded",
// // // // };
// // // // console.log("person1: ", person1);

// // // // let users: Person[] = [
// // // //   {
// // // //     name: "saif",
// // // //     age: 23,
// // // //     location: "nanded",
// // // //   },
// // // //   {
// // // //     name: "saif",
// // // //     age: 23,
// // // //     location: "nanded",
// // // //   },
// // // //   {
// // // //     name: "saif",
// // // //     age: 23,
// // // //     location: "nanded",
// // // //   },
// // // //   {
// // // //     name: "saif",
// // // //     age: 23,
// // // //     location: "nanded",
// // // //   },
// // // // ];
// // // // console.log("users: ", users);

// // // let numbers = [10, 20, 30, 40, 45, 55, 56, 777];

// // // function findLargest(arr: number[]) {
// // //   let largestNumber = arr[0];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (largestNumber < arr[i]) {
// // //       largestNumber = arr[i];
// // //     }
// // //   }
// // //   return largestNumber;
// // // }

// // // console.log(findLargest(numbers));

// // interface User {
// //   firstName: string;
// //   lastName: string;
// //   age: number;
// // }

// // let listOfUsers: User[] = [
// //   { firstName: "aa", lastName: "aa", age: 18 },
// //   { firstName: "bb", lastName: "bb", age: 19 },
// //   { firstName: "cc", lastName: "cc", age: 15 },
// //   { firstName: "dd", lastName: "dd", age: 16 },
// //   { firstName: "ee", lastName: "ee", age: 13 },
// //   { firstName: "ff", lastName: "ff", age: 11 },
// // ];

// // let legalUsers: User[] = [];

// // for (let i = 0; i < listOfUsers.length; i++) {
// //   if (listOfUsers[i].age > 18) {
// //     legalUsers.push(listOfUsers[i]);
// //   }
// // }
// // let filteredList: User[] = listOfUsers.filter(
// //   (person: User) => person.age > 18
// // );
// // console.log("filteredList: ", filteredList);
// // console.log("legalUsers: ", legalUsers);

// enum EmployeeType {
//   intern = "intern",
//   jrEngineer = "jrEngineer",
//   srEngineer = "srEngineer",
//   lead = "lead",
//   architect = "architect",
// }

// function sayHi(position: EmployeeType, name: string) {
//   console.log("good morning " + name, position);
// }

// sayHi(EmployeeType.intern, "saif");
// sayHi(EmployeeType.lead, "sohel");

let arr = ["1", "2", 3, 4];

function returnFirst<T>(arr: T[]) {
  return arr[0];
}

let a1 = returnFirst<number>([1, 2, 3, 4]);
console.log("a1: ", a1);
let a2 = returnFirst<string>(["a", "b", "c", "d", "e", "f"]);
console.log("a2: ", a2);

function callIt<T>(n: T) {
  return n;
}

let o1 = callIt<string>("saif");
console.log("o1: ", o1);

let o2 = callIt<number>(99999);
console.log("o2: ", o2);
