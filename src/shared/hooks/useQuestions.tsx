import { useGetQuestionQuery } from "@/entities/question/api/questionsApi";
import useFilters from "./useFIlters";
import { useGetSpecializationsQuery } from "@/entities/specializations/api/specializationsApi";

export default function useQuestions (){
  const { filters } = useFilters();

  const {
    data: questions,
    isLoading: isLoadQuestions,
    isFetching: isFetchQuestions,
    error: isErrorQuestions,
    refetch: refetchQuestions,
  } = useGetQuestionQuery(filters);

  const {
    data: spezializations,
    isLoading: isLoadSpec,
    error: isErrorSpec,
    isFetching: isFetchingSpec,
    refetch: refetchSpec,
  } = useGetSpecializationsQuery(undefined);

  return {
        totalQuestions: questions?.totalQuestions,
        questionsData: questions?.data,
        isLoadQuestions,
        isFetchQuestions,
        isErrorQuestions,
        refetchQuestions,

        spezializations: spezializations ?? [],
        isLoadSpec,
        isErrorSpec,
        isFetchingSpec,
        refetchSpec
  };
};
