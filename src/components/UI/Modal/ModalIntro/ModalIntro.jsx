import React from "react";
import cl from './ModalIntro.module.css'

function closeIntro () {
    document.getElementById('modalIntro').style.display='none';
}

setTimeout(closeIntro, 8000);

export const ModalIntro = () => {
    return (
        <>
            <div className={cl.modalIntro} id='modalIntro'>
                <h1 className={cl.modalIntro_first}>Красива нижня білизна підвищує жіночу самооцінку...</h1>
                <h1 className={cl.modalIntro_second}>... навіть якщо іншим її не видно.</h1>
                <button className={cl.skipBtn} onClick={e => closeIntro()}>Пропустити</button>
            </div>
        </>
    )
}

export default ModalIntro;