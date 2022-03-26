import { Navigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
    const user = localStorage.getItem('user');

    return user ? children : <Navigate to='/login' />
}

export default PrivateRouter;