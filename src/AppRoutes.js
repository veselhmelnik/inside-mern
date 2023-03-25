import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AppLayout from "./Layout/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import { useEffect } from "react";
import { updateAuthentication } from "./store/authenticationSlice";
import { CoordinatorPage } from "./pages/coordinatorPage";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const {token, isLoading, isExpired} = useSelector((state) => state.authentication);
  
  useEffect(() => {
    dispatch(updateAuthentication());
  },[dispatch])

  if (isLoading) return <Loader />;

  if (token && !isExpired) {
    return (
      <AppLayout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coordinator" element={<CoordinatorPage />} />
          <Route path="*" element={<DashboardPage />} />
        </Routes>
      </AppLayout>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
