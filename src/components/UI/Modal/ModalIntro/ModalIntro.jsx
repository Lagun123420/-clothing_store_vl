import React from "react";
import cl from './ModalIntro.module.css'

setTimeout(function(){
    document.getElementById('modalIntro').style.display='none';
 }, 13000);

export const ModalIntro = () => {
    return (
        <>
            <div className={cl.modalIntro} id='modalIntro'>
                <h1 className={cl.modalIntro_first}>Красива нижня білизна підвищує жіночу самооцінку...</h1>
                <h1 className={cl.modalIntro_second}>... навіть якщо іншим її не видно.</h1>
            </div>
        </>
    )
}

export default ModalIntro;