import * as actions from './constants';

export const initialProductState = {
    products: []
}

const productsReducer = (state=initialProductState, action) => {
    switch(action.type) {
        case actions.GET_PRODUCTS:
            return []
        default:
            return initialProductState    
    }
}

export default productsReducer;