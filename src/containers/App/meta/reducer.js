import * as actions from './constants'
export const initialState = {
    isLoading: false
}

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.SET_LOADING:
            return {
                isLoading: !state.isLoading
            }
        default:
            return state
    } 
}

export default appReducer;