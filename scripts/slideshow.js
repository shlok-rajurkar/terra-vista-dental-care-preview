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
async function slideshowMain(imageCount) {
    const slideshowImages = getSlideshowImages(imageCount);
    const slideshowDots = getSlideshowDots(imageCount);
    const leftButton = document.getElementById("left-slideshow-arrow");
    const rightButton = document.getElementById("right-slideshow-arrow");
    let currSlideshowElementIndex = 0;
    let currSlideshowElement = slideshowImages[0];
    let currSlideshowDot = slideshowDots[0];
    leftButton.addEventListener("click", function activatePrevElement() {
        currSlideshowElementIndex = wrapDecrement(currSlideshowElementIndex, imageCount);
        if (currSlideshowElement) {
            deactivateSlideshowElement(currSlideshowElement);
        }
        if (currSlideshowDot) {
            deactivateSlideshowElement(currSlideshowDot);
        }
        currSlideshowElement = slideshowImages[currSlideshowElementIndex];
        currSlideshowDot = slideshowDots[currSlideshowElementIndex];
        if (currSlideshowElement) {
            activateSlideshowElement(currSlideshowElement);
        }
        if (currSlideshowDot) {
            activateSlideshowElement(currSlideshowDot);
        }
    });
    rightButton.addEventListener("click", function activateNextElement() {
        currSlideshowElementIndex = wrapIncrement(currSlideshowElementIndex, imageCount);
        if (currSlideshowElement) {
            deactivateSlideshowElement(currSlideshowElement);
        }
        if (currSlideshowDot) {
            deactivateSlideshowElement(currSlideshowDot);
        }
        currSlideshowElement = slideshowImages[currSlideshowElementIndex];
        currSlideshowDot = slideshowDots[currSlideshowElementIndex];
        if (currSlideshowElement) {
            activateSlideshowElement(currSlideshowElement);
        }
        if (currSlideshowDot) {
            activateSlideshowElement(currSlideshowDot);
        }
    });
}
await slideshowMain(3);
export {};
//# sourceMappingURL=slideshow.js.map