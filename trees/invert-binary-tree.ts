import TreeNode from "./implementations/leetcode-tree-node";

/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/invert-binary-tree/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-01-20
 * @modifier
 * @modified
 */
function invertTree(root: TreeNode | null): TreeNode | null {
    if (root == null) {
        return null;
    }

    let temp: TreeNode | null;
    const queue = new CustomQueue<TreeNode>();

    queue.enqueue(root);

    while (queue.size() > 0) {
        const currNode = queue.dequeue()!;
        
        if (currNode.left != null) {
            queue.enqueue(currNode.left);
        }
        if (currNode.right != null) {
            queue.enqueue(currNode.right);
        }

        temp = currNode?.left;
        currNode.left = currNode?.right;
        currNode.right = temp;
    }

    return root;
};

class CustomQueue<T> {
    private queue: T[];

    constructor() {
        this.queue = [];
    }

    enqueue(value: T): void {
        this.queue.push(value);
    }

    dequeue(): T | undefined {
        return this.queue.shift();
    }

    size(): number {
        return this.queue.length;
    }
}
