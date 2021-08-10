import { useCallback, useEffect, useRef } from "react"

const useScrollHook = (direction, duration, delay) => {
    const element = useRef();

    const handleDirection = (name) => {

        return name ? 'translate3d(30%, 0, 0)' : 'translate3d(-30%, 0, 0)';;
    };

    const handleScroll = useCallback(
        ([entry]) => {
            const { current } = element;
            if (entry.isIntersecting) {
                console.log('viewport In');
                current.style.transitionProperty = 'all';
                current.style.transitionDuration = `${duration}s`;
                current.style.transitionTimingFunction = 'linear';
                current.style.transitionDelay = `${delay}s`;
                current.style.opacity = 1;
                current.style.transform = 'translate3d(0, 0, 0)';
            }else if(direction === true) {
                console.log('viewport Out');
                current.style.transitionProperty = 'all';
                current.style.transitionDuration = `${duration}s`;
                current.style.transitionTimingFunction = 'linear';
                current.style.transitionDelay = `${delay}s`;
                current.style.opacity = 0;
                current.style.transform = 'translate3d(30%, 0, 0)';
            }else if(direction === false) {
                console.log('viewport Out');
                current.style.transitionProperty = 'all';
                current.style.transitionDuration = `${duration}s`;
                current.style.transitionTimingFunction = 'linear';
                current.style.transitionDelay = `${delay}s`;
                current.style.opacity = 0;
                current.style.transform = 'translate3d(-30%, 0, 0)';
            }
        },
        [delay, duration]
    );

    useEffect(() => {
        let observer = null;

        if (element.current) {
            observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
            observer.observe(element.current);
        }

        console.log(element.current)

        return () => observer && observer.disconnect();
    }, [handleScroll]);

    return {
        ref: element,
        style: {
            opacity: 0,
            transform: handleDirection(direction)
        },
    };
};


export default useScrollHook;