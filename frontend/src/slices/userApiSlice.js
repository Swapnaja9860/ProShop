import {USERS_URL} from '../constants';
import { apiSlice } from './apiSlice';

// we can use the api slicing instead of fetch and axios
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        // for GET method --> builder.query and POST metod --> builder.mutation
        login: builder.mutation({
            query: (data) => ({
                url : `${USERS_URL}/auth`,
                method: 'POST',
                body : data,
            }),
        }),
        logout : builder.mutation({
            query: () => ({
                url : `${USERS_URL}/logout`,
                method: 'POST',
            }),
        })
    })
})

export const {useLoginMutation, useLogoutMutation} = userApiSlice;
