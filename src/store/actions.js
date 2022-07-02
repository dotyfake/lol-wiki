import { SET_THERME_COLOR, SET_FAVORITE_CHAMP } from '~/store';
export const setThermeColor = (color) => {
    return {
        type: SET_THERME_COLOR,
        color,
    };
};

export const setFavoriteChamp = (champions) => {
    return {
        type: SET_FAVORITE_CHAMP,
        champions,
    };
};
