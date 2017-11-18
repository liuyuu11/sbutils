describe('Keycode API:', function () {
	describe('--> getKeyName() ', function () {
		let getKeyName = sbutils.getKeyName;
		it('getKeyName(13) should return "Enter"', function () {
			expect(getKeyName(13)).toEqual('Enter');
		});
	})
});