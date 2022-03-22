import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';

const RedirectAuth = ({ children }: { children: JSX.Element }) => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    let location = useLocation();
    console.log(loggedUser.email)

    if (!loggedUser.email) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return children;
};

export default RedirectAuth;