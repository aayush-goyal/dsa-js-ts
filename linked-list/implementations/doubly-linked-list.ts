/**
 * This file contains implementation of a Doubly Linked List.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-02-18
 * @modifier
 * @modified
 */
interface LinkedListNode<T> {
    value: T;
    previous: LinkedListNode<T> | null;
    next: LinkedListNode<T> | null;
}

class DoublyLinkedList<T> {
    head: LinkedListNode<T>;

    constructor(head: LinkedListNode<T>) {
        this.head = head;
    }

    find(value: T): T | string {
        let currNode: LinkedListNode<T> | null = this.head;
        while (currNode != null) {
            if (currNode.value === value) {
                return currNode.value;
            } else {
                currNode = currNode.next;
            }
        }

        return 'No node with the given value found.';
    }

    pushAtHead(node: LinkedListNode<T>) {
        node.next = this.head;
        node.previous = null;
        this.head.previous = node;
        this.head = node;
    }

    pushAtMiddle(node: LinkedListNode<T>, position: number) {
        let currNode: LinkedListNode<T> | null = this.head;

        for (let i = 1; i < position - 1; i++) {
            currNode = currNode.next!;
        }

        let tempNode: LinkedListNode<T> | null = currNode.next!;
        currNode.next = node;
        node.previous = currNode;
        tempNode.previous = node;
        node.next = tempNode;
    }

    pushAtEnd(node: LinkedListNode<T>) {
        let currNode: LinkedListNode<T> | null = this.head;
        while (currNode.next != null) {
            currNode = currNode.next;
        }

        currNode.next = node;
        node.next = null;
        node.previous = currNode;
    }

    popFromHead() {
        this.head = this.head.next!;
        this.head.previous = null;
    }

    popFromMiddle(position: number) {
        let currNode: LinkedListNode<T> | null = this.head;

        for (let i = 1; i < position - 1; i++) {
            currNode = currNode.next!;
        }

        currNode.next = currNode.next?.next!;
        currNode.next.previous = currNode;
    }

    popFromEnd() {
        let currNode: LinkedListNode<T> | null = this.head;
        while (currNode.next?.next != null) {
            currNode = currNode.next!;
        }

        currNode.next!.previous = null;
        currNode.next = null;
    }

    printList() {
        let currNode: LinkedListNode<T> | null = this.head;
        const result: T[] = [];
        while (currNode != null) {
            result.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(result.join(' <-> '));
    }
}
