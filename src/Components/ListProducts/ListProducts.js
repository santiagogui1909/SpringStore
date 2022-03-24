
import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import productsContext from '../../Context/index';
import AlertCard from '../AlertCart/AlertCart';
import ButtonTop from '../buttonHome/button';
import './listProducts.css';

const ListProducts = ({ resultValue }) => {

    const { addCart , setShowAlertCart , showAlertCart } = useContext(productsContext);
    const [getProduct, setProduct] = useState([]);
    const [getId, setId] = useState([]);   

    // this function gets id and calls another funcion that adds the product to the cart
    useEffect(() => {
        const getIdProduct = (getId) => {
            addCart(getId);
        }
        getIdProduct(getId);
    }, [getId]);


    useEffect(() => {
        setShowAlertCart(false);
    }, [])

    useEffect(() => {
        const showProducts = (e) => {
            setProduct(e.map(value =>
                <fragment className="targetProduct">
                    <img className="imgProduct" src={value.image}></img>
                    <p className="priceCard">$ {value.price}</p>
                    <section className="targetInfoProduct">
                        <h2 className="titleListProduct">{value.title}</h2>
                        <div className="btnsProducts">
                            <button className="btnDetails">
                                <Link className="link" to={`/productdetail/${value.id}`}>see product</Link>
                            </button>
                            <button className="btnAdd" onClick={() => setId(value.id)}>add product</button>
                        </div>
                    </section>
                </fragment>
            ))
        }
        showProducts(resultValue);
    }, [resultValue]);

    return (
        <div className="containerListProducts">
            { (showAlertCart === false) ? "" : <AlertCard /> }
            {getProduct}
            <ButtonTop />
        </div>
    );
};

export default ListProducts;
