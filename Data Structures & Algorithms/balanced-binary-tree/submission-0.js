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
     * @return {boolean}
     */
    isBalanced(root) {
        function heightHelper(root) {
            if (root === null) {
                return 0;
            }


            let leftHeight = 0;
            let righHeight = 0;



            if (root.left) {
                leftHeight++;
            }


            let childBestHeightL = heightHelper(root.left);
            if (childBestHeightL === false) {
                return false
            }


            leftHeight = leftHeight + childBestHeightL;

            if (root.right) {
                righHeight++;
            }


            let childBestHeightR = heightHelper(root.right);
            if (childBestHeightR === false) {
                return false;
            }


            righHeight = righHeight + childBestHeightR;

            let heightDiff = leftHeight - righHeight;

            if (heightDiff < -1 || heightDiff > 1) {
                return false;
            }


            let bestHeight = righHeight > leftHeight ? righHeight : leftHeight;

            return bestHeight;
        }

        let helperAns = heightHelper(root);

        if (helperAns === false) {
            return false;
        }

        return true;
    }
}
