/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/fibonacci-number/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-30
 * @modifier
 * @modified
 */
function fib(n: number): number {
    const store = new Map();

    return fibMemo(n, store);
}

function fibMemo(n: number, store: Map<number, number>): number {
    if (n === 0) return 0;

    if (n === 1 || n === 2) {
        store.set(n, 1);
        return 1;
    }

    let prevNum;
    if (store.get(n - 1) != null) {
        prevNum = store.get(n - 1);
    } else {
        prevNum = fibMemo(n - 1, store);
    }

    let prev2Num;
    if (store.get(n - 2)) {
        prev2Num = store.get(n - 2);
    } else {
        prev2Num = fibMemo(n - 2, store);
    }

    store.set(n, (prevNum!! + prev2Num!!) as number);
    return store.get(n) as number;
}
