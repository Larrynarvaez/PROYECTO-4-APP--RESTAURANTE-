import React, { useEffect, useState } from 'react';
import {db} from '../assets/firebase';
import {collection , getDocs} from "firebase/firestore/lite"


function Menu(props) {

    const[menu , setMenu] = useState([])

    async function getmenu (){
        const menucol = collection(db, "menu")
        const menusnapshot = await getDocs(menucol)
        const menulist = menusnapshot.docs.map(e=>e.data())
        setMenu(menulist)
    }
    useEffect(()=>{getmenu()},[])
    

    return (
        <div className="menu-container">
            {menu.map((alimento, index) => {
                return (
                    <div className="card" key={index}>
                        <h2>{alimento.item}</h2>
                        <h2>{alimento.precio}</h2>
                        <p>{alimento.descripcion}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Menu;
