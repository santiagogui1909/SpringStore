import { useState } from "react";
import productsContext from "./index";
import { Howl, Howler } from "howler";
import apiCall from "../Data/api"; //importo el archivo de la llamada a la api

import alertAudio from "../audio/alert.mp3";
import addAudio from "../audio/add.mp3";

const ProductsProvider = ({ children }) => {

    const [bestproducts, setBestProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [productsDetail, setDatail] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState([]);
    const [cart, setCart] = useState([]);
    const [moreProducts, setMoreProducts] = useState(9);
    const [count, setCount] = useState(1);
    const [alertCart, setAlertCart] = useState("");
    const [showAlertCart, setShowAlertCart] = useState(false);

    // this function is called when the user enters the page best products, receives a response with a limit of products

    const getbestProduct = async () => {
        try {
            const resultBestProducts = await apiCall({ url: "https://fakestoreapi.com/products?limit=4" })
            setBestProducts(resultBestProducts);
        } catch (err) {
            setBestProducts([]);
        }
    }

    // get all products

    const getAllProducts = async () => {
        try {
            const resultAllProducts = await apiCall({ url: `https://fakestoreapi.com/products?limit=${moreProducts}` })
            setProducts(resultAllProducts);
        } catch (err) {
            setProducts([]);
        }
    }

    const getAllCategories = async () => {
        try {
            const resultAllCategories = await apiCall({ url: "https://fakestoreapi.com/products/categories" })
            setCategories(resultAllCategories);
        } catch (err) {
            setProducts([]);
        }
    }

    // this call return products that to belong to this category

    const getCategory = async (category) => {
        try {
            const resultCategory = await apiCall({ url: `https://fakestoreapi.com/products/category/${category}` })
            setCategory(resultCategory);
        } catch (err) {
            setProducts([]);
        }
    }

    const getProductDetail = async (id) => {

        if (!id) Promise.reject("Id es requerido");

        try {
            const resultProductDetail = await apiCall({ url: `https://fakestoreapi.com/products/${id}` })
            setDatail(resultProductDetail);
        } catch (err) {
            setProducts([]);
        }
    }

    //this is a library that allows you to play audios

    const soundAlert = new Howl({
        src: [alertAudio]
    });

    const soundAdd = new Howl({
        src: [addAudio]
    });

    // this funtion is for add products to cart

    const addCart = (id) => {

        const checkIdProduct = cart.every(item => {
            return item.id !== id
        })

        // here it compares the identification of the products with the identification that exists in the cart,
        // if it already exists, it shows an alert that a product exists, if not, add the product

        if (checkIdProduct) {
            const data = products.filter(product => {
                return product.id === id
            })

            soundAdd.play();
            Howler.volume(0.2);
            setShowAlertCart(true);
            setAlertCart("added product 🛒");

            setCart([...cart, ...data]);
        } else {
            soundAlert.play();
            Howler.volume(0.2);
            setShowAlertCart(true);
            setAlertCart("this product already exists 👚");
        }

        const timer = setTimeout(() => setShowAlertCart(false), 3000);
        return () => clearTimeout(timer);
    }

    const minusProduct = (id) => {
        let countMinus = count - 1;
        if (countMinus <= -0) return null;
        setCount(countMinus);
    }

    const plusProduct = (id) => {
        setCount(count + 1)
        updateCountProd(id);
    }


    const updateCountProd = (id) => {

        
    }

    // this used to share every function, hook , state or value with useContext and can be used for other components

    return (
        <productsContext.Provider value={{
            getbestProduct, bestproducts,
            getAllProducts, products,
            setMoreProducts, moreProducts,
            getAllCategories, categories,
            getProductDetail, productsDetail,
            getCategory, category,
            setCart, cart,
            addCart, alertCart, setAlertCart,
            setCount, count, minusProduct, plusProduct,
            setShowAlertCart, showAlertCart
        }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsProvider;