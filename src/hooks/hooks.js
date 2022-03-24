/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop({setMenu}) {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
        setMenu(false);
    },[pathname])
 
    return null;
};
