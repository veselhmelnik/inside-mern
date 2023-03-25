import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { message, Select } from "antd";
import { useAddUserMutation } from "../store/usersApi";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [addUser, { isLoading }] = useAddUserMutation();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    userName: "",
    fullName: "",
    position: "",
    shift: "",
    userStatus: "",
    work: "",
    workType: "",
    time: "",
    isOnline: false,
  });
  const [messageApi, contextHolder] = message.useMessage();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const selectHandler = (e) => {
    setForm({ ...form, position: e });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword !== form.password) {
      messageApi.info("Паролi не спiвпадають");
      return;
    } else {
      try {
        await addUser({ ...form }).unwrap();
        messageApi.info("користувача успішно створено");
        navigate(`/login`);
      } catch (e) {}
    }
  };

  return (
    <div className="loginPage">
      <div className="formWrapper">
        {contextHolder}
        <h1>Реєстрацiя</h1>
        <form onSubmit={handleSubmit} className="loginForm">
          <div className="textField">
            <input
              type="text"
              name="email"
              id="email"
              required
              value={form.email}
              onChange={changeHandler}
            />
            <span></span>
            <label htmlFor="email">Email</label>
          </div>
          <div className="passField">
            <div className="textField">
              <input
                type="password"
                name="password"
                id="password"
                required
                value={form.password}
                onChange={changeHandler}
              />
              <span></span>
              <label htmlFor="password">Пароль</label>
            </div>
            <div className="textField">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span></span>
              <label htmlFor="confirmPassword">Пароль ще раз</label>
            </div>
          </div>
          <div className="nameField">
            <div className="textField">
              <input
                type="text"
                name="userName"
                id="userName"
                required
                value={form.userName}
                onChange={changeHandler}
              />
              <span></span>
              <label htmlFor="userName">Nickname</label>
            </div>
            <div className="textField">
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                value={form.fullName}
                onChange={changeHandler}
              />
              <span></span>
              <label htmlFor="fullName">Ім'я Прізвище</label>
            </div>
          </div>
          <div className="textField">
            <Select
              name="position"
              defaultValue="Посада"
              onChange={selectHandler}
              options={[
                {
                  value: "Operator",
                  label: "Operator",
                },
                {
                  value: "Junior QA",
                  label: "Junior QA",
                },
                {
                  value: "QA/QC",
                  label: "QA/QC",
                },
                {
                  value: "Junior",
                  label: "Junior",
                },
              ]}
            />
            <span></span>
          </div>
          <button disabled={isLoading}>Реєстрацiя</button>
          <div className="signUpLink">
            Вже є аккаунт? <Link to="/login">Вхiд</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
