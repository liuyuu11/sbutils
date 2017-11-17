/**
 * 
 * @desc  设置Cookie
 * @author snoob
 * @param {String} name 
 * @param {String} value 
 * @param {Number} days 
 */
module.exports = (name, value, days) => {
	let date = new Date();
	date.setDate(date.getDate() + days);
	document.cookie = name + '=' + value + ';expires=' + date;
}