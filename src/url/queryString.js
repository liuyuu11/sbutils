/**
 * @desc   obj => url_query
 * @author snoob
 * @param  {Object} obj 
 * @return {String}
 */
module.exports = obj => {
	if (!obj) return '';
	let tmp = [];
	for (let key in obj) {
		let value = obj[key];
		if (value instanceof Array) {
			for (let i = 0; i < value.length; ++i) {
				tmp.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
			}
		}
		tmp.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
	}
	return tmp.join('&');
}