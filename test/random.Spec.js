describe('Random API:', function () {
	let randomColor = sbutils.randomColor,
		randomNum = sbutils.randomNum;
	describe('--> randomColor() ', function () {
		it('randomColor() should match /^#[0-9A-F]{6}/', function () {
			expect(randomColor()).toMatch(/^#[0-9A-F]{6}/);
		});
	})
	describe('--> randomNum() ', function () {
		it('0<= randomNum() <= 1 should return true', function () {
			expect(randomNum() >= 0 || randomNum() <= 1).toBe(true);
		});
		it('0<= randomNum(100,10000) <= 1 should return true', function () {
			expect(randomNum(100, 10000) >= 100 || randomNum(100, 10000) <= 10000).toBe(true);
		});
	})
});