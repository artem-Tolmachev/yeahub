import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import './collectionsFilters.scss';

export default function FiltersSkeleton() {
  return (
    <div className='filters-skeleton'>
        <Skeleton width={344} height={48} radius={68} />
        <div className='filters-skeleton__skills'>
            <Skeleton width={135} height={10} radius={12} />
            <div className="filters-skeleton__skills-items">
                <Skeleton width={90} height={42} radius={12} />
                <Skeleton width={150} height={42} radius={12} />
                <Skeleton width={130} height={42} radius={12} />
            </div>
        </div>
        <div className="filters-skeleton__access">
            <Skeleton width={135} height={10} radius={12} />
            <div className="filters-skeleton__access-items">
                <Skeleton width={70} height={42} radius={12} />
                <Skeleton width={130} height={42} radius={12} />
            </div>
        </div>
    </div>
  )
}
