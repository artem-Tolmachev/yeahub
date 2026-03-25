import Product from '@/shared/assets/Product.png';
import './collectionDitails.scss';
import { Surface } from '@/shared/ui';

interface Props {
  title: string;
}

export default function CollectionDitailsCard({ title }: Props) {
  return (
    <Surface padding="md">
      <article className="ditails-card">
        <div className="ditails-card__content">
          <div className="ditails-card__image-wr">
            <img className="collection-card__image" src={Product} alt="Логотип организации" />
          </div>
          <div className="ditails-card__content-inner">
            <h3 className="ditails-card__title">{title}</h3>
            <p className="ditails-card__descr">
              Техническое собеседование для экспертов по основным вопросам JavaScript, TypeScript и
              React. Ожидается уверенное владение этими технологиями и опыт работы с современными
              фреймворками. Продолжительность: 1.5 часа. Вилка зарплаты: 150,000-250,000 ₽
            </p>
          </div>
        </div>
      </article>
    </Surface>
  );
}
