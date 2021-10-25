import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

const baseUrl = ''

const cryptoApiHeaders = {
    'x-rapidapi-host': '',
    'x-rapidapi-key': ''
}

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
          query: () => createRequest(`/exchanges`),
        })
    })
})