import { useMemo } from 'react';
import { stringToBoolean } from '../utils/stringToBoolean';
import useFilterParams from './useFilterParams';

export default function useFilters() {
  const filterParams = useFilterParams();
  
  const filters = useMemo(() => {
    return {
      page: filterParams.getParamNumber('page'),
      limit: 10,
      titleOrDescriptionSearch: filterParams.getParamsString('title') || '',
      specializations: filterParams.getParamsArrayNumbers('specialization')?.length ? 
      filterParams.getParamsArrayNumbers('specialization') : undefined,
      isFree: stringToBoolean(filterParams.getParamsString('isFree'))
    }
  }, [filterParams])

  const setTitleParams = (title: string) => {
    filterParams.setParams('title', title)
  }

  const toggleAccess = (value: string) => {
    filterParams.setParams('isFree', value.toString())
  }

  const togglePage = (page: number | null) => {
    filterParams.setParams('page', page)
  }

  const toggleSpec = (specializationId: number) => {
    const currentSpec = filterParams.getParamsArrayNumbers('specialization'); 
    let isExist = currentSpec?.includes(specializationId);
    let newArr: number[] = [];
    if(isExist){
      newArr = currentSpec.filter(v => v !== specializationId)
    }else{
      newArr = [...currentSpec, specializationId]
    }
    filterParams.setParams('specialization', newArr);
  }

  return {
    filters,
    setTitleParams,
    toggleSpec,
    toggleAccess,
    togglePage,
    title: filters.titleOrDescriptionSearch,
    specializations: filters.specializations,
    isFree: filters.isFree,
    currentPage: filters.page
  };
}
