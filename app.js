//q: what is SOLID principles in javascript
//a: SOLID is an acronym for five design principles that help software developers create maintainable and scalable software. The principles are:
// 1. Single Responsibility Principle (SRP): A class should have only one reason to change, meaning it should have only one job or responsibility.
// 2. Open/Closed Principle (OCP): Software entities should be open for extension but closed for modification, meaning you should be able to add new functionality without changing existing code.
// 3. Liskov Substitution Principle (LSP): Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
// 4. Interface Segregation Principle (ISP): Clients should not be forced to depend on interfaces they do not use, meaning you should create smaller, more specific interfaces instead of a large, general-purpose one.
// 5. Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. Both should depend on abstractions, meaning you should depend on interfaces or abstract classes rather than concrete implementations.

// These principles help developers create code that is easier to understand, maintain, and extend over time.
//q: what is the difference between let, var and const in javascript
//a: In JavaScript, `let`, `var`, and `const` are used to declare variables, but they have different characteristics:
// 1. `var`:
//    - Function-scoped or globally-scoped.
//    - Can be re-declared and updated.
//    - Hoisted to the top of their scope, meaning they can be used before they are declared (but will be `undefined` until the declaration is reached).
//    - Example:
//     javascript
     var x = 10;
     console.log(x); // 10
     var x = 20; // re-declaration
     console.log(x); // 20
     
// // 2. `let`:
//    - Block-scoped.
//    - Can be updated but not re-declared within the same block.
//    - Hoisted to the top of their block, meaning they can be used before they are declared (but will be `undefined` until the declaration is reached).
//    - Example:
//     javascript
     let y = 10;
     console.log(y); // 10
     y = 20;
     console.log(y); // 20
    

// 3. `const`:
//    - Block-scoped.
//    - Cannot be updated or re-declared within the same block.
//    - Must be initialized at the time of declaration.
//    - Example:
//     javascript
     const z = 10;
     console.log(z); // 10
     z = 20; // TypeError: Assignment to constant variable.
     
// In summary, use `var` for function-scoped variables, `let` for block-scoped variables that may change, and `const` for block-scoped variables that should not change.
//q: what is the difference between == and === in javascript
//a: In JavaScript, `==` and `===` are both comparison operators, but they behave differently:
// 1. `==` (Equality Operator):
//    - Compares two values for equality after converting them to a common type (type coercion).
//    - Example:
//     javascript
     console.log(5 == '5'); // true (string '5' is converted to number 5)
     console.log(null == undefined); // true (both are considered equal)
     console.log(0 == false); // true (0 is considered falsy)
     
// 2. `===` (Strict Equality Operator):
//    - Compares two values for equality without type conversion (no type coercion).
//    - Both the value and the type must be the same for the comparison to return true.
//    - Example:
//     javascript
     console.log(5 === '5'); // false (different types: number vs string)
     console.log(null === undefined); // false (different types)
     console.log(0 === false); // false (different types)
     
// In summary, use `==` when you want to compare values with type coercion and `===` when you want to compare values without type coercion. It is generally recommended to use `===` to avoid unexpected results due to type coercion.
//q: what is the difference between null and undefined in javascript
//a: In JavaScript, `null` and `undefined` are both primitive values, but they represent different concepts:
// 1. `null`:
//    - Represents the intentional absence of any object value.
//    - It is an assignment value that can be assigned to a variable to indicate that it has no value.
//    - Example:
//     javascript
     let x = null;
     console.log(x); // null
     
// 2. `undefined`:
//    - Represents a variable that has been declared but has not yet been assigned a value.
//    - It is the default value of uninitialized variables and function arguments that are not provided.
//    - Example:
 //    javascript
     let y;
     console.log(y); // undefined
     
// In summary, `null` is an explicit assignment indicating no value, while `undefined` indicates that a variable has been declared but not yet assigned a value. They are different types: `typeof null` returns "object", while `typeof undefined` returns "undefined".
//q: what is the difference between function declaration and function expression in javascript
//a: In JavaScript, function declarations and function expressions are two different ways to define functions, and they have some key differences:
// 1. Function Declaration:
function add(a, b) {
  return a + b;
} 

// - A function declaration defines a named function.
// - It is hoisted, meaning it can be called before its definition in the code.
// - Syntax:
// javascript
  function functionName(parameters) {
      // function body
  }

// - Example:
//  javascript
  function greet() {
      console.log("Hello, World!");
  }
  greet(); // "Hello, World!" (can be called before declaration)
  
// 2. Function Expression:
const multiply = function(a, b) {
  return a * b;
}
// - A function expression defines a function as part of an expression.
// - It can be anonymous (without a name) or named.
// - It is not hoisted, meaning it cannot be called before its definition in the code.
// - Syntax:
//  javascript
  const functionName = function(parameters) {
      // function body
  }
  
// - Example:
//  javascript
  const square = function(x) {
      return x * x;
  }
  square(5); // 25 (cannot be called before expression)
  
// In summary, function declarations are hoisted and can be called before their definition, while function expressions are not hoisted and cannot be called before their definition. Function expressions can also be assigned to variables, passed as arguments, or returned from other functions.