export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}
export const addMovie = (title, director, metascore, genre, description) => {
    const newMovie = {
        id: Date.now(),
        title: title,
        director: director,
        metascore: metascore,
        genre: genre,
        description: description
    }
    return(
        {type: ADD_MOVIE, payload: newMovie}
    )
}