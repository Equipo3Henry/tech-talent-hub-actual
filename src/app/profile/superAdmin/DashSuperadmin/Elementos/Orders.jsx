import React from "react";
import style from './Orders.module.css';

const Orders = () =>{
    return(
        <div className={style.container}>Orders
            <h2>Vacancies applyed</h2>
            <ul>
                <li></li>
                {/* {users.map((order, id)=>{
                    <li key=id className={style.order}>
                        <vacanciApply/>
                    </li>
                })} */}
            </ul>
        </div>
    )
}
export default Orders;