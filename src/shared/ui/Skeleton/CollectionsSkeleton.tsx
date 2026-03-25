import Skeleton from './Skeleton';

export default function CollectionsSkeleton() {
  return (
    <div className="col-skeleton">
      <Skeleton width={157} height={157} radius={12} />
      <div className="col-skeleton__right">
        <div className="col-skeleton__bages">
          <Skeleton width={68} height={20} radius={30} />
          <Skeleton width={68} height={20} radius={30} />
          <Skeleton width={68} height={20} radius={30} />
        </div>
        <div className="col-skeleton__title">
          <Skeleton width={500} height={10} radius={4} />
          <Skeleton width={300} height={10} radius={4} />
        </div>
        <div className="col-skeleton__meta">
          <Skeleton width={60} height={20} radius={4} />
          <Skeleton width={60} height={20} radius={4} />
        </div>
        <div className="col-skeleton__spec">
          <Skeleton width={60} height={20} radius={4} />
          <Skeleton width={100} height={20} radius={4} />
          <Skeleton width={80} height={20} radius={4} />
        </div>
      </div>
    </div>
  );
}
