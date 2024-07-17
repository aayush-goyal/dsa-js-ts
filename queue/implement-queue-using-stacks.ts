import Stack from '../stack/implementations/stack';

/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/implement-queue-using-stacks/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-17
 * @modifier
 * @modified
 */
class MyQueue {
    stack: Stack<number>;

    constructor() {
        this.stack = new Stack<number>();
    }

    push(x: number): void {
        this.stack.push(x);
    }

    pop(): number {
        this.stack.stack.reverse();
        const result = this.stack.pop();
        this.stack.stack.reverse();
        return result;
    }

    peek(): number {
        return this.stack.stack[0];
    }

    empty(): boolean {
        return this.stack.isEmpty();
    }
}
