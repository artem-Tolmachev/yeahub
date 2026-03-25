import SpecDitailsWidget from './SpecDitailsWidget';
import AccessDitailsWidget from './AccessDitailsWidget';
import Telegram from '@/shared/ui/Socials/Telegram';
import type { CollectionItem } from '@/entities/collections/model/types';
import { Button, Surface } from '@/shared/ui';
import './collectionsFilters.scss';

export default function CollectionDitailsFiltersWidget({collection}: {collection: CollectionItem}) {

  return (
    <Surface
    padding='lg'
    variant='elevated'
    className="collection-filters">
      <SpecDitailsWidget specialization={collection.specialization} />
      <AccessDitailsWidget isAccessed={collection.isAccessed} />
      <div className="collection-filters__item">
        <h3 className="collection-filters__title">Компания</h3>
        <Button className="collection-filters__btn" variant="disabled">
          {collection.company}
        </Button>
      </div>
      <h3 className="collection-filters__title">
        Автор:<span>{collection.author}</span>
      </h3>
      <div>
        <h3 className="collection-filters__title">Количество вопросов</h3>
        <Button variant="disabled">{collection.questionsCount}</Button>
      </div>
      <div className="collection-filters__item">
        <h3 className="collection-filters__title">Ключевые слова</h3>
        {collection.keywords.map((word: string, i: number) => (
          <div className="collection-filters__keyword" key={i}>
            {`#${word}`}
          </div>
        ))}
      </div>
      <div className="collection-filters__describe">
        <Button variant="disabled">
          {<Telegram from="questions" />}
          <div>
            Подпишись на <span>Python Developer</span> Telegram
          </div>
        </Button>
      </div>
    </Surface>
  );
}
