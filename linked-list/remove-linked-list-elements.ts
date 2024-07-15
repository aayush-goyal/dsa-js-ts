import ListNode from './implementations/leetcode-linked-list-node';

/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-15
 * @modifier
 * @modified
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head === null) {
        return null;
    }
    if (head.next === null && head.val === val) {
        return null;
    }

    let resultHead: ListNode = head;
    let prevNode: ListNode | null = null;
    let currentNode: ListNode = head;

    while (currentNode != null) {
        if (currentNode.val === val) {
            // Special condition to handle if initial few consecutive values are to be removed.
            if (currentNode === resultHead) {
                resultHead = <ListNode>currentNode.next;
                currentNode = <ListNode>currentNode.next;
                continue;
            }

            if (prevNode != null) {
                prevNode.next = currentNode.next;
            }
            currentNode = <ListNode>currentNode.next;
            continue;
        }

        prevNode = currentNode;
        currentNode = <ListNode>currentNode.next;
    }

    return resultHead;
}
