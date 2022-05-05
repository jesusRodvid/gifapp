//  import React, { useState, useEffect } from 'react'
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from '../helpers/getGifs';

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{category}</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                {
                
                    images.map((img) => (
                        <GifGridItem 
                            key={img.id} 
                            {...img} />
                 ))}
            </div>
        </>
    );

    //----------NO CUMSTONHOOK

    // const [images, setImages] = useState([]);

    //console.log(data);
    // useEffect( () =>{
    //     getGifs( category )
    //         .then( setImages )
    // }, [category]) //solo se ejecuta la funcion getgif cuando el componente es renderizado por primera vez

    //getGifs();
    // return (
    //     <>
    //     <h3>{ category }</h3>
    //     { loading ? 'Cargando...':'Fin de carga'}
    //     <div className="card-grid">

    //             {
    //                 images.map(  img => (
    //                    <GifGridItem
    //                    key = {img.id}
    //                    {...img }/>
    //                 ))
    //             }
    //     </div>
    //     </>

    // )
};
