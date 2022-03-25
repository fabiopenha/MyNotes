import { Navigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
    const auth = false;

    return auth ? children : <Navigate to='/login' />
}

export default PrivateRouter;