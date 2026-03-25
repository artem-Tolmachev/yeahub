import Avatar from '@/shared/assets/avatar.png';
import Telegram from '@/shared/ui/Socials/Telegram';
import Profile from '@/shared/ui/Socials/Profile';
import Youtube from '@/shared/ui/Socials/Youtube';
import './card.scss';
import Surface from '../Surface/Surface';

export default function CardGuru() {
  return (
    <Surface
    variant='elevated'
    padding='lg'
    className="card-guru">
      <div className="card-guru__personal">
        <img
          className="card-guru__img"
          src={Avatar}
          alt="фото гуру"
        />
        <div className="card-guru__inf">
          <p className="card-guru__name">Руслан Куянец</p>
          <p className="card-guru__skill">Python Guru</p>
        </div>
      </div>
      <p className="card-guru__descr">
        Guru – это эксперты YeaHub, которые помогают развивать комьюнити.
      </p>
      <div className="card-guru__socials">
        <Telegram from="questions" />
        <Youtube from="questions" />
        <Profile />
      </div>
    </Surface>
  );
}
