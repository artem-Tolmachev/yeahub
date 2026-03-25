import { useCallback, useEffect } from "react"
import { useSearchParams } from "react-router-dom";

type ArgsValue =  null | number | string | string[] | number[];

export default function useFilterParams() {
const [searchParams, setSearchParams] = useSearchParams();

const getParamsString = useCallback((key: string) => {
    const param = searchParams.get(key);
    return param;
}, [searchParams])

const getParamsArrayNumbers = useCallback((key: string, defautParam: number[] = []): number[] => {
    const param = searchParams.get(key);
    if(!param) return defautParam
    return param?.split(',').map(Number);
}, [searchParams])

const setParams = useCallback((key: string, value: ArgsValue) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
        if(value === '' ||  value === null || (Array.isArray(value) && value.length === 0)) {
          params.delete(key);
        }else if(!Number.isNaN(value)){
            params.set(key, value.toString());
        }else if(Array.isArray(value)){
            params.set(key, value.join(','))
        }
        if(key !== 'page'){
          params.set('page', '1')
        }
        return params;
        });
 }, [setSearchParams])

  const getParamNumber = useCallback((key: string) => {
      const param = searchParams.get(key);
      return Number(param)
  }, [searchParams])

  useEffect(() => {
      if(searchParams.toString() === ''){
          setSearchParams({
              page: '1'
          })
      }
  }, [setSearchParams, searchParams])
  
  return {
    setParams,
    getParamsString,
    getParamNumber,
    getParamsArrayNumbers
  }
}
