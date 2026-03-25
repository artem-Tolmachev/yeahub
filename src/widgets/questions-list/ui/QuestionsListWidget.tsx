import { QuestionCard } from '@/entities/question';
import { ErrorMessage, Pagination, Surface } from '@/shared/ui';
import { PAGE_SIZE } from '@/shared/constants/constants';
import QuestionSkeletonList from './QuestionSkeleton';
import { useQuestions } from '@/shared/hooks';
import './questionsList.scss';

export default function QuestionsListWidget() {
  const { 
    totalQuestions, 
    questionsData, 
    isLoadQuestions,
    isFetchQuestions,
    isErrorQuestions,
    refetchQuestions
  } = useQuestions();
  
  const questions = questionsData ?? [];
  const totalPages =  totalQuestions ? Math.ceil(totalQuestions / PAGE_SIZE) : 0;

  if(isLoadQuestions || isFetchQuestions) {
    return <div className="questions-list">
      <QuestionSkeletonList/>
    </div>
  }

  if(isErrorQuestions)
    return <div>
      <ErrorMessage error={isErrorQuestions} onRetry={refetchQuestions} />
    </div>
  
  return (
    <Surface padding='md' className="questions-list">
      <div className="questions-list__text">
        <h1 className="questions-list__title">Вопросы</h1>
      </div>
      <div className="questions-list__content">
        {questions.map((question) => (
          <QuestionCard question={question} key={question.id}/>
        ))}
      </div>
      <Pagination totalPages={totalPages}/>
    </Surface>
  );
}
