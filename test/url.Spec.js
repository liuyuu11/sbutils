describe('Url API:', function () {
	let queryParse = sbutils.queryParse,
		queryString = sbutils.queryString;
	describe('--> queryParse() ', function () {
		it('queryParse("http://www.91snoob.com/blog/js/angular?visit=10&like=15&nickName=%E7%89%9B%E7%89%9B") should return true', function () {
			expect(queryParse("http://www.91snoob.com/blog/js/angular?visit=10&like=15&nickName=%E7%89%9B%E7%89%9B")).toEqual({
				'visit': '10',
				'like': '15',
				'nickName': '牛牛'
			});
		});
	})
	describe('--> queryString() ', function () {
		it('queryString({"visit":"10","like":"15","nickName":"牛牛"}) should return true', function () {
			expect(queryString({
				"visit": "10",
				"like": "15",
				"nickName": "牛牛"
			})).toEqual('visit=10&like=15&nickName=%E7%89%9B%E7%89%9B');
		});
	})
});