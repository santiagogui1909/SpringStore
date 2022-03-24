import { useState, useEffect, useContext } from 'react';
import Lightbox from '../Lightbox/Lightbox';
import Buttoms from '../ButtomCart/Buttoms';
import AlertCard from '../AlertCart/AlertCart';
import ButtonTop from '../buttonHome/button';

import productsContext from '../../Context/index';

import './BestProducts.css';

const BestProducts = () => {

    const [values, setValueProduct] = useState([]);
    const [totalDesc, setTotalDesc] = useState([]);
    const { getbestProduct, bestproducts, showAlertCart } = useContext(productsContext);
    let desc = 0;

    useEffect(() => {
        getbestProduct();
    }, []);

    // function that get the id of product and get the datas for render

    const getData = (e, id) => {
        setValueProduct(e.filter(value => value.id === id));
        let price = (e.filter(value => value.id === id)).map(value => value.price);
        offers(price);
    }

    const offers = price => {
        desc = price * 0.30;
        setTotalDesc(Math.round(price - desc));
    }

    return (
        <>
            <a className="btnBack" href="javascript:history.back()"><span className="icon-level-up"></span></a>
            <div className="containerProducts">
                {(showAlertCart === false) ? "" : <AlertCard />}
                <section className="lightBox">
                    <Lightbox getData={getData} products={bestproducts} />
                </section>
                <section className="informationProduct">
                    {values.map((value , index) =>
                        <>
                            <h2 key={index} className="titleProduct">{value.title}</h2>
                            <p className="description">{value.description}</p>
                            <p className="price">price: <strong> $</strong><span>{value.price}</span> - <span> 20%</span></p>
                            <p className="price">final price:<strong>$</strong><label className="finalPrice">{totalDesc}</label></p>
                            <Buttoms id={value?.id} />
                        </>
                    )}
                </section>
                <ButtonTop />
            </div>
        </>
    );
};

export default BestProducts;