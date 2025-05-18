// **** copilior-ask-mode ****
// show me an example of edit mode in copilot chat
// This is a simple example of how to use the OpenAI API to create a chat interface
//             divide(6, 0);
//         }).toThrow("Cannot divide by zero.");
//     });
//     });
// });
//
// Compare this snippet from calculator.test.js:
//  */
// const { add, subtract, multiply, divide } = require('./calculator');
//
// describe('Calculator', () => {
//     describe('add function', () => {
//         test('adds 1 + 2 to equal 3', () => {
//             expect(add(1, 2)).toBe(3);
//         });
//     });
// });

// **** copilot-edit-mode ****
// To edit multiple files in Copilot Chat's Edit mode:
// 1. Use the /edit command with a file path:
//    /edit calculator.js - Implement the divide function

// 2. For another file in the same conversation:
//    /edit calculator.test.js - Add tests for division function

// 3. You can also specify line numbers:
//    /edit calculator.js:10-20 - Fix error handling in the divide function

// 4. Or make targeted edits:
//    /edit calculator.js - Replace the divide function with this implementation:
//    function divide(a, b) {
//      if (b === 0) throw new Error("Cannot divide by zero.");
//      return a / b;
//    }

// **** copilot-agent-mode ****
// In Copilot Agent mode, you can ask for help with specific tasks or get suggestions for code improvements.
// For example:
// 1. Ask for help with a specific function:
//    "Can you help me implement the divide function in calculator.js?"
// 2. Request code reviews:
//    "Can you review the add function in calculator.js and suggest improvements?"
// 3. Ask for explanations:
//    "Can you explain how the divide function works in calculator.js?"
// 4. Request code refactoring:
//    "Can you refactor the add function in calculator.js to use arrow functions?"
// 5. Ask for best practices:
//    "What are the best practices for error handling in JavaScript functions?"
// 6. Request code examples:
//    "Can you provide an example of how to use the divide function in calculator.js?"
// 7. Ask for help with testing:
//    "Can you help me write tests for the divide function in calculator.test.js?"
// 8. Request code optimization:
//    "Can you optimize the add function in calculator.js for performance?"
// 9. Ask for help with debugging:
//    "I'm getting an error in the divide function. Can you help me debug it?"
// 10. Request code documentation:
//     "Can you add JSDoc comments to the divide function in calculator.js?"