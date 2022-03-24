import {useContext } from 'react';
import productsContext from '../../Context/index';
import "./alertCart.css";

const AlertCart = () => {
    const { alertCart } = useContext(productsContext);
    let styleAlert;

    if (alertCart.includes("added product")){
        styleAlert = {background : 'green'}
    } else {
        styleAlert = {background : '#ff7d1a'}
    }

    return (
        <div className="containerAlertCart" style={styleAlert}>
            <p>{alertCart}</p>
        </div>
    );
};

export default AlertCart;