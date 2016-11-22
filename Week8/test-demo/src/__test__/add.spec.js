import add from '../add';


describe('number add', () => {
	it('123 + 321 should equal 444', () => {
	  expect(add(123, 321)).toBe(444);
	});

	it('1 + 1 should equal 2', () => {
	  expect(add(1, 1)).toBe(2);
	});
});