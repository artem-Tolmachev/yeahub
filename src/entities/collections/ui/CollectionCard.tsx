import type { Specialization } from '@/entities/collections';
import Product from '@/shared/assets/Product.png';
import StarsIcon from '@/shared/ui/StarsIcon/StarsIcon';
import { KeywordsList, QuestionIcon, Surface } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
import './collectionDitails.scss';

interface Props {
  specializations: Specialization[];
  description: string;
  keywords: string[];
  isFree: boolean;
  collectionId: number;
}

function CollectionCard({ collectionId, specializations, description, keywords, isFree }: Props) {
  const navigate = useNavigate();

  return (
    <Surface padding="md" onClick={() => navigate(`collection/${collectionId}/?page=1`)}>
      <article className="collection-card">
        <div className="collection-card__content">
          <div className="collection-card__image-wr">
            <img className="collection-card__image" src={Product} alt="Логотип организации" />
          </div>
          <div className="collection-card__content-inner">
            <KeywordsList keywords={keywords} />
            <p className="collection-card__title">{description}</p>
            <div className="collection-card__inf">
              {isFree ? (
                <span className="collection-card__badge collection-card__badge--meta">
                  <StarsIcon fill={'var(--color-primary)'} />
                  Для участников
                </span>
              ) : (
                <span className="collection-card__badge">Для всех</span>
              )}
              <span className="collection-card__badge collection-card__badge--meta">
                <QuestionIcon />
                30 вопросов
              </span>
            </div>
            <p className="collection-card__spec">{specializations[0]?.title}</p>
          </div>
        </div>
      </article>
    </Surface>
  );
}

export default memo(CollectionCard);
