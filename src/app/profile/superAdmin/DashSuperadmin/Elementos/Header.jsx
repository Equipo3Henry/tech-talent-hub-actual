import React from "react";
import style from './Header.module.css';

const Header = () =>{
    return(
        <div className={style.container}>
            <h2>Wellcome</h2>
            <h1 className={style.texts}>Dashboard</h1>
            <h2>Superadmin</h2>{/* los punrtos deben ser reemplazados con el nombre de la empresa o usuario */}
        </div>
    )
}
export default Header;