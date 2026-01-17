async function getSlideshowImages(slideshowImageCount) {
    const result = [];
    for (let i = 0; i < slideshowImageCount; i++) {
        result[i] = document.getElementById(`img-${i}`);
    }
}
async function activateSlideshowElement(element) {
    element.classList.add("active");
}
async function deactivateSlideshowElement(element) {
    element.classList.remove("active");
}
async function wrapIncrement(curr, listLength) {
    if (curr >= listLength - 1) {
        return 0;
    }
    else {
        return ++curr;
    }
}
async function wrapDecrement(curr, listLength) {
    if (curr <= 0) {
        return --listLength;
    }
    else {
        return --curr;
    }
}
async function slideshowMain() {
    const leftButton = document.getElementById("left-slideshow-arrow");
    const rightButton = document.getElementById("right-slideshow-arrow");
}
export {};
//# sourceMappingURL=slideshow.js.map