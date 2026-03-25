import { Button, FilterSection } from '@/shared/ui';
import type { Specialization } from '@/entities/specializations';
import { memo } from 'react';
import './collectionsFilters.scss';

function SpecDitailsWidget({
  specialization,
}: {
  specialization: Specialization[];
}) {
  return (
    <FilterSection title="Специализация">
      {specialization.map((item) => {
        return (
          <Button key={item.id} variant="disabled">
            {item.title}
          </Button>
        );
      })}
    </FilterSection>
  );
}

export default memo(SpecDitailsWidget)