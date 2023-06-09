function createAnalytics() {
    let counter = 0;
    let isDestroyed = false;
    console.log(counter, isDestroyed);

    const listener = () => counter++;

    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestroyed = true;
        },
        getClicks() {
            if (isDestroyed) {
                return "Analytics is destroyed";
            }
            return counter;
        }
    };
}

window.analytics = createAnalytics();