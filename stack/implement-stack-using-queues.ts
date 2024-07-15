import Queue from '../queue/implementations/queue';

/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/implement-stack-using-queues/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-16
 * @modifier
 * @modified
 */
class MyStack {
    queue: Queue<number>;

    constructor() {
        this.queue = new Queue<number>();
    }

    push(x: number): void {
        this.queue.enqueue(x);
    }

    pop(): number {
        this.queue.queue.reverse();
        const result = this.queue.dequeue();
        this.queue.queue.reverse();
        return result!;
    }

    top(): number {
        return this.queue.peek()!;
    }

    empty(): boolean {
        return this.queue.isEmpty();
    }
}
