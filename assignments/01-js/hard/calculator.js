/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/


class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    try {
      // Remove multiple continuous spaces and trim the expression
      const cleanedExpression = expression.replace(/\s+/g, " ").trim();

      // Validate the expression for non-numerical characters
      if (!/^[0-9+\-*/(). ]+$/.test(cleanedExpression)) {
        throw new Error("Invalid characters in the expression");
      }

      try {
        // Evaluate the expression using eval
        this.result = eval(cleanedExpression);
      } catch (error) {
        throw new Error("Invalid expression");
      }

      // Check for division by zero after processing the expression
      if (!isFinite(this.result)) {
        throw new Error('Division by zero is not allowed');
      }

      return this.result;
    } catch (error) {
      // Re-throw the error with a custom message for division by zero
      if (error.message.includes('Division by zero')) {
        throw new Error('Division by zero is not allowed');
      } else {
        throw error; // Re-throw for other types of errors
      }
    }
  }
}

// Example usage and debugging
const calculator = new Calculator();

try {
  // Example expression
  const expression = '10 + 2 * (6 - (4 + 1) / 2) + 7';

  // Calculate and display the result
  const result = calculator.calculate(expression);
  console.log(`Expression: ${expression}`);
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}

module.exports = Calculator;