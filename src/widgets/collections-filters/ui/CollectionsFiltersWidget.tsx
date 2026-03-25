import { AccessFilter, SpecFilter } from '@/features/collection-filters';
import { ErrorMessage, Search, Surface } from '@/shared/ui';
import FiltersSkeleton from './FiltersSkeleton';
import { useFilters, useQuestions } from '@/shared/hooks';
import './collectionsFilters.scss';

export default function CollectionsFiltersWidget() {
  const { spezializations, isLoadSpec, isErrorSpec, isFetchingSpec, refetchSpec } = useQuestions();

  const { setTitleParams, title, toggleSpec, specializations, toggleAccess } =
    useFilters();

  if (isLoadSpec || isFetchingSpec) 
    return <Surface 
        padding='lg'
        variant='elevated' className="collection-filters">
      <FiltersSkeleton />
    </Surface>;

  if (isErrorSpec)
    return (
      <div className="collection-filters">
        <ErrorMessage error={isErrorSpec} onRetry={refetchSpec} />
      </div>
    );

  return (
    <Surface 
    padding='lg'
    variant='elevated'
    className="collection-filters"
    >
      <Search value={title} onChange={setTitleParams} placeholder="Введите запрос…" />
      <SpecFilter
        spec={spezializations}
        toggleSpec={toggleSpec}
        specializations={specializations}
      />
      <AccessFilter toggleAccess={toggleAccess} />
    </Surface>
  );
}
