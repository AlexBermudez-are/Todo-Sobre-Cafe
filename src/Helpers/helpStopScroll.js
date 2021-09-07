export const helpStopScroll = () => {

    const createScrollStopListener = ({ element, callback, timeout }) => {
        let removed = false;
        let handle = null;
        const onScroll = () => {
            if (handle) {
                clearTimeout(handle);
            }
            handle = setTimeout(callback, timeout || 200); // default 200 ms
        };
        element.addEventListener('scroll', onScroll);
        return () => {
            if (removed) {
                return;
            }
            removed = true;
            if (handle) {
                clearTimeout(handle);
            }
            element.removeEventListener('scroll', onScroll);
        };
    };

    const stop = ({ element, callback, timeout }) => {
        return createScrollStopListener({ element, callback, timeout })
    }
    return { stop }
}