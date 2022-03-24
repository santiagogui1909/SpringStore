import {useEffect , useState, useContext} from 'react';

import './Lightbox.css';

const Lightbox = ({products , getData}) => {

    const [allProducts , setProduct] = useState([]);
    const [imgProduct , setImgProduct] = useState("");
    const [id , setId] = useState(1);

    // function for switch beetwen products in the lightBox

    useEffect(() => {
        const getValues = (e , id) => {
            setImgProduct(e.filter(value => value.id === id).map(value => value.image));
            setProduct(e.map((value , index) => <img key={index} id={value.id} src={value.image} onClick={getIdProduct}></img>));
        }
        getValues(products, id);
        getData(products , id);
    },[id , products]);

    
    const getIdProduct = (e) => {
        setId(parseInt(e.target.id));
    }

    return (
        <>
            <section>
                <img className="imgLightbox" src={imgProduct}></img>
            </section>
            <section className="miniPictures">
                {allProducts}  
            </section>
        </>
    );
};

export default Lightbox;