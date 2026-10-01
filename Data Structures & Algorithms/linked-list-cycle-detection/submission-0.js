/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (head === null) {
            return false;
        }

        let current1 = head;
        let current2 = head;

        while (current2.next !== null && current2.next.next !== null) {
            current1 = current1.next;
            current2 = current2.next.next;

            if (current1 === current2) {
                return true
            }
        }

        return false;
    }
}
