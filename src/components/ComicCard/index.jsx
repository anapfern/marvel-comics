import { useNavigate } from 'react-router-dom'
import style from './comicCard.module.css'

export function ComicCard({ urlImg, title, idNavigate, addNewComic }) {
  const navigate = useNavigate()

  return (
    <div className={style.comicCard}>
      <img
        src={urlImg}
        alt={`${title} Comic cover`}
        onClick={() => navigate(`/details/${idNavigate}`)}
      />
      <div className={style.titleComic}>
        <label title={title}>{title}</label>
        <button onClick={addNewComic}>BUY</button>
      </div>
    </div>
  )
}
