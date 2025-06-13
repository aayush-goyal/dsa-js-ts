/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-06-13
 * @modifier
 * @modified
 */
function maxScore(cardPoints: number[], k: number): number {
    let length = cardPoints.length;
    let windowSize = length - k;
    let cardsTotal = 0;
    let windowSum = 0;

    let maxPoints = 0;
    let cardsTotalPrefix = [];

    // Step 1: Calculate the total points from all cards and make a prefix sum array
    for (let i = 0; i < length; i++) {
        cardsTotal += cardPoints[i];
        cardsTotalPrefix.push(cardsTotal);
    }

    if (windowSize === 0) {
        return cardsTotal;
    }

    for (let i = 0, j = windowSize - 1; i <= k; i++, j++) {
        windowSum = i === 0 ? cardsTotalPrefix[j] : (cardsTotalPrefix[j] - cardsTotalPrefix[i - 1]);
        maxPoints = Math.max(maxPoints, cardsTotal - windowSum);
    }

    return maxPoints;
};
