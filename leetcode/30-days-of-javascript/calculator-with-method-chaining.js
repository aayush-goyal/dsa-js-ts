/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/calculator-with-method-chaining/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-21
 * @modifier
 * @modified
 */
class Calculator {
    result;

    /**
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) throw new Error('Division by zero is not allowed');
        this.result /= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}
