
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout';


import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react'

import { Center, Box } from '@chakra-ui/react'


function App() {

  const { isAuthenticated } = useAuth0();
  // if (!isAuthenticated) {
  //   return (
  //     <div className="App">

  //     </div>
  //     )
  // }

  return (
    <div className="App">
      <Center mt="5%">
        <Box>
          <Login></Login>
          < Logout></Logout>
        </Box>
        <br />
        <br />

      </Center>


      <Center>
        <Box alignContent="center">
          <Profile></Profile>
        </Box>
      </Center>





    </div>
  );
}



export default App;
