import { useSearchParams } from 'react-router-dom';
import Button from '../Button/Button';

export default function ResetButton() {
  const [_, setSearchParams] = useSearchParams();

  const handelReset = () => {
    setSearchParams({});
  };
  return (
    <Button variant="reset" onClick={() => handelReset()}>
      {'Сбросить филтр'}
    </Button>
  );
}
