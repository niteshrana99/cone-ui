import * as constants from "./constants";

export const getProducts = () => ({
    type:constants.GET_PRODUCTS
});

export const getProductsSuccess = payload => ({
    type: constants.GET_PRODUCTS_SUCESS,
    payload
});

export const getProductsError = payload => ({
    type: constants.GET_PRODUCTS_ERROR,
    payload
});