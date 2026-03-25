import { ACCESS_VARIANT } from '@/shared/constants/constants';
import { Button, FilterSection } from '@/shared/ui';

export default function AccessFilterDitails({ isAccessed }: { isAccessed: boolean }) {
  return (
    <div>
      <FilterSection title="Доступ">
        {ACCESS_VARIANT.map(
          (item) =>
            isAccessed === item.value && (
              <Button key={item.id} variant="disabled">
                {item.lable}
              </Button>
            ),
        )}
      </FilterSection>
    </div>
  );
}
