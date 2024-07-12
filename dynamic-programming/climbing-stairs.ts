/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-12
 * @modifier
 * @modified
 */
function climbStairs(n: number): number {
    const store = new Map();

    return climbStairsMemo(n, store);
}

function climbStairsMemo(n: number, store: Map<number, number>): number {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    let prevNum;
    if (store.get(n - 1) != null) {
        prevNum = store.get(n - 1);
    } else {
        prevNum = climbStairsMemo(n - 1, store);
    }

    let prev2Num;
    if (store.get(n - 2) != null) {
        prev2Num = store.get(n - 2);
    } else {
        prev2Num = climbStairsMemo(n - 2, store);
    }

    store.set(n, (prevNum!! + prev2Num!!) as number);
    return store.get(n) as number;
}
