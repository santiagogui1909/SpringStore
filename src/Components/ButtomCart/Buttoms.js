import {useContext} from 'react';
import productsContext from '../../Context/index';
import minus from '../../images/icon-minus.svg'
import plus from '../../images/icon-plus.svg'
import '../BestProducts/BestProducts.css';

const Buttoms = ({id}) => {

    const {addCart, count, setCount , minusProduct} = useContext(productsContext);

    return (
        <div className="boxbuttomsCart">
            <section className="boxButtoms">
                <img className="buttomsImg" src={minus} onClick={minusProduct}></img>
                <p className="count" >{count}</p>
                <img className="buttomsImg" src={plus} onClick={() => setCount(count + 1)}></img>
             </section>
            <button className="btnAddCart" onClick={() => addCart(id)}>add to cart</button>
        </div>
    );
};

export default Buttoms;