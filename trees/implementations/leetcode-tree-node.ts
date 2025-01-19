/**
 * This class is basic binary tree node definition for solving LeetCode problems.
 * 
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-01-20
 * @modifier
 * @modified
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

export default TreeNode;
