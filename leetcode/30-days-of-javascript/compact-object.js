/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/compact-object/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-19
 * @modifier
 * @modified
 */
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    let result;

    if (Array.isArray(obj)) {
        result = obj.filter(Boolean);

        for (let key in result) {
            if (Array.isArray(result[key]) || result[key] instanceof Object) {
                result[key] = compactObject(result[key]);
            }
        }
    } else if (obj instanceof Object) {
        result = {};

        for (let [key, value] of Object.entries(obj)) {
            if (Array.isArray(value) || value instanceof Object) {
                result[key] = compactObject(value);
            } else if (value) {
                result[key] = value;
            }
        }
    }

    return result;
};
