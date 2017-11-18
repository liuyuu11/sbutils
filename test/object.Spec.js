describe('Object API:', function () {
	describe('--> isEmptyObj() ', function () {
		let isEmptyObj = sbutils.isEmptyObj;
		it('isEmptyObj({}) should return true', function () {
			expect(isEmptyObj({})).toBe(true);
		});
		it('isEmptyObj([]) should return false', function () {
			expect(isEmptyObj([])).toBe(false);
		});
		it('isEmptyObj({"aa":"bb"}) should return false', function () {
			expect(isEmptyObj({"aa":"bb"})).toBe(false);
		});
	})
});