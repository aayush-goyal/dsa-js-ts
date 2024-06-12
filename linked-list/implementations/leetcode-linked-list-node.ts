/**
 * This class is the Linked List node implementation for solving LeetCode problems.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-06-13
 * @modifier
 * @modified
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export default ListNode;
