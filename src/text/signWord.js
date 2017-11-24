/**
 * @desc   寻找指定文本进行标识
 * @author snoob
 * @param {string} content 内容
 * @param {array} wordArr 敏感词数组
 * @param {string} leftSig 左标识
 * @param {string} rightSig 右标识
 * @return {string} 带标识的敏感词组
 */
module.exports = (content, wordArr, leftSig, rightSig) => {
	var resultContent = content;
	wordArr.forEach(function (val) {
		resultContent = resultContent.replace(new RegExp(val, 'gm'), function (word) {
			return leftSig + word + rightSig;
		});
	});
	return resultContent;
}