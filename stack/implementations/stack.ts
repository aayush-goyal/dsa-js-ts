/**
 * This class is a {@link Stack} implementation using Arrays.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-17
 * @modifier
 * @modified
 */
export default class Stack<T> {
    stack: Array<T>;

    constructor() {
        this.stack = new Array();
    }

    /**
     * This function checks whether the stack is empty.
     *
     * @return Whether the stack is empty.
     */
    isEmpty(): boolean {
        return this.stack.length === 0;
    }

    /**
     * This function returns the recently added key to the stack.
     *
     * @return Recently added key to the stack.
     */
    peek(): T {
        return this.stack[this.stack.length - 1];
    }

    /**
     * This function removes the top element from the stack.
     *
     * @return Top element of the stack.
     */
    pop(): T {
        if (this.isEmpty()) {
            console.error('The stack is already empty.');
        }

        return <T>this.stack.pop();
    }

    /**
     * This function adds the key to the top of the stack.
     *
     * @param value The key to be added.
     */
    push(value: T) {
        this.stack.push(value);
    }

    /**
     * This function returns the total size of the stack.
     *
     * @return Size of the stack.
     */
    size(): number {
        return this.stack.length;
    }
}
