/**
 * This file contains implementation of a Singly Linked List.
 *
 * @version 1.0.1
 * @author Aayush Goyal
 * @created 2025-02-17
 * @modifier Aayush Goyal
 * @modified 2025-02-18
 */
interface LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
}

class SinglyLinkedList<T> {
    head: LinkedListNode<T>;

    constructor(head: LinkedListNode<T>) {
        this.head = head;
    }

    find(value: T) {
        let currNode = this.head;
        while (currNode != null) {
            if (currNode.value === value) {
                return currNode;
            } else {
                currNode = currNode.next!;
            }
        }

        return 'No node with the given value found.';
    }

    pushAtHead(node: LinkedListNode<T>) {
        node.next = this.head;
        this.head = node;
    }

    pushAtMiddle(node: LinkedListNode<T>, position: number) {
        let currNode = this.head;

        for (let i =1; i < position - 1; i++) {
            currNode = currNode.next!;
        }

        let tempNode = currNode.next!;
        currNode.next = node;
        node.next = tempNode;
    }

    pushAtEnd(node: LinkedListNode<T>) {
        let currNode = this.head;
        while (currNode.next != null) {
            currNode = currNode.next;
        }

        currNode.next = node;
    }

    popFromHead() {
        this.head = this.head.next!;
    }

    popFromMiddle(position: number) {
        let currNode = this.head;

        for (let i = 1; i < position - 1; i++) {
            currNode = currNode.next!;
        }

        currNode.next = currNode.next?.next!;
    }

    popFromEnd() {
        let currNode = this.head;
        while (currNode.next?.next != null) {
            currNode = currNode.next!;
        }

        currNode.next= null;
    }
}

export { LinkedListNode };
