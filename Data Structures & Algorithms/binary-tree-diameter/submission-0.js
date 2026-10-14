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
    diameterOfBinaryTree(root) {

        let maxDiameter = 0;


        function heightHelper(root) {
            if (root === null) {
                return 0;
            }
            let bestHeight = 0;
            let leftHeight = 0;
            let rightHeight = 0;

            if (root.left) {
                leftHeight++;
            }
            leftHeight = heightHelper(root.left) + leftHeight;

            if (root.right) {
                rightHeight++;
            }
            rightHeight = heightHelper(root.right) + rightHeight;

            let currentDiameter = leftHeight + rightHeight;

            maxDiameter = maxDiameter >= currentDiameter ? maxDiameter : currentDiameter;

            bestHeight = leftHeight >= rightHeight ? leftHeight : rightHeight;

            return bestHeight;

        }

        heightHelper(root);

        return maxDiameter;
    }
}
