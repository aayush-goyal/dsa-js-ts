/**
 * This function is the solution to the problem mentioned @
 * https://www.greatfrontend.com/questions/javascript/min-by
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-18
 * @modifier
 * @modified
 */
export default function minBy<T>(
    array: Array<T>,
    iteratee: (value: T) => any
): any {
    let min: number = iteratee(array[0]);
    let minValue = min !== undefined ? array[0] : undefined;

    for (let elem of array) {
        let temp = iteratee(elem);
        if (temp !== undefined) {
            if (min === undefined) {
                min = temp;
                minValue = elem;
            } else if (temp < min) {
                min = temp;
                minValue = elem;
            }
        }
    }

    return minValue;
}
