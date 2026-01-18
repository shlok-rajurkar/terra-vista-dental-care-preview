function getSlideshowImages(slideshowImageCount: number): Record<number, HTMLElement | null> {
    const result: Record<number, HTMLElement | null> = [];
    for (let i: number = 0; i < slideshowImageCount; i++) {
        result[i] = document.getElementById(`img-${i}`)
    }
    return result;
}

function getSlideshowDots(slideshowImageCount: number): Record<number, HTMLElement | null> {
    const result: Record<number, HTMLElement | null> = [];
    for (let i: number = 0; i < slideshowImageCount; i++) {
        result[i] = document.getElementById(`slideshow-dot-${i}`);
    }
    return result;
}

function activateSlideshowElement(element: HTMLElement): void {
    element.classList.add("active");
}

function deactivateSlideshowElement(element: HTMLElement): void {
    element.classList.remove("active");
}

function wrapIncrement(curr: number, listLength: number): number {
    if (curr >= listLength - 1) {
        return 0;
    } else {
        return ++curr;
    }
}

function wrapDecrement(curr: number, listLength: number): number {
    if (curr <= 0) {
        return --listLength;
    } else {
        return --curr;
    }
}

async function slideshowMain(imageCount: number): Promise<void> {
    const slideshowImages = getSlideshowImages(imageCount);
    const slideshowDots = getSlideshowDots(imageCount);

    const leftButton: HTMLButtonElement | null = document.getElementById("left-slideshow-arrow") as HTMLButtonElement;
    const rightButton: HTMLButtonElement | null = document.getElementById("right-slideshow-arrow") as HTMLButtonElement;
    
    let currSlideshowElementIndex: number = 0;
    let currSlideshowElement = slideshowImages[0];
    let currSlideshowDot = slideshowDots[0];
    
    leftButton.addEventListener("click", function activatePrevElement(): void {
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
    })
    rightButton.addEventListener("click", function activateNextElement(): void {
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
    })


}

await slideshowMain(3);