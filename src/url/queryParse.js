/**
 * @desc   url_query => obj
 * @author snoob
 * @param  {String} url  default: if null will set url use window.location.href
 * @return {Object} 
 */
module.exports = url => {
	let urlstring = url == null ? window.location.href : url;
	let search = urlstring.substring(urlstring.lastIndexOf('?') + 1);
	if (!search) {
		return {}
	}
	return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}