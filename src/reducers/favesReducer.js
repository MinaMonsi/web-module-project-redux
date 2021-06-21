import { ADD, TOGGLE, DELETE } from '../actions/favesActions.js';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE:
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
            case DELETE:
                return {
                    ...state,
                    favorites: state.favorites.filter(item=>(action.payload !== item.id))
                }
    
            case ADD: 
              return {
                  ...state,
                  favorites: [
                      ...state.favorites,
                      action.payload
                    ]
              }

          default:
              return state;
    }
}

export default reducer;