import { ACCESS_VARIANT } from '@/shared/constants/constants';
import { Button, FilterSection } from '@/shared/ui';
import StarsIcon from '@/shared/ui/StarsIcon/StarsIcon';
import { useState } from 'react';
import './collectionFilters.scss';

interface Props {
  toggleAccess: (args: string) => void;
}

export default function AccessFilter({ toggleAccess }: Props) {
  const [accessId, setAccessId] = useState<number | null>(null);

  const handleAccess = (value: string, id: number) => {
    toggleAccess(value);
    setAccessId(id);
  };

  return (
    <FilterSection title="Доступ">
      {ACCESS_VARIANT.map((item, i) => {
        const isActive = i === accessId;
        return (
          <Button
            className="access-button"
            onClick={() => handleAccess(item.value.toString(), item.id)}
            key={item.id}
            variant="primary"
            isActive={isActive}
          >
            {item.value ? (
              <>
                <StarsIcon fill={'var(--color-text-dunkle)'} /> <span>{item.lable}</span>
              </>
            ) : (
              <span>{item.lable}</span>
            )}
          </Button>
        );
      })}
    </FilterSection>
  );
}
