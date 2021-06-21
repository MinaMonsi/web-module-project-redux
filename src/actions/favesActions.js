export const ADD = "ADD"
export const TOGGLE = "TOGGLE"
export const DELETE = "DELETE"

export function toggleFavorites () {
    return{
        type: TOGGLE
    }
}

export const addFavorites = (title, director, metascore, genre, description) => {
    const newFavorite = {
        id: Date.now(),
        title: title,
        director: director,
        metascore: metascore,
        genre: genre,
        description: description
    }
    return(
        {type: ADD, payload: newFavorite}
    )
}
    export function removeFavorite (id){
        return{
            type: DELETE,
            payload:id
        }
    }