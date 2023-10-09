import MenuAppBar from "./MenuBarApp";
import Body from "./Body"
import { Routes, Route } from 'react-router-dom';
import Cart from './Cart'

const App = () => {
    return (<>
    <MenuAppBar/>
    <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='Cart' element={<Cart/>}/>
    </Routes>
    </>)
}

export default App;