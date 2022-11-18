import React from "react";
import cl from './ModalIntro.module.css';



export const ModalIntro = (props) => {
    function closeIntro () {
        if (document.getElementById('modalIntro') !== null) {
            document.getElementById('modalIntro').style.display='none';
            props.setIsLoading(true);
        }
    }
    
    setTimeout(closeIntro, 8000);

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