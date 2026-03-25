import clsx from 'clsx';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import './accordion.scss';
import ChevroneIcon from '../ChevroneIcon/ChevroneIcon';

interface Props {
  children: ReactNode;
  title: string;
}

export default function Accordion({ children, title }: Props) {
  const [isRotate, setIsRotate] = useState(true);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(!isRotate ? contentHeight : 0);
    }
  }, [isRotate]);

  return (
    <div className='accordion'>
      <button
        onClick={() => setIsRotate((prev) => !prev)}
        className={clsx('accordion__btn', !isRotate && 'accordion__btn--mrg')}
      >
        <p className="accordion__text">{title}</p>
        <ChevroneIcon isRotate={isRotate} />
      </button>
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className={clsx('accordion__unwrapp', isRotate && 'accordion__wrapp')}
      >
        {children}
      </div>
    </div>
  );
}
