/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (root === null) {
            return 0;
        }

        let queue = [root];
        let depth = 0;
        let front = 0;




        while (front < queue.length) {
            let queueLevel = queue.length - front;

            for (let i = 0; i < queueLevel; i++) {
                let node = queue[front];
                front++;

                if (node.left !== null) {
                    queue.push(node.left);
                }

                if (node.right !== null) {
                    queue.push(node.right)
                }
            }

            depth++;

        }

        return depth;


    }
}
