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
     * @return {void}
     */
    reorderList(head) {
        let length = 0;
        let current = head;

        while (current !== null) {
            length++;
            current = current.next;
        }

        current = head;
        let middle = Math.floor((length / 2)) + 1;

        let index = 0;
        let prev = null;
        let secondHalfHead = head;
        let next;

        while (current !== null) {
            index++;
            next = current.next;


            if (index === middle - 1) {
                current.next = null;
                current = next;
                continue;
            }


            if (index >= middle) {

                if (current.next === null) {
                    secondHalfHead = current;
                }
                current.next = prev;
                prev = current;
                current = next;
            }
            else {
                current = current.next;
            }

        }

        let ref1 = head;
        let ref1Next = ref1.next ? ref1.next : null;
        let ref2 = secondHalfHead;
        let ref2Next = secondHalfHead.next ? secondHalfHead.next : null;

        while (ref1 !== null && ref2 !== null) {
            if (ref1Next === null) {
                ref1.next = ref2;
                ref2.next = ref2Next;
                break;
            }

            ref1.next = ref2;
            ref2.next = ref1Next;

            ref1 = ref1Next;
            ref2 = ref2Next;
            ref1Next = ref1Next.next;
            ref2Next = ref2Next.next;
        }



        return head;

    }
}
