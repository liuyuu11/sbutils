const setCookie = require('./setCookie');
/**
 * @desc 根据name删除cookie
 * @author snoob
 * @param  {String} name 
 */
module.exports = (name) => {
	// 设置已过期，系统会立刻删除cookie
	setCookie(name, '1', -1);
}