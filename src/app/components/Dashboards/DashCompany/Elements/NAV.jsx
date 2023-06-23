import React from "react";
import style from './NAV.module.css';
import Link from "next/link";

const NAV = ({children}) =>{
    return(
        <div className={style.container}>navbar
            {/*Aquí debe estar todo el componente de navbar para aparecer dentro del dashboard*/}
            {/*esto de abajo solo es un ejemplo de cómo podría estar*/}
            <div className={style.rev}>
                <div className={style.buttons}>
                    <Link href='/'/>
                </div>
            </div>
            <main className={style.children}>{children}</main>
        </div>
    )
}
export default NAV;