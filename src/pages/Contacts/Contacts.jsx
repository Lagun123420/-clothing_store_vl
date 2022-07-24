import React from "react";
import MyButton from "../../components/UI/button/MyButton";
// import ButtonLink from "../../components/UI/buttonLink/ButtonLink";
import Footer from "../../components/UI/Footer/Footer";
import cl from './Contacts.module.css'

export const Contacts = () => {
    return(
        <>
            <div className={cl.header}>
                <div className={cl.title}>Наші контакти</div>
            </div>
            <div className={cl.main}>
                <div className={cl.info}>
                    <div>
                        <span>Телефон : </span>
                    </div>
                    <div>
                        <span>+38 (097) 757 82 29</span>
                    </div>
                </div>

                {/* <div className={cl.info}>
                    <div className={cl.buttonLink}>
                        <ButtonLink href='https://t.me/vitadoroga' name={'Telegram'}/>
                    </div>
                </div> */}

                {/* <div className={cl.info}>
                    <div className={cl.buttonLink}>
                        <ButtonLink 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href='https://instagram.com/biluzna_vorohta_?igshid=YmMyMTA2M2Y=' 
                            name={'Instagtram'}/>
                    </div>
                </div> */}
            </div>
            <Footer/>
        </>
    )
}

export default Contacts;