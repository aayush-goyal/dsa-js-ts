/**
 * This class is a Queue implementation using Arrays.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-16
 * @modifier
 * @modified
 */
export default class Queue<T> {
    queue: Array<T>;

    constructor() {
        this.queue = new Array();
    }

    /**
     * This function adds a key to the queue.
     *
     * @param value Key to be added.
     */
    enqueue(value: T) {
        this.queue.push(value);
    }

    /**
     * This function removes and returns the least recently added key.
     *
     * @return First element of the queue.
     */
    dequeue(): T | undefined {
        return this.queue.shift();
    }

    /**
     * This function returns the recently added key to the queue.
     *
     * @return Recently added key to the queue.
     */
    peek(): T | null {
        if (this.queue.length !== 0) {
            return this.queue[this.queue.length - 1];
        } else {
            return null;
        }
    }

    /**
     * This function returns the first element in the queue.
     *
     * @return Recently added key to the queue.
     */
    first(): T | null {
        if (this.queue.length !== 0) {
            return this.queue[0];
        } else {
            return null;
        }
    }

    /**
     * This function returns the total size of the queue.
     *
     * @return Size of the queue.
     */
    size(): number {
        return this.queue.length;
    }

    /**
     * This function checks whether the queue is empty.
     *
     * @return Whether the queue is empty.
     */
    isEmpty(): boolean {
        return this.queue.length === 0;
    }
}
