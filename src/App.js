import { AppRoutes } from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import useAuth from './hooks/auth.hook';
import AuthContext from './context/AuthContext';
import 'materialize-css'
import Navbar from './components/Navbar';

function App() {
  const {token, login, logout, userId} = useAuth();
  const isAuthenticated = !!token;
  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
      <BrowserRouter>
        {isAuthenticated && <Navbar/>}
        <div className="container">
          <AppRoutes isAuthenticated={isAuthenticated}/>
        </div>   
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
