describe('Array API:', function () {
	let arrayEqual = sbutils.arrayEqual,
		isArrRepeat = sbutils.isArrRepeat;
	describe('--> arrayEqual() ', function () {
		it('arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
			expect(arrayEqual([1, 2, 3], [1, 2, 3])).toBe(true);
		});
		it('arrayEqual([1, 2, 3], [1, 2, 3, 4]) should return true', function () {
			expect(arrayEqual([1, 2, 3], [1, 2, 3, 4])).toBe(false);
		});
		it('arrayEqual([1, 2, 4, 4], [1, 2, 3, 4]) should return true', function () {
			expect(arrayEqual([1, 2, 4, 4], [1, 2, 3, 4])).toBe(false);
		});
	})
	describe('--> isArrRepeat() ', function () {
		it('isArrRepeat([13,55,7,28,55,31,16]) should return true', function () {
			expect(isArrRepeat([13,55,7,28,55,31,16])).toBe(true);
		});
		it('isArrRepeat([13,56,7,28,55,31,16]) should return false',function(){
			expect(isArrRepeat([13,56,7,28,55,31,16])).toBe(false);
		} )
	})
});