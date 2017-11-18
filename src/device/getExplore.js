/**
 * @desc 获取浏览器类型和版本相关信息
 * @author snoob
 * @return {String} 
 */
module.exports = () => {
	let sys = {},
		ua = navigator.userAgent.toLowerCase(),
		s;
	(s = ua.search(/rv:([\d.]+)\) like gecko/)) ? sys.ie = ua:
		(s = ua.search(/msie ([\d\.]+)/)) ? sys.ie = ua :
		(s = ua.search(/edge\/([\d\.]+)/)) ? sys.edge = ua :
		(s = ua.search(/firefox\/([\d\.]+)/)) ? sys.firefox = ua :
		(s = ua.search(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = ua :
		(s = ua.search(/chrome\/([\d\.]+)/)) ? sys.chrome = ua :
		(s = ua.search(/ucweb/)) ? sys.ucweb = ua :
		(s = ua.search(/360se/)) ? sys._360se = ua :
		(s = ua.search(/bidubrowser/)) ? sys.bidubrowser = ua :
		(s = ua.search(/metasr/)) ? sys.sougou = ua :
		(s = ua.search(/micromessenger/)) ? sys.weixin = ua :
		(s = ua.search(/qqbrowser/)) ? sys.qq = ua :
		(s = ua.search(/lbbrowser/)) ? sys.liebao = ua :
		(s = ua.search(/version\/([\d\.]+).*safari/)) ? sys.safari = ua : 0;
	if (sys.ie) return ('this is IE: ' + sys.ie)
	if (sys.edge) return ('this is EDGE: ' + sys.edge)
	if (sys.firefox) return ('this is Firefox: ' + sys.firefox)
	if (sys.chrome) return ('this is Chrome: ' + sys.chrome)
	if (sys.opera) return ('this is Opera: ' + sys.opera)
	if (sys.ucweb) return ('this is ucweb: ' + sys.ucweb)
	if (sys._360se) return ('this is _360se: ' + sys._360se)
	if (sys.bidubrowser) return ('this is bidubrowser: ' + sys.bidubrowser)
	if (sys.sougou) return ('this is sougou: ' + sys.sougou)
	if (sys.weixin) return ('this is weixin: ' + sys.weixin)
	if (sys.qq) return ('this is qq: ' + sys.qq)
	if (sys.lbbrowser) return ('this is lbbrowser: ' + sys.lbbrowser)
	if (sys.safari) return ('this is Safari: ' + sys.safari)
	return 'Unkonwn'
}