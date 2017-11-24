describe('Text API:', function () {
	let sigWord = sbutils.sigWord;
	describe('--> sigWord() ', function () {
		it('sigWord("我是中国人，龙的传人",["中国","龙"],"<",">") should return "我是<中国>人，<龙>的传人"', function () {
			expect(sigWord("我是中国人，龙的传人",["中国","龙"],"<",">")).toEqual("我是<中国>人，<龙>的传人");
		});
	})
});