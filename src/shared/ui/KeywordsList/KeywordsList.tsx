import './keywords.scss';

export default function KeywordsList({keywords}: {keywords: string[]}) {
  return (
    <ul className="keywords-list">
        {keywords.map((word, i) => 
        <li 
        key={i}
        className="keywords-list__item">{word}</li>)}
    </ul>
  )
}
