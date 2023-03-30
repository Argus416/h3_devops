
const average = require("../helper/index");

test("average of table [11, -11, 10, 20]", () => {
	const table = [11, -11, 10, 20];
	expect(average(table)).toBe(7.5);
});