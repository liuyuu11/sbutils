/**
 * @desc 获取数组最大值
 * @author snoob
 * @param {Array}
 * @return {Number}
 */

module.exports = numArray => {
	return Math.max.apply(null, numArray);
}