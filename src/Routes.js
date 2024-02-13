import Home from './Components/Home/Home'
import Account from './Components/Account/Account'
import Analysis from './Components/Analysis/Analysis'
import Products from './Components/Products/Products'
import Comments from './Components/Comments/Comments'
import Users from './Components/Users/Users'
import Orders from './Components/Orders/Orders'
import Discounts from './Components/Discounts/Discounts'

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