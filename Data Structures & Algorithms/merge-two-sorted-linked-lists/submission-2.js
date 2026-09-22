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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let current1 = list1;
        let current2 = list2;
        let list3 = null;

        // Choose the first node
        if (current1 === null && current2 === null) {
            return null;
        }
        if (current1 === null) {
            list3 = current2;
            current2 = current2.next;
        } else if (current2 === null) {
            list3 = current1;
            current1 = current1.next;
        } else if (current1.val <= current2.val) {
            list3 = current1;
            current1 = current1.next;
        } else {
            list3 = current2;
            current2 = current2.next;
        }

        let prev = list3;

        // Merge the remaining nodes
        while (current1 !== null || current2 !== null) {
            let nextNode;

            if (current1 === null) {
                nextNode = current2;
                current2 = current2.next;
            } else if (current2 === null) {
                nextNode = current1;
                current1 = current1.next;
            } else if (current1.val <= current2.val) {
                nextNode = current1;
                current1 = current1.next;
            } else {
                nextNode = current2;
                current2 = current2.next;
            }

            prev.next = nextNode;
            prev = nextNode;
        }

        return list3;
    }
}
