async function getSlideshowImages(slideshowImageCount: number) {
    const result: Record<number, HTMLElement | null> = [];
    for (let i: number = 0; i < slideshowImageCount; i++) {
        result[i] = document.getElementById(`img-${i}`)
    }
}

async function activateSlideshowElement(element: HTMLElement) {
    element.classList.add("active");
}

async function deactivateSlideshowElement(element: HTMLElement) {
    element.classList.remove("active");
}

async function wrapIncrement(curr: number, listLength: number) {
    if (curr >= listLength - 1) {
        return 0;
    } else {
        return ++curr;
    }
}

async function wrapDecrement(curr: number, listLength: number) {
    if (curr <= 0) {
        return --listLength;
    } else {
        return --curr;
    }
}

async function slideshowMain(): Promise<void> {
    const leftButton: HTMLButtonElement | null = document.getElementById("left-slideshow-arrow") as HTMLButtonElement;
    const rightButton: HTMLButtonElement | null = document.getElementById("right-slideshow-arrow") as HTMLButtonElement;
}