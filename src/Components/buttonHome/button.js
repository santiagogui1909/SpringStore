/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { Link } from "react-scroll";

import '../ListProducts/listProducts.css';


const button = () => {
    const [scroll, setScroll] = useState(0);

    // scroll to hide go to top button
    const scrollNav = () => {
        const posicion = window.pageYOffset;
        setScroll(posicion);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollNav);
    }, [scroll]);

    return (
        <Link activeClass="active" to="top" spy={true}
            smooth={true}
            duration={100}>
            <button className={`btnTop ${scroll < 100 ? "scroll" : null}`}><span className="icon-up-big"></span></button>
        </Link>
    );
};

export default button;