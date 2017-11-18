describe('Device API:', function () {
	let getExplore = sbutils.getExplore,
		getOS = sbutils.getOS;
	describe('--> getExplore() ', function () {
		it('getExplore() should return "Chrome"', function () {
			expect(getExplore()).toMatch(/chrome/);
		});
	})
	describe('--> getOS() ', function () {
		it('getOS() should return "windows"', function () {
			expect(getOS()).toMatch(/windows/);
		});
	})
});