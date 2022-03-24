import { useParams } from "react-router";
import { useEffect, useContext } from "react";

import productsContext from '../../Context/index';
import Buttoms from '../ButtomCart/Buttoms';
import AlertCard from '../AlertCart/AlertCart';
import ButtonTop from '../buttonHome/button';
import fondoDetail from "../../images/fondoDetails.jpg";

import "./productDetails.css";

const ProductDetail = () => {

    const { id } = useParams();
    const { getProductDetail, productsDetail , showAlertCart} = useContext(productsContext);

    useEffect(() => {
        getProductDetail(id).catch(null);
    }, []);

    return (
        <div className="containerProduct">
            <a className="btnBack" href="javascript:history.back()"><span className="icon-level-up"></span></a>
            <img className="backgroundImg" src={fondoDetail} alt="imgBack"></img>
            <section className="boxDetails">
            { (showAlertCart === false) ? "" : <AlertCard /> }
                <h1 className="titleDetail">{productsDetail?.title}</h1>
                <article className="sectionDescription">
                    <p className="descrptionDetail">{productsDetail?.description}</p>
                    <img className="imgProductDetail" src={productsDetail?.image}></img>
                </article>
                <article className="boxCart">
                    <Buttoms id={productsDetail?.id}/>
                    <div className="boxPrice">
                        <p className="priceDetail" >price: <span className="priceSymbol"> $</span> {productsDetail?.price}</p>
                        <p className="categoryDetail">category: {productsDetail?.category}</p>
                    </div>
                </article>
            </section>
            <ButtonTop />
        </div>
    );
};

export default ProductDetail;