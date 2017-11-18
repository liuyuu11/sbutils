describe('Math API:', function () {
	let getMaxOfArray = sbutils.getMaxOfArray,
		getMinOfArray = sbutils.getMinOfArray;
	describe('--> getMaxOfArray() ', function () {
		it('getMaxOfArray([62,25,32,99,16,8,88,66,111,33,8954,99,66]) should return 8954', function () {
			expect(getMaxOfArray([62,25,32,99,16,8,88,66,111,33,8954,99,66])).toEqual(8954);
		});
	})
	describe('--> getMinOfArray() ', function () {
		it('getMinOfArray([62,25,32,99,16,8,88,66,111,33,8954,99,66]) should return 8', function () {
			expect(getMinOfArray([62,25,32,99,16,8,88,66,111,33,8954,99,66])).toEqual(8);
		});
	})
});