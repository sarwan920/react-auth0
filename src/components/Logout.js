import { useAuth0 } from '@auth0/auth0-react'
import { Button} from '@chakra-ui/react'
const Logout=()=>{
    const { logout } = useAuth0();

    const authLogout=()=>{
        logout({
            returnTo: window.location.origin
        })
    }

    return(
        <Button onClick={authLogout}>Logout</Button>
    )
}

export default Logout;