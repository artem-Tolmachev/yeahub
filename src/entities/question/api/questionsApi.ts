import { baseApi } from "@/shared/api/baseApi";
import type { QuestionsResponse, ResponseData} from "../model/types";

interface FetchQuestionsPapams{
  page: number;
}

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestion: builder.query<ResponseData, FetchQuestionsPapams>({
      query: (params) => {
        return {
          url: 'questions/public-questions',
          params: {
            page: params.page || 1,
            limit: 10,
            skillFilterMode: 'ANY',
          }
        }
      },
      transformResponse(response: QuestionsResponse) {
        return {
          page: response.page,
          data: response.data,
          totalQuestions: response.total
        }
      }
    }),
  }),
});

export const { useGetQuestionQuery } = questionsApi;