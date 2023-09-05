import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { ComicCard } from '../../components/ComicCard'
import style from './home.module.css'
import { Header } from '../../components/Header'
import LoadingSpinner from '../../components/LoadingPage'
import { useCheckoutItens } from '../../providers/checkoutItens'
import { Toast } from '../../components/ToastSwal/Toast'

export function Home() {
  const [comics, setComics] = useState([])
  const [loading, setLoading] = useState(false)
  const { itensChecked, setItensChecked } = useCheckoutItens()

  useEffect(() => {
    async function loadingAllComics() {
      setLoading(true)
      await api
        .get('comics?limit=50&')
        .then((response) => setComics(response.data.data.results))
      setLoading(false)
    }

    loadingAllComics()
  }, [])

  function handleAddNewComic(comic) {
    Toast.fire({
      icon: 'success',
      title: 'Comic added to shopping cart.',
    })

    setItensChecked(itensChecked.concat(comic))
  }

  return (
    <>
      <Header />
      {loading && <LoadingSpinner />}
      <div className={style.containerComics}>
        {comics?.map((comic) => (
          <ComicCard
            urlImg={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            title={comic.title}
            key={comic.id}
            idNavigate={comic.id}
            addNewComic={() => handleAddNewComic(comic)}
          />
        ))}
      </div>
    </>
  )
}
