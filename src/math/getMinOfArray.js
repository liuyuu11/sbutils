/**
 * @desc 获取数组最小值
 * @author snoob
 * @param {Array}
 * @return {Number}
 */

module.exports = numArray => {
	return Math.min.apply(null, numArray);
}