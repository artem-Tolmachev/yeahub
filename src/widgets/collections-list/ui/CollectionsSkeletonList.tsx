import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import { CollectionsSkeleton } from '@/shared/ui';
import './collectionsList.scss';

export default function CollectionsSkeletonList({count = 10}: {count?: number} ) {

  return (
    <>
      <div className="col-skeleton__header">
        <Skeleton width={126} height={30} radius={8} />
      </div>
      {Array.from({ length: count }).map((_, i) => (
        <CollectionsSkeleton key={i}/>
      ))}
    </>
  );
}
