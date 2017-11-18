describe('Keycode API:', function () {
	let getKeyName = sbutils.getKeyName;
	describe('--> getKeyName() ', function () {
		it('getKeyName(13) should return "Enter"', function () {
			expect(getKeyName(13)).toEqual('Enter');
		});
	})
});