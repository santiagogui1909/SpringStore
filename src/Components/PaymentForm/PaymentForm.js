import React from 'react';
import logoSpring from '../../images/logo-letra.png';
import chip from '../../images/chip.png';
import './PaymentForm.css';

const PaymentForm = () => {
    return (
        <div>
            <h2 className="titleFormPay">form payment</h2>
            <article className="containerFormPay">
                <form>
                    <article className="cardPayment">
                        <h3>spring card</h3>

                        <section className="sectionLogoCard">
                            <img src={logoSpring} alt="logoCard" />
                        </section>

                        <article className="inputNameCard">
                            <p className="textInput">name</p>
                            <input type="text" placeholder="Enter Your Name" />
                        </article>

                        <article>
                            <p className="numberInput">card number</p>
                            <section className="numberCard">
                                <input type="text" maxlength="4" placeholder="xxxx" />
                                <input type="text" maxlength="4" placeholder="xxxx" />
                                <input type="text" maxlength="4" placeholder="xxxx" />
                                <input type="text" maxlength="4" placeholder="xxxx" />
                            </section>
                        </article>

                        <article className="sectionCodeDateCard">
                            <div className="codeDateCard">
                                <section>
                                    <p className="textInput">date</p>
                                    <input className="codeInput" type="text" placeholder='00/00' />
                                </section>
                                <section>
                                    <p className="textInput">pin</p>
                                    <input className="codeInput" type="text" maxlength="3" placeholder="xxx" />
                                </section>
                            </div>

                            <section className="chip">
                                <img src={chip} alt="chipCard" />
                            </section>
                        </article>
                    </article>

                    <button onClick="submit">realize payment</button>
                </form>
            </article>
        </div>
    );
};

export default PaymentForm;