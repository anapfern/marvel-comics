import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import style from './details.module.css'
import { BiArrowBack } from 'react-icons/bi'
import LoadingSpinner from '../../components/LoadingPage'

export function ComicDetails() {
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function loadingDetails() {
      setLoading(true)
      await api
        .get(`comics/${id}`)
        .then((response) => setDetails(response.data.data.results[0]))
      setLoading(false)
    }
    loadingDetails()
  }, [id])

  return (
    <>
      <Header />
      {loading && <LoadingSpinner />}

      <div className={style.containerDetails}>
        <img
          src={`${details?.thumbnail?.path}.${details?.thumbnail?.extension}`}
          alt={`${details?.title} Comic cover`}
        />
        <div className={style.descriptionArea}>
          <h2>{details?.title}</h2>
          <span>{details?.description}</span>
          <button onClick={() => navigate('/')}>
            <BiArrowBack />
            BACK
          </button>
        </div>
      </div>
    </>
  )
}
