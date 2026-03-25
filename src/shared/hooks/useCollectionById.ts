import { useParams } from 'react-router-dom';
import { useGetCollectionsByIdQuery } from '@/entities/collections/api/collectionsApi';

export function useCollectionById() {
  const { id } = useParams();
  const collectionId = Number(id);
  
  const { 
    data, 
    isLoading, 
    error, 
    refetch,
    isFetching 
  } = useGetCollectionsByIdQuery(collectionId, {
    skip: !id || Number.isNaN(collectionId)
  });
  
  const collection = {
    id: data?.id,
    specialization: data?.specializations ?? [],
    isAccessed: data?.isFree ?? false,
    company: data?.company?.title ?? 'Не известна',
    author: data?.createdBy?.username ?? 'Не известен',
    questionsCount: data?.questionsCount ?? 0,
    keywords: data?.keywords ?? [],
    rawData: data,
    description: data?.description || ''
  };
  
  const isValidId = id && !Number.isNaN(collectionId);
  
  return {
    collection,
    isLoading,
    error,
    refetch,
    isFetching,
    isValidId,
    collectionId: isValidId ? collectionId : null
  };
}