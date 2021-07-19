import { useAuth0 } from  '@auth0/auth0-react'

import { Button } from '@chakra-ui/react'
const  Login=()=>{
    const { loginWithRedirect } = useAuth0();

    const onLogin=()=>{
        loginWithRedirect();
        console.log(window.location.origin);
    }
    return(
      <Button onClick={onLogin}>Login</Button>
    )
  }

  
  export default Login;