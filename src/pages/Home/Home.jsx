import React from "react";
import MyButton from "../../components/UI/button/MyButton";
import ModalIntro from "../../components/UI/Modal/ModalIntro/ModalIntro";
import cl from './Home.module.css'

export const Home = () => {
    return (
        <>  
            <div className={cl.header}>
                <div className={cl.logo}>
                    Білизна для всіх
                </div>
            </div>
            <div className={cl.main}>
                <div className={cl.btn}>
                    <MyButton name={'Нижня білизна'} />
                    <MyButton name={'Готові луки'} />
                </div>
            </div>
            <ModalIntro/>
        </>
    )
}  

export default Home;