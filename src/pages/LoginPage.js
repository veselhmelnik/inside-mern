import { useEffect, useState } from "react";
import useHttp from "../hooks/http.hook";
import { Link } from "react-router-dom";
import { message } from "antd";
import "./pages.css";
import useAuth from "../hooks/auth.hook";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const { loading, request, error, clearError } = useHttp();

  const info = (error) => {
    messageApi.info(error);
  };

  useEffect(() => {
    if (error) info(error);
  }, [error, message, clearError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await request("/api/auth/login", "POST", {
        email: email,
        password: password,
      });
      login(data.token, data.userId);
    } catch (error) {}
  };

  return (
    <div className="loginPage">
      <div className="formWrapper">
        {contextHolder}
        <h1>Вхiд до аккаунту</h1>
        <form onSubmit={handleSubmit} className="loginForm">
          <div className="textField">
            <input
              type="text"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label htmlFor="email">Email</label>
          </div>
          <div className="textField">
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label htmlFor="password">Пароль</label>
          </div>
          <button disabled={loading}>Вхiд</button>
          <div className="signUpLink">
            Немає аккаунту? <Link to="/register">Зареєструйтесь</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
