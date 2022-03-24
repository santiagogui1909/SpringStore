import basket from '../../images/etiqueta.png';
import logo from '../../images/logo.png';

import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="containerFooter">
                <section className="imgsFooter">
                    <img src={logo}></img>
                    <img src={basket}></img>
                </section>
                <section className="sectionContact">
                    <header>
                        <h2 className="titleContact">Contact</h2>
                    </header>
                    <h3>phone</h3>
                    <p>31123423234</p>
                    <h3>email</h3>
                    <p>springstore@gmail.com</p>
                    <h3>address</h3>
                    <p>cr 12 #34-83 bogota/colombia</p>
                </section>
            </div>

            <p className="copy">Copyright &copy; 2021 - springStore / S.G</p>
        </footer>
    );
};

export default Footer;