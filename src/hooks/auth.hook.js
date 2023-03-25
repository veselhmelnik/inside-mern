import { useCallback} from "react";
import { useDispatch } from "react-redux";
import { updateAuthentication } from "../store/authenticationSlice";

const storageName = "userData";

const useAuth = () => {
  const dispatch = useDispatch();

  const login = useCallback((jwtToken, id) => {
    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
    dispatch(updateAuthentication());
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(storageName);
    const state = {
      token: null,
      userId: null,
      expirationTokenDate: 0,
      isLoading: false,
    };
    dispatch(updateAuthentication());
  }, []);

  return { login, logout };
};

export default useAuth;
