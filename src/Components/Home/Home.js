import { useState, useContext, useEffect } from 'react';
import productsContext from '../../Context/index';
import Searcher from '../Searcher/Searcher';
import ListProducts from '../ListProducts/ListProducts';
import shopping from '../../images/shopping.png';

import './home.css';

const Home = () => {
    const [seeProducts, setSeeProducts] = useState(false);
    const [showBtnMore, setShowBtnMore] = useState(false);
    const [resultValues , setResultValues] = useState(false);
    const [showMessage, setShowMessage] = useState();
    const { getAllProducts, products, moreProducts, setMoreProducts , category} = useContext(productsContext);

    useEffect(() => {
        getAllProducts().catch(null);
    }, [seeProducts, moreProducts]);

    const seeMore = () => {
        setSeeProducts(true);
        setShowBtnMore(true);
        setResultValues(true);
    }

    const seeCategories = () => {
        setSeeProducts(true);
        setShowBtnMore(false);
        setResultValues(false);
    }

    const getMoreProducts = () => {
        setSeeProducts(true);

        if (moreProducts < 20) {
            setMoreProducts(moreProducts + 9);
        } else {
            setShowBtnMore(false);
            setShowMessage("😟 We did not find more results.");
        }
    }

    return (
        <div>
            <section className="containerSearcher" id="home">
                <article>
                    <Searcher seeMore={seeMore} seeCategories={seeCategories} />
                </article>
                <article>
                    <img className="imgCoverPage" src={shopping}></img>
                </article>
            </section>
            <section id="listProducts">
                {(seeProducts) && <ListProducts resultValue={(resultValues === true) ? products : category} />}
            </section>
            <section className="boxMoreProducts" >
                {(showBtnMore === true) ?
                    <button className="btnMoreProducts" onClick={getMoreProducts}>more products</button>
                    :
                    <p className="message">{showMessage}</p>
                }
            </section>
        </div>
    );
};

export default Home;