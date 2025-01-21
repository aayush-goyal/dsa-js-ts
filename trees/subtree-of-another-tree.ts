import TreeNode from "./implementations/leetcode-tree-node";

/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-01-22
 * @modifier
 * @modified
 */
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {   
    const queue = new CustomQueue<TreeNode>();

    queue.enqueue(root!);

    while (queue.size() > 0) {
        const currNode = queue.dequeue()!;

        if (currNode.val === subRoot!.val) {
            if (matchSubTree(currNode, subRoot!)) {
                return true;
            };
        }
        
        if (currNode.left != null) {
            queue.enqueue(currNode.left);
        }
        if (currNode.right != null) {
            queue.enqueue(currNode.right);
        }
    }

    return false;
};

function matchSubTree(node: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (node === null && subRoot === null) {
        return true;
    }

    if (node === null || subRoot === null) {
        return false;
    }

    return (
        node.val === subRoot.val &&
        matchSubTree(node.left, subRoot.left) &&
        matchSubTree(node.right, subRoot.right)
    );
}

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
