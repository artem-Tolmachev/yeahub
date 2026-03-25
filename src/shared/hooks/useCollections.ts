import { useGetCollectionsQuery } from "@/entities/collections/api/collectionsApi";
import useFilters from "./useFIlters";

export default function useCollections() {
const {filters} = useFilters();
const { 
        data: collections, 
        error: errorColl, 
        refetch: refetchCollections,
        isLoading: isLoadCollections,
        isFetching: isFetchingCollections,
     } = useGetCollectionsQuery(filters);

  return {
        collections: collections?.data,
        totalCollections: collections?.total ?? 0,
        errorCollections: errorColl,
        refetchCollections,
        isLoadCollections,
        isFetchingCollections,
  }
}
