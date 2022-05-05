export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category) }&limit=10&offset=0&rating=g&lang=en&api_key=9CZOYwmFvHpwfWBdO1DHLOVKguNU81Mz`
    const respo = await fetch( url );
    const {data} = await respo.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    })

    return gifs;
}