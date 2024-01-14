import React, { createContext, useEffect, useRef, useState } from 'react'

export const animation_context = createContext(null)
const AnimationProvider = ({ children }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    // ref.current = []

    const addtoRefs = (el) => {
        if (ref && !ref.current.includes(el)) {
            ref.current.push(el)
        }
    }


    useEffect(() => {
        console.log(ref.current)
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                rootMargin: "-300px",

            }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.add("slide-in");
            });
        }
        else {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.remove("slide-in");
            });
        }
    }, [isIntersecting]);

    return (
        <animation_context.Provider value={{ ref }}>
            {children}
        </animation_context.Provider>
    )
}

export default AnimationProvider