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
     * @return {ListNode}
     */
    reverseList(head) {
        let current = head;
        let prevCurrent = null;



        while (current !== null) {
            let nextVal = current.next;

            if (current.next === null) {
                head = current;
            }

            current.next = prevCurrent;


            prevCurrent = current;
            current = nextVal;

        }

        return head;

    }
}
