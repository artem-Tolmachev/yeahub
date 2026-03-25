import { CollecionsListWidget } from '@/widgets/collections-list';
import './colections.scss';
import { CollectionsFiltersWidget } from '@/widgets/collections-filters';

export default function CollectionPage() {
  return (
    <section className="colections-page">
        <div className='colections-page__container container'>
          <CollecionsListWidget/>
          <CollectionsFiltersWidget/>
        </div>
    </section>
  )
}