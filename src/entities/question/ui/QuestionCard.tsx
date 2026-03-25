import { Accordion, Surface } from '@/shared/ui';
import './question.scss';
import type { Question } from '../model/types';
import { memo } from 'react';

 function QuestionCard({question}: {question: Question}) {

  return (
    <Surface 
    padding='lg'
    >
      <Accordion title={question.title}>
        <div className="answer-block">
          <div className="answer-block__wr">
            <div className="answer-block__inf">
              Cложность:
              <span>{question.complexity}</span>
            </div>
            <div className="answer-block__inf">
              Рейтинг:
              <span>{question.rate}</span>
            </div>
            <button className="answer-block__details">
              <span>Подробнее</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"
                  fill="#6a0bff"
                />
              </svg>
            </button>
          </div>
          {question.imageSrc && <img src={question.imageSrc} />}
          <div dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
        </div>
      </Accordion>
    </Surface>
  );
}

export default memo(QuestionCard);