export const debounceFunction = (f, timeWindow) => {
    let lastTimeout = null;

    return (...args) => {
        if (lastTimeout) {
            clearTimeout(lastTimeout);
        }
        lastTimeout = setTimeout(() => {
            lastTimeout = null; // 이게 위에 있어도 되나?
            f(...args);
        }, timeWindow);
    };
};
