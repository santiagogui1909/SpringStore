import { useState, useContext, useEffect, Fragment } from 'react';
import productsContext from '../../Context/index';
import deleteImg from '../../images/icon-delete.svg';

import "./cart.css";

const Cart = ({ setShow }) => {

    const { setCart, cart, count } = useContext(productsContext);
    const [IdRemove, setIdRemove] = useState(0);
    const [alertRemove, setAlertRemove] = useState(false);
    const [aceptRemove, setAceptRemove] = useState(false);
    const [total, setTotal] = useState(0);
    const [productForDelete , setProductForDelete] = useState("");

    const alertRemoveProd = () => {
        setAlertRemove(true);
    }
    
    // function that used useEffect for verify and show the user if the product select is correct for delete 
    useEffect (() => {
        let product = cart.filter(value => value.id === IdRemove);
        let img = product.map(value => value.image);
        setProductForDelete(img);
    },[IdRemove]);

    // function for delete a product selected

    useEffect(() => {
        const removeProduct = id => {
            cart.forEach((item, index) => {
                if (item.id === id) {
                    cart.splice(index, 1);
                }
            })
            setCart([...cart])
            setAlertRemove(false);
            setAceptRemove(false);
        }
        removeProduct(IdRemove);
    }, [aceptRemove])

    useEffect(() => {
        const totalProducts = cart => setTotal(cart.map(value => value.price).reduce((a, b) => a + b, 0));
        totalProducts(cart);
    }, [cart])

    return (
        <div className="containerCart">
            <span className="icon-window-close close" onClick={() => setShow(false)}></span>
            <section className="sectionCart">
                <table className="tableProd">
                    <tr>
                        <th>imagen</th>
                        <th>name product</th>
                        <th>price</th>
                        <th>amount</th>
                        <th>delete</th>
                    </tr>
                    {
                        (cart.length > 0) ?
                            <>
                                {cart.map(product => {
                                    return (<tr>
                                        <td><img className="imgCardProd" src={product?.image}></img></td>
                                        <td><p className="titleCart">{product?.title}</p></td>
                                        <td><p className="priceCart">$ {product?.price}</p></td>
                                        <td><p>{count}</p></td>
                                        <td><img src={deleteImg} className="btnDelete" onClick={() => alertRemoveProd(setIdRemove(product.id))}></img></td>
                                    </tr>)
                                })}
                            </>
                            :
                            <p className="messageAddProducts">There are no products added to the cart yet.</p>
                    }
                </table>

                <section className="sectionPay">
                    <button className="btnCancel">cancel purchase</button>
                    <button className="btnPay">to pay</button>
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
        </div>
    );
};

export default Cart;