import React from "react";
import ButtonHome from "../../components/UI/buttonHome/ButtonHome";
import Footer from "../../components/UI/Footer/Footer";
import cl from './Underwear.module.css';

export const Underwear = () => {
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
                <div className={cl.title}>Жіноча білизна</div>
            </div>
            <div className={cl.main}>
                <div className={cl.info}>
                    <span>Красива нижня білизна підвищує жіночу самооцінку, навіть якщо іншим її не видно.</span>
                </div>

                <div className={cl.info}>
                    <span>У магазині Ви зможете підібрати для себе комфортну, красиву та спокусливу жіночу білизну.
                        В якій ви будете відчувати себе більш впевнено, та яка буде зручною на щодень та для особливих випадків.
                    </span>
                </div>

                <div className={cl.info}>
                    <span>В нас Ви знайдете великий вибір бюстгалтерів, трусиків, наборів нижньої білизни, піжам будь якого розмiру!
                        Також в наявності є подарункові сертифікати
                        До того ж для постійний клієнтів діє система знижок
                    </span>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Underwear;