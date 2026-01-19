import { wrapIncrement,
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
describe('test wrapIncrement', () => {
    test('incrementing normally', () => {
        expect(wrapIncrement(0, 3)).toBe(1);
        expect(wrapIncrement(1, 3)).toBe(2);
    });
    test('incrementing past max', () => {
        expect(wrapIncrement(2, 3)).toBe(0);
        expect(wrapIncrement(499, 500)).toBe(0);
    });
    test('list of length 1', () => {
        expect(wrapIncrement(0, 1)).toBe(0);
    });
    test('illegal arguments', () => {
        expect(wrapIncrement(3, 3)).toThrow();
        expect(wrapIncrement(-1, 5)).toThrow();
        expect(wrapIncrement(5, 1)).toThrow();
        expect(wrapIncrement(0, 0)).toThrow();
        expect(wrapIncrement(3, 0)).toThrow();
    });
});
// describe('test wrapDecrement', () => {
//     test('decrem')
// })
//# sourceMappingURL=slideshow.test.js.map