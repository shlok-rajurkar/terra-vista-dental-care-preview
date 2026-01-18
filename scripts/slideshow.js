function getSlideshowImages(slideshowImageCount) {
    const result = [];
    for (let i = 0; i < slideshowImageCount; i++) {
        result[i] = document.getElementById(`img-${i}`);
    }
    return result;
}
function getSlideshowDots(slideshowImageCount) {
    const result = [];
    for (let i = 0; i < slideshowImageCount; i++) {
        result[i] = document.getElementById(`slideshow-dot-${i}`);
    }
    return result;
}
function activateSlideshowElement(element) {
    element.classList.add("active");
}
function deactivateSlideshowElement(element) {
    element.classList.remove("active");
}
function wrapIncrement(curr, listLength) {
    if (curr >= listLength - 1) {
        return 0;
    }
    else {
        return ++curr;
    }
}
function wrapDecrement(curr, listLength) {
    if (curr <= 0) {
        return --listLength;
    }
    else {
        return --curr;
    }
}
function updateActiveElement(oldIndex, newIndex, elementList) {
    let currSlideshowElement = elementList[oldIndex];
    if (currSlideshowElement) {
        deactivateSlideshowElement(currSlideshowElement);
    }
    currSlideshowElement = elementList[newIndex];
    if (currSlideshowElement) {
        activateSlideshowElement(currSlideshowElement);
    }
}
async function slideshowMain(imageCount) {
    const slideshowImages = getSlideshowImages(imageCount);
    const slideshowDots = getSlideshowDots(imageCount);
    const leftButton = document.getElementById("left-slideshow-arrow");
    const rightButton = document.getElementById("right-slideshow-arrow");
    let currSlideshowElementIndex = 0;
    let currSlideshowElement = slideshowImages[0];
    let currSlideshowDot = slideshowDots[0];
    leftButton.addEventListener("click", function activatePrevElement() {
        const tempSlideshowElementIndex = wrapDecrement(currSlideshowElementIndex, imageCount);
        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowImages);
        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowDots);
        currSlideshowElementIndex = tempSlideshowElementIndex;
    });
    rightButton.addEventListener("click", function activateNextElement() {
        const tempSlideshowElementIndex = wrapIncrement(currSlideshowElementIndex, imageCount);
        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowImages);
        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowDots);
        currSlideshowElementIndex = tempSlideshowElementIndex;
    });
    const slideshowDot0 = slideshowDots[0];
    const slideshowDot1 = slideshowDots[1];
    const slideshowDot2 = slideshowDots[2];
}
await slideshowMain(3);
export {};
//# sourceMappingURL=slideshow.js.map