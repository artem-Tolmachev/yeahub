import { CollectionCard } from '@/entities/collections';
import { PAGE_SIZE } from '@/shared/constants/constants';
import { ErrorMessage, ListEmpty, Pagination, Surface } from '@/shared/ui';
import CollectionsSkeletonList from './CollectionsSkeletonList';
import './collectionsList.scss';
import useCollections from '@/shared/hooks/useCollections';

export default function CollectionsListWidget() {
  const {
    collections,
    totalCollections,
    errorCollections,
    refetchCollections,
    isFetchingCollections,
    isLoadCollections,
  } = useCollections();

  const totalPages = totalCollections ? Math.ceil(totalCollections / PAGE_SIZE) : 0;
  
  if (isFetchingCollections || isLoadCollections)
    return (
      <Surface className="collections-list" padding="md">
        <CollectionsSkeletonList />
      </Surface>
    );

  if (errorCollections)
    return <ErrorMessage error={errorCollections} onRetry={refetchCollections} />;

  if (!collections?.length)
    return (
      <div className="collections-list__items">
        <ListEmpty />
      </div>
    );
    
  return (
    <Surface className="collections-list" padding="md">
      <div className="collections-list__header">
        <h1 className="collections-list__title">Коллекция</h1>
      </div>
      <div className="collections-list__items">
        {collections?.map((item) => (
          <CollectionCard
            key={item.id}
            collectionId={item.id}
            specializations={item.specializations}
            description={item.description}
            keywords={item.keywords}
            isFree={item.isFree}
          />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </Surface>
  );
}
