import ListNode from './implementations/leetcode-linked-list-node';

/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-06-13
 * @modifier
 * @modified
 */
function reverseList(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) {
        return head;
    }

    if (head.next.next == null) {
        const temp = head.next;
        head.next = null;
        temp.next = head;
        return temp;
    }

    let current = head;
    let next = head.next;
    let secondNext: ListNode | null = head.next.next;

    do {
        // Perform operation.
        next.next = current;

        // Update variables.
        current = next;
        next = secondNext;
        secondNext = secondNext.next;
    } while (secondNext != null);

    next.next = current;
    head.next = null;

    return next;
}
