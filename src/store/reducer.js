import { SET_THERME_COLOR, SET_FAVORITE_CHAMP } from '~/store';

const initialState = { thermeColor: 'Aqua', favorite: JSON.parse(localStorage.favorite ?? `[]`) ?? `[]` };
const reducer = (state, action) => {
    switch (action.type) {
        case SET_THERME_COLOR:
            return {
                ...state,
                thermeColor: action.color,
            };
        case SET_FAVORITE_CHAMP:
            let currentFavors;
            if (state.favorite.includes(action.champions)) {
                currentFavors = state.favorite.filter((item) => item !== action.champions);
            } else {
                currentFavors = [...state.favorite, action.champions];
            }
            localStorage.setItem('favorite', JSON.stringify(currentFavors));
            return {
                ...state,
                favorite: currentFavors,
            };
        default:
            throw new Error(`Invalid action ${action.type}`);
    }
};

export { initialState };
export default reducer;
