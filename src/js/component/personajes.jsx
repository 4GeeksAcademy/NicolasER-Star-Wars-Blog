import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Personajes=() =>{
    const {store, actions} = useContext(Context)

    useEffect(()=>{
        actions.obtenerPersonajes()
    },[]) 

    return(
        <>
        <h1>Personajes</h1>
        <div className="card-group">
            <div className="d-flex flex-row overflow-scroll">
                {store.personajes.map((item, id)=>(
                    <div key={id} class="card" style={{width: "18rem", flex: "none", margin: "10px"}}>
                    <img src={"https://starwars-visualguide.com/assets/img/characters/"+(id+1)+".jpg"} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )

}
