import style from './header.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { FaBookOpenReader } from 'react-icons/fa6'
import { useCheckoutItens } from '../../providers/checkoutItens'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { itensChecked } = useCheckoutItens()
  const navigate = useNavigate()

  return (
    <header className={style.containerHeader}>
      <h3>
        <FaBookOpenReader color="white" /> MARVEL COMICS
      </h3>
      <div className={style.containerFilter}>
        <div className={style.filterInput}>
          <AiOutlineSearch />
          <div className={style.verticalLine} />
          <input type="text" placeholder="What are you looking for?" />
        </div>
        <div
          className={style.shoppingCart}
          onClick={() => navigate('/checkout')}
        >
          <MdOutlineLocalGroceryStore color="white" size={22} />
          <div>{itensChecked.length}</div>
        </div>
      </div>
    </header>
  )
}
