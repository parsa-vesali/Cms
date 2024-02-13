import Home from './Components/Home/Home'
import Account from './Components/Layout/Account/Account'
import Analysis from './Components/Layout/Analysis/Analysis'
import Products from './Components/Layout/Products/Products'
import Comments from './Components/Layout/Comments/Comments'
import Users from './Components/Layout/Users/Users'
import Orders from './Components/Layout/Orders/Orders'
import Discounts from './Components/Layout/Discounts/Discounts'

const routes = [
    { path: '/', element: <Home /> },
    { path: '/Account', element: <Account /> },
    { path: '/Analysis', element: <Analysis /> },
    { path: '/Products', element: <Products /> },
    { path: '/Comments', element: <Comments /> },
    { path: '/Users', element: <Users /> },
    { path: '/Orders', element: <Orders /> },
    { path: '/Discounts', element: <Discounts /> },
]


export default routes