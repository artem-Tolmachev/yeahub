import { Link } from 'react-router-dom';
import { Figma, LogoText, Telegram, Youtube, Media, GitHub } from '@/shared/ui';
import './footer.scss';

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <LogoText color={'#FFFFFF'} />
          </div>
          <p className="footer__text">Выбери, каким будет IT завтра, вместе с нами</p>
          <p className="footer__descr">
            YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу.
            Наш исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт
            для ознакомления в Figma
          </p>
          <div className="footer__bottom">
            <p className="footer__copy">&copy; 2024 YeaHub Документы</p>
            <div className="footer__socials">
              <p className="footer__socials-text">Ищите нас и в других соцсетях @yeahub_it</p>
              <div className="footer__socials-links">
                <Link to="#"><Figma /></Link>
                <Link to="#"><Telegram from="footer" /></Link> 
                <Link to="#"><Youtube from="footer" /></Link> 
                <Link to="#"><Media from="footer" /></Link> 
                <Link to="#"><GitHub from="footer" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
