import React, { useState } from "react";
import { useEffect } from "react";
import MyButton from "../../components/UI/button/MyButton";
import Footer from "../../components/UI/Footer/Footer";
import ModalIntro from "../../components/UI/Modal/ModalIntro/ModalIntro";
import cl from './Home.module.css'

export const Home = () => {
    const [isLoading, setIsLoading] = useState('');

    useEffect(() => {
        if ( isLoading === true ) {
            document.querySelectorAll(`.${cl.logo_first}`)[0].childNodes.forEach((el) => {el.classList.add(cl.active_title_first)});
            document.querySelectorAll(`.${cl.logo_second}`)[0].childNodes.forEach((el) => {el.classList.add(cl.active_title_first)});
            document.querySelector(`.${cl.logo}`).classList.add(cl.active_logo);
            document.querySelector(`.${cl.logo_info}`).classList.add(cl.active_logo_info);
        }
    }, [isLoading])


    return (
        <div className={cl.wrapper}>  
            <div className={cl.header}>
                <div className={cl.logo}>
                    <div className={cl.logo_first}>
                        <div className={cl.logo_first_1}>F</div>
                        <div className={cl.logo_first_2}>e</div>
                        <div className={cl.logo_first_3}>m</div>
                        <div className={cl.logo_first_4}>i</div>
                        <div className={cl.logo_first_5}>n</div>
                        <div className={cl.logo_first_6}>i</div>
                        <div className={cl.logo_first_7}>t</div>
                        <div className={cl.logo_first_8}>y</div>
                    </div>

                    <div className={cl.logo_second}>
                        <div className={cl.logo_second_1}>S</div>
                        <div className={cl.logo_second_2}>t</div>
                        <div className={cl.logo_second_3}>o</div>
                        <div className={cl.logo_second_4}>r</div>
                        <div className={cl.logo_second_5}>e</div>
                    </div>
                </div>
                <div className={cl.logo_info}>
                    Білизна для всіх
                </div>
            </div>
            <div className={cl.main}>
                <div className={cl.btn}>
                    <MyButton href='/underwear' name={'Жіноча білизна'} />
                    <MyButton href='/setclothes' name={'Одяг'} />
                    {/* <MyButton href='/setclothes' name={'Контакти'} /> */}
                </div>
            </div>
            <Footer/>
            <ModalIntro isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
    )
}  

export default Home;