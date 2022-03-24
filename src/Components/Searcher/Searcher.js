import { Link } from "react-scroll";
import { useState, useContext, useEffect } from 'react';
import productsContext from '../../Context/index';

const Searcher = ({ seeMore , seeCategories}) => {

    const { getAllCategories , categories , getCategory } = useContext(productsContext);  
    const [selectedCategory , setSelectedCategory] = useState("");

    const getProductCategory = (e) => {
        setSelectedCategory(e.target.value);
    }
    
    const searchCategory = (selectedCategory) => {

        if (selectedCategory === "") {
            console.log("Please select a category");
        } else {
            getCategory(selectedCategory);
        }
    }

    useEffect(() => {
        getAllCategories().catch(null);
    }, []);
    
    useEffect(() => {
        getAllCategories().catch(null);
        getCategory(selectedCategory);
    }, [selectedCategory]);
    
    let categorys = categories.map(value => <option value={value} className="option">{value}</option>);

    return (
        <>
            <div className="sectionSearcher">
                <select className="searcher" type="text" onChange={getProductCategory}>
                    <option hidden selected>Select an option</option>
                    {categorys}
                </select>
                <Link activeClass="active" to="listProducts" spy={true}
                    smooth={true}
                    duration={900}>
                    <button className="btnSearcher" onClick={() => searchCategory(selectedCategory)} onClick={seeCategories}><span className="icon-search"></span></button>  
                </Link>
            </div>
            <div className="sectionInformation">
                <p className="information">Lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam,
                    sed diam nonumy eirmod tempor incididunt ut labore.</p>
                <Link activeClass="active" to="listProducts" spy={true}
                    smooth={true}
                    duration={600}>
                    <button className="btnSeeProducts" onClick={seeMore}>see all products</button>
                </Link>
            </div>
        </>
    );
};

export default Searcher;