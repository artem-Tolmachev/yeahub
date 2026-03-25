import { CollectionDitailsCard } from '@/entities/collections';
import QuestionsListWidget from '@/widgets/questions-list/ui/QuestionsListWidget';
import CollectionDitailsFiltersWidget from '@/widgets/collections-filters/ui/CollectionDitailsFiltersWidget';
import { CardGuru, CollectionsSkeleton, ErrorMessage } from '@/shared/ui';
import FiltersSkeleton from '@/widgets/collections-filters/ui/FiltersSkeleton';
import { useCollectionById } from '@/shared/hooks';
import './collectionDetailsPage.scss';

export default function ColectionDitails() {
  const { collection, error, refetch, isFetching, isLoading } = useCollectionById();

  return (
    <div className="collection-ditalis">
      <div className="collection-ditalis__container container">
        <div className="collection-ditalis__questions">
          {(isFetching || isLoading) ? (
            <CollectionsSkeleton />
          ) : error ? (
            <ErrorMessage error={error} onRetry={refetch} />
          ) : (
            <CollectionDitailsCard title={collection.description} />
          )}
          <QuestionsListWidget />
        </div>
        <div className="collection-ditalis__wr">
          {(isFetching || isLoading) ? (
             <FiltersSkeleton />
          ) : error ? (
            <ErrorMessage error={error} onRetry={refetch} />
          ) : (
              <CollectionDitailsFiltersWidget collection={collection} />
          )}
          <CardGuru />
        </div>
      </div>
    </div>
  );
}
