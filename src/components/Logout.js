import React from 'react'
import useAuth from '../hooks/auth.hook';
import { SlLogout } from "react-icons/sl";
import { useUpdateUserMutation } from '../store/usersApi';

const Logout = ({userId}) => {
    const { logout } = useAuth();
    const [updateUser] = useUpdateUserMutation();
    const logoutHandler = async (e) => {
        e.preventDefault();
        const  body = {
          isOnline: false,
          isCoordinator: false,
          shift: "",
          time: "",
          work: "",
          workType: "",
          userStatus: ""
        };
        await updateUser({body, userId})
        logout();
      };

  return (
    <div className="logout" onClick={logoutHandler}>
        <SlLogout /> <span>Log Out</span>
      </div>
  )
}

export default Logout