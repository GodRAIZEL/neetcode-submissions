class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let lower = 1;
        let upper = Math.max(...piles);
        let k = null;

        while (lower <= upper) {
            let middle = Math.floor((upper + lower) / 2);
            let totalHours = null;

            for (let i = 0; i < piles.length; i++) {
                middle >= piles[i] ? totalHours++ : totalHours += Math.ceil(piles[i] / middle);
            }

            if (totalHours > h) {
                lower = middle + 1;
            }
            else {
                k = middle;
                upper = middle - 1;
            }
        }


        return k;
    }
}
