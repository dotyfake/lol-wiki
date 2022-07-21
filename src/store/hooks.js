import { useContext, useState, useEffect } from 'react';
import Context from './Context';

export const useStore = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
};

export const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return { width };
};
