import type { Specialization } from '@/entities/collections';
import { FILTER_VISIBLE_COUNT } from '@/shared/constants/constants';
import { Button, FilterSection, FilterToggle } from '@/shared/ui';
import { useState } from 'react';

interface Props {
  spec: Specialization[];
  toggleSpec: (args: number) => void;
  specializations: number[] | undefined;
}

export default function SpecFilter({ spec, toggleSpec, specializations }: Props) {
  const [extended, seteXtended] = useState(false);
  const values = extended ? spec : spec.slice(0, FILTER_VISIBLE_COUNT);

  return (
    <FilterSection
      title="Специализация"
      toggle={
        spec.length > FILTER_VISIBLE_COUNT && (
          <FilterToggle onChange={() => seteXtended((prev) => !prev)} isExtended={extended} />
        )
      }
    >
      {values.map((item) => {
        const isActive = specializations?.includes(item.id);
        return (
          <Button
            onClick={() => toggleSpec(item.id)}
            key={item.id}
            variant="primary"
            isActive={isActive}
          >
            {item.title}
          </Button>
        );
      })}
    </FilterSection>
  );
}
