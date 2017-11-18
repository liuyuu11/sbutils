/**
 * @desc 判断数组元素是否重复
 * @author snoob
 * @param {Array}
 * @return {Boolean}
 */
module.exports = arr => {
	let _arr = arr.sort();
	for (let i = 0; i < _arr.length; i++) {
		if (_arr[i] === _arr[i + 1]) {
			return true;
		}
	}
	return false;
}