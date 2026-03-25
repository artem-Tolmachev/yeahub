import { baseApi } from "@/shared/api/baseApi"
import type { CollectionItemResp, CollectionsResponse, FetchCollectionsProps } from "../model/types";

export const collectionsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       getCollections:  builder.query<CollectionsResponse, FetchCollectionsProps>({
        query: (params) => {
            const queryParams: FetchCollectionsProps = {
                page: params.page || 1,
                limit: params.limit || 10
            }
            if(params.titleOrDescriptionSearch && params.titleOrDescriptionSearch.length > 0){
                queryParams.titleOrDescriptionSearch = params.titleOrDescriptionSearch;
            }
            if(params.isFree !== undefined){
                queryParams.isFree = params.isFree;
            }
            if(params.specializations !== undefined){
                queryParams.specializations = params.specializations;
            }
            return {
                url: 'collections/public',
                params: queryParams
            }
        },
        transformResponse: (response: CollectionsResponse): CollectionsResponse => {
            return {
                data: response.data || [],
                total: response.total || 0,
                page: response.page || 1,
                limit: response.limit || 10
			}
        }
       }),
       getCollectionsById: builder.query<CollectionItemResp, number>({
        query: (id: number) => ({
            url: `collections/${id}/public`
        })
       })
    })
})

export const {useGetCollectionsQuery, useGetCollectionsByIdQuery} = collectionsApi;