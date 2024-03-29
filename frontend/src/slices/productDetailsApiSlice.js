import {PRODUCTS_URL} from '../constants';
import { apiSlice } from './apiSlice';

// we can use the api slicing instead of fetch and axios
export const productApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getProducts: builder.query({
            query: () => ({ 
                url : PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5
        })
    })
})

export const {useGetProductsQuery} = productApiSlice;