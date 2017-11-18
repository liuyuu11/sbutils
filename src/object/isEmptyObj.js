/**
 * @desc   判断obj是否为空
 * @author snoob
 * @param  {Object} obj
 * @return {Boolean}
 */
module.exports = obj => {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false
    return !Object.keys(obj).length
}