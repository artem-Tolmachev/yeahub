import { getPageNumbers } from './getPageNumbers';
import clsx from 'clsx';
import ArrowPrev from '../ArrowButtons/ArrowPrev';
import ArrowNext from '../ArrowButtons/ArrowNext';
import { useFilters } from '@/shared/hooks';
import './pagination.scss';

interface Props {
  totalPages: number;
}

export default function Pagination({ totalPages }: Props) {
  const { togglePage, currentPage } = useFilters();
  const pages = getPageNumbers({ totalPages, currentPage });

  return (
    <div className="pagination">
      <ArrowPrev handlePagination={togglePage} currentPage={currentPage} totalPages={totalPages} />
      <div className="pagination__content">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`points-${index}`} className="pagination__dots">
                ...
              </span>
            );
          }
          return (
            <button
              onClick={() => togglePage(page as number)}
              className={clsx('pagination__item', currentPage === page && 'pagination__axtive')}
              key={index}
            >
              {page}
            </button>
          );
        })}
      </div>
      <ArrowNext handlePagination={togglePage} currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
