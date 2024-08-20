import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
import Banner from '../../components/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'
import { Logo } from '../../styles'
import { HeaderContainer } from './styles'
import logoImage from '../../assets/images/logo.png'
import { useGetRestaurantQuery } from '../../services/api'
import { RootReducer } from '../../store'
import { openCart } from '../../store/reducers/cart'
import { openSideBar } from '../../store/reducers/sideBar'

export type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: foodId } = useGetRestaurantQuery(id)
  const dispatch = useDispatch()

  const { itemsCart } = useSelector((state: RootReducer) => state.cart)
  const { sideBarIsOpen } = useSelector((state: RootReducer) => state.sideBar)

  if (!foodId) {
    return <h3>caregando....</h3>
  }

  return (
    <>
      <HeaderContainer>
        <span>Restaurantes</span>
        <h1>
          <Link to="/">
            <Logo src={logoImage} alt="EFOOD" />
          </Link>
        </h1>
        <span onClick={() => dispatch(openSideBar())}>
          {itemsCart.length} produto(s) no carrinho
        </span>
      </HeaderContainer>
      {foodId && (
        <>
          <Banner
            image={foodId?.capa}
            title={foodId?.titulo}
            type={foodId?.tipo}
          />
          <ProductsList foods={foodId} />
        </>
      )}
      {sideBarIsOpen && <SideBar />}
    </>
  )
}

export default Perfil
