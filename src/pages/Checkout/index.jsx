import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { useCheckoutItens } from '../../providers/checkoutItens'
import style from './checkout.module.css'
import { RiDeleteBinLine } from 'react-icons/ri'

export function Checkout() {
  const navigate = useNavigate()
  const { itensChecked, setItensChecked } = useCheckoutItens()
  console.log(itensChecked)

  function handleRemoveComic(id) {
    setItensChecked(itensChecked.filter((item) => item.id !== id))
  }

  return (
    <>
      <Header />

      <div className={style.containerCheckout}>
        <table>
          <tbody>
            {itensChecked?.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt=""
                  />
                </td>
                <td>
                  {item.title} - ${item.prices[0].price}
                </td>
                <td
                  onClick={() => handleRemoveComic(item.id)}
                  className={style.removeCheckout}
                >
                  <RiDeleteBinLine />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={style.buttonsCheckout}>
          <button onClick={() => navigate('/')}>BACK</button>
          <button>FINISH</button>
        </div>
      </div>
    </>
  )
}
