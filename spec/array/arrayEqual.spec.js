describe("Hello", function () {
    var arrayEqual = require("../../src/array/arrayEqual");
    it("arrayEqual([1, 2, 3], [1, 2, 3]) should return true", function () {
        expect(arrayEqual([1, 2, 3], [1, 2, 3])).toBe(true);
	});
	it("arrayEqual([1, 2, 3], [1, 2, 3, 4]) should return true", function () {
        expect(arrayEqual([1, 2, 3], [1, 2, 3, 4])).toBe(false);
	});
	it("arrayEqual([1, 2, 4, 4], [1, 2, 3, 4]) should return true", function () {
        expect(arrayEqual([1, 2, 4, 4], [1, 2, 3, 4])).toBe(false);
    });
});