import SearchIcon from '../SearchIcon/SearchIcon';
import './search.scss';

interface Props {
  onChange: (args: string) => void;
  value: string;
  placeholder?: string;
}

export default function Search({value, onChange, placeholder}: Props) {

  return (
    <div className='searcher'>
      <SearchIcon color={'var(--color-text-gray)'}/>
      <input 
          value={value} 
          type="text"
          placeholder={placeholder}
          aria-label="Поиск"
          onChange={(e) => onChange(e.target.value)} />
    </div>
  );

}
