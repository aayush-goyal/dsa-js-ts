import ListNode from './implementations/leetcode-linked-list-node';

/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-12-17
 * @modifier
 * @modified
 */
function deleteMiddle(head: ListNode | null): ListNode | null {
    // If the list size is 1, return null.
    if (head.next === null) {
        return null;
    }
    // If the list size is 2, remove the last element and return the head.
    if (head.next.next === null) {
        head.next = null;
        return head;
    }
    // If the list size is 3, remove the middle element.
    if (head.next.next.next === null) {
        head.next = head.next.next;
        return head;
    }

    let slow = head;
    let fast = head.next;

    // Iterate while the faster pointer has not reached the end of the list.
    let iterationCount = 1;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        ++iterationCount;
    }

    let totalNoOfNodes = iterationCount * 2;

    // Handle the case where the number of nodes might be odd.
    if (fast.next !== null) {
        totalNoOfNodes += 1;
    }
    const middle = Math.floor(totalNoOfNodes / 2);

    let nodeTracer = head;
    let prevNode;
    let nextNode;
    for (let i = 1; i < middle; i++) {
        nodeTracer = nodeTracer.next;
        if (i === middle - 1) {
            prevNode = nodeTracer;
        }
    }
    nextNode = nodeTracer.next.next;

    prevNode.next = nextNode;

    return head;
};
