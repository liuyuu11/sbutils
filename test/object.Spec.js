describe('Object API:', function () {
	let isEmptyObj = sbutils.isEmptyObj;
	describe('--> isEmptyObj() ', function () {
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