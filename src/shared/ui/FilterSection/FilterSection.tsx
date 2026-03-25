import type { ReactNode } from "react";
import './fillterSection.scss';

interface Props {
  children: ReactNode;
  title: string;
  toggle?: ReactNode; 
}

export default function FilterSection({toggle, children, title }: Props) {
  return (
    <div className="filter-section">
      <h3 className="filter-section__title">{title}</h3>
      <div className="filter-section__chips">{children}</div>
      {toggle}
    </div>
  );
}
