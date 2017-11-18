/**
 * @desc 随机生成颜色
 * @author snoob
 * @return {String}
 */
module.exports = () => {
	let color='',point = '0123456789ABCDEF';
	while(color.length<6){
		color +=point[Math.floor(Math.random()*16)]
	}
	return '#' + color;
}