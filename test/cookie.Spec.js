describe('Cookie API:', function () {
	let setCookie = sbutils.setCookie,
		getCookie = sbutils.getCookie,
		removeCookie = sbutils.removeCookie;
	describe('--> setCookie() and setCookie()', function () {
		it('when setCookie is string , if run setCookie("aa","bb") , getCookie("aa") should get "bb"', function () {
			setCookie("aa", "bb")
			expect(getCookie("aa")).toEqual('bb');
		})
		it('when setCookie is json , we should transition json to string in JSON.stringify() and then setCookie', function () {
			let testJSON = {
				'name': 'snoob',
				'age': 20,
				'sex': 'male'
			}
			setCookie("info", JSON.stringify(testJSON));
			expect(JSON.parse(getCookie("info"))).toEqual(testJSON);
		})

	})
	describe('--> removeCookie()', function () {
		it('if run removeCookie("aa") and then getCookie("aa") should be "" ', function () {
			expect(getCookie("aa")).toEqual('bb');
			removeCookie('aa')
			expect(getCookie("aa")).toEqual('');
		})
	})
})