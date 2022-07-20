import React from "react";
import cl from './SetClothes.module.css';

export const SetClothes = () => {
    return (
        <>
            <div className={cl.main}>
                <div className={cl.info}><span>Трендові моделі лосін в рубчик, велосипедки, штани, базові футболки</span></div>

                <div className={cl.info}><span>Також накидки в стилізації під вишиванку, адже цi мотиви зараз на піку популярності.</span></div>

                <div className={cl.info}><span>Крім цього, кожен виріб комфортний і підходить для тривалого носіння.</span></div>
            </div>
        </>
    );
}

export default SetClothes;