import './toggle.scss';

interface Props{
    onChange: () => void;
    isExtended: boolean;
    lableWrrap?: string;
    lableUnwrup?: string;
}

export default function FilterToggle({onChange, isExtended, lableUnwrup = 'Посмотреть все', lableWrrap = 'Скрыть'}: Props) {

  return (
    <button
    className="show-more"
     onClick={onChange}>
        {isExtended ? lableWrrap : lableUnwrup}
    </button>
  )
}
