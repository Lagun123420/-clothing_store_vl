import React from "react";
import ButtonHome from "../../components/UI/buttonHome/ButtonHome";
import Footer from "../../components/UI/Footer/Footer";
import cl from './SetClothes.module.css';

export const SetClothes = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.buttons}>
                <ButtonHome 
                    href={'/'} 
                    className={cl.buttonHome}
                    width={'25px'}
                    height={'25px'}
                />
            </div>
            <div className={cl.header}>
                <div className={cl.title}>Одяг</div>
            </div>
            <div className={cl.main}>
                <div className={cl.info}><span>Трендові моделі лосін в рубчик, велосипедки, штани, базові футболки</span></div>

                <div className={cl.info}><span>Також накидки в стилізації під вишиванку, адже цi мотиви зараз на піку популярності.</span></div>

                <div className={cl.info}><span>Крім цього, кожен виріб комфортний і підходить для тривалого носіння.</span></div>
            </div>
            <Footer/>
        </div>
    );
}

export default SetClothes;