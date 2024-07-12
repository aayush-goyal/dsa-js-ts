/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/rectangle-overlap/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-12
 * @modifier
 * @modified
 */
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    return (
        rec1[0] < rec2[2] &&
        rec1[2] > rec2[0] &&
        rec1[1] < rec2[3] &&
        rec1[3] > rec2[1]
    );
}
