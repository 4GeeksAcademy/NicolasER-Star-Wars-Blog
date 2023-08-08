import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Planetas=() =>{
    const {store, actions} = useContext(Context)

    useEffect(()=>{
        actions.obtenerPlanetas()
    },[]) 

    return(
        <>
        <h1>Planetas</h1>
        <div className="card-group">
            <div className="d-flex flex-row overflow-scroll">
                {store.planetas.map((item, id)=>(
                    <div key={id} class="card" style={{width: "18rem", flex: "none", margin: "10px"}}>
                    {id===0? <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} class="card-img-top" alt="..."/>:
                    <img src={"https://starwars-visualguide.com/assets/img/planets/"+(id+1)+".jpg"} class="card-img-top" alt="..."/>}
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p>Gender:</p>
                        <p>Hair Color:</p>
                        <p>Eye Color:</p>
                        <a href="#" class="btn btn-primary" style={{marginRight: "100px"}}>Learn More</a>
                        <button className="btn btn-outline-warning" onClick={()=> actions.favoritos(item.name)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )

}
