import { useState, useContext, useEffect, Fragment } from 'react';
import {useNavigate} from 'react-router-dom';
import minus from '../../images/icon-minus.svg'
import plus from '../../images/icon-plus.svg'
import productsContext from '../../Context/index';
import deleteImg from '../../images/icon-delete.svg';

import "./cart.css";

const Cart = ({ setShow }) => {

    const navigate = useNavigate();
    const { setCart, cart, count, plusProduct, minusProduct } = useContext(productsContext);
    const [IdRemove, setIdRemove] = useState(0);
    const [alertRemove, setAlertRemove] = useState(false);
    const [aceptRemove, setAceptRemove] = useState(false);
    const [total, setTotal] = useState(0);
    const [productForDelete, setProductForDelete] = useState("");

    const alertRemoveProd = () => {
        setAlertRemove(true);
    }

    // function that used useEffect for verify and show the user if the product select is correct for delete 
    useEffect(() => {
        let product = cart.filter(value => value.id === IdRemove);
        let img = product.map(value => value.image);
        setProductForDelete(img);
    }, [IdRemove]);

    // function for delete a product selected
    useEffect(() => {
        const removeProduct = id => {
            cart.forEach((item, index) => {
                if (item.id === id) {
                    cart.splice(index, 1);
                }
            })
            setCart([...cart]);
            setAlertRemove(false);
            setAceptRemove(false);
        }
        removeProduct(IdRemove);
    }, [aceptRemove])

    useEffect(() => {
        const totalProducts = cart => setTotal(cart.map(value => value.price).reduce((a, b) => a + b, 0));
        totalProducts(cart);
    }, [cart])


    const cancelPayment = () => {
        setCart([]);
        setShow(false);
    }

    const makePayment = () => {
        navigate('/paymentform')
        setShow(false);
    };

    return (
        <>
            <span className="icon-window-close close" onClick={() => setShow(false)}></span>
                <section className="containerCart">
                    <p className="titleContainerCart">your products</p>
                    <section className="listProdCart">
                    {
                        (cart.length > 0) ?
                            <>
                                {cart.map(product => {

                                    return (
                                        <article id={product.id} className="sectionCart">
                                            <img className="imgCardProd" src={product?.image}></img>
                                            <section className="infoProdCart">
                                                <p className="titleCart">{product?.title}</p>
                                                <p className="priceCart">$ {product?.price}</p>
                                                <section className="boxButtomSecctionCard">
                                                    <p className="quantity">quantity:</p>
                                                    <img className="buttomsImgCart" src={minus} onClick={()=> minusProduct(product.id)} alt="minus"></img>
                                                    <p className="countCart" >{count}</p>
                                                    <img className="buttomsImgCart" src={plus} onClick={()=> plusProduct(product.id)} alt="plus"></img>
                                                </section>
                                            </section>
                                            <img src={deleteImg} className="btnDelete" onClick={() => alertRemoveProd(setIdRemove(product.id))}></img>
                                        </article>
                                    )
                                })}
                            </>
                            :
                            <p className="messageAddProducts">There are no products added to the cart yet.</p>
                    }
                    </section>
                    <section className="sectionPay">
                        <button className="btnCancel" onClick={()=> cancelPayment()}>cancel purchase</button>
                        <button className="btnPay" onClick={makePayment}>to pay</button>
                        <label className="total">Total =<span> $ </span>{Math.round(total)}</label>
                    </section>
                </section>

                {/* alert for confirm delete product */}

                {(alertRemove) &&
                    <section className="alertRemove">
                        <p>do you want to remove this product?</p>
                        <article className="boxActionsDelect">
                            <img className="imgProductDelete" src={productForDelete}></img>
                            <button className="btnAlert" onClick={() => alertRemoveProd(setAceptRemove(true))}>yes, delete it</button>
                            <button className="btnAlert" onClick={() => setAlertRemove(false)}>do not delete it</button>
                        </article>
                    </section>
                }
        </>
    );
};

export default Cart;