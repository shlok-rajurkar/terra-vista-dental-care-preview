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

function updateActiveElement(oldIndex: number, newIndex: number, elementList: Record<number, HTMLElement | null>): void {
    let currSlideshowElement = elementList[oldIndex];
    if (currSlideshowElement) {
        deactivateSlideshowElement(currSlideshowElement);
    }

    currSlideshowElement = elementList[newIndex];
    if (currSlideshowElement) {
        activateSlideshowElement(currSlideshowElement);
    }
}

async function slideshowMain(imageCount: number): Promise<void> {
    const slideshowImages = getSlideshowImages(imageCount);
    const slideshowDots = getSlideshowDots(imageCount);

    const leftButton: HTMLButtonElement | null = document.getElementById("left-slideshow-arrow") as HTMLButtonElement;
    const rightButton: HTMLButtonElement | null = document.getElementById("right-slideshow-arrow") as HTMLButtonElement;
    
    let currSlideshowElementIndex: number = 0;
    
    // Slideshow Arrows

    leftButton.addEventListener("click", function activatePrevElement(): void {
        const tempSlideshowElementIndex = wrapDecrement(currSlideshowElementIndex, imageCount);
        
        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowImages);

        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowDots);

        currSlideshowElementIndex = tempSlideshowElementIndex;
    })
    rightButton.addEventListener("click", function activateNextElement(): void {
        const tempSlideshowElementIndex = wrapIncrement(currSlideshowElementIndex, imageCount);

        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowImages);

        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowDots);

        currSlideshowElementIndex = tempSlideshowElementIndex;
    })

    // Slideshow Dots

    const slideshowDot0 = slideshowDots[0] as HTMLButtonElement;
    const slideshowDot1 = slideshowDots[1] as HTMLButtonElement;
    const slideshowDot2 = slideshowDots[2] as HTMLButtonElement;

    slideshowDot0.addEventListener("click", (): void => {
        updateActiveElement(currSlideshowElementIndex, 0, slideshowImages);
        updateActiveElement(currSlideshowElementIndex, 0, slideshowDots);
        currSlideshowElementIndex = 0;
    })

    slideshowDot1.addEventListener("click", (): void => {
        updateActiveElement(currSlideshowElementIndex, 1, slideshowImages);
        updateActiveElement(currSlideshowElementIndex, 1, slideshowDots);
        currSlideshowElementIndex = 1;
    })

    slideshowDot2.addEventListener("click", (): void => {
        updateActiveElement(currSlideshowElementIndex, 2, slideshowImages);
        updateActiveElement(currSlideshowElementIndex, 2, slideshowDots);
        currSlideshowElementIndex = 2;
    })
}

await slideshowMain(3);