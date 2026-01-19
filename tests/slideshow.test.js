import { wrapDecrement, wrapIncrement,
// wrapDecrement,
// getSlideshowImages,
// getSlideshowDots,
// activateSlideshowElement,
// deactivateSlideshowElement,
// activateNextSlideshowElement,
// updateActiveElement,
// slideshowMain,
 } from '../scripts/slideshow';
// Utility Tests
describe('test wrapIncrement normal behavior', () => {
    test.each([
        [0, 3, 1],
        [1, 3, 2],
        [2, 3, 0],
        [499, 500, 0],
        [0, 1, 0]
    ])('when curr=%i, listLength=%i, returns %i', (curr, len, result) => {
        expect(wrapIncrement(curr, len)).toBe(result);
    });
});
describe('test wrapIncrement throws', () => {
    test.each([
        [3, 3],
        [-1, 5],
        [5, 1],
        [0, 0],
        [3, 0]
    ])('throws for curr=%i, listLength=%i', (curr, len) => {
        expect(() => wrapIncrement(curr, len)).toThrow();
    });
});
describe('test wrapDecrement normal behavior', () => {
    test.each([
        [0, 3, 2],
        [1, 3, 0],
        [2, 3, 1],
        [499, 500, 498],
        [0, 1, 0],
        [0, 500, 499]
    ])('when curr=%i, listLength=%i, returns %i', (curr, len, result) => {
        expect(wrapDecrement(curr, len)).toBe(result);
    });
});
describe('test wrapDecrement throws', () => {
    test.each([
        [3, 3],
        [-1, 5],
        [5, 1],
        [0, 0],
        [3, 0]
    ])('throws for curr=%i, listLength=%i', (curr, len) => {
        expect(() => wrapDecrement(curr, len)).toThrow();
    });
});
//# sourceMappingURL=slideshow.test.js.map