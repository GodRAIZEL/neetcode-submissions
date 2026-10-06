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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0;
        let current = head;
        let index = 0;
        let prev = null;
        let nextNode = null;


        while (current !== null) {
            length++;
            current = current.next;
        }

        if (length === 1 && n === 1) {
            return null;
        }


        current = head;

        while (current !== null) {
            nextNode = current.next ? current.next : null;
            index++;

            if (index === (length - n + 1)) {
                if (prev === null) {
                    current.next = null;
                    return nextNode;
                }
                prev.next = nextNode;
                break;
            }

            prev = current;
            current = nextNode;

        }

        return head;

    }
}
