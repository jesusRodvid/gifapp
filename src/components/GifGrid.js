 import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    
    const [images, setImages] = useState([]);

    useEffect( () =>{

        getGifs();
    }, []) //solo se ejecuta la funcion getgif cuando el componente es renderizado por primera vez
    
    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=elden&limit=10&offset=0&rating=g&lang=en&api_key=9CZOYwmFvHpwfWBdO1DHLOVKguNU81Mz'
        const respo = await fetch ( url );
        const {data} = await respo.json();

        const gifs = data.map(img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        })

        console.log(gifs);
        setImages( gifs );
    }
    //getGifs();
    
    return (
        <div>
            <h3>{ category }</h3>
            <ol>
                {
                    images.map(  img => (
                       <GifGridItem 
                       key = {img.id}
                       {...img }/>
                    ))
                    
                }

            </ol>
            
        </div>
    )
}
