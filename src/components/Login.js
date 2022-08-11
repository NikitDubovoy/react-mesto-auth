import React from "react";

function Login(props) {
  return (
    <section className="sign-up">
      <form name="sign-in" onSubmit={props.onSubmit}>
        <h1 className="sign-up__title">Вход</h1>
        <input
          className="sign-up__input"
          type="email"
          placeholder="Email"
          name="email"
          onChange={props.onEmail}
        />
        <input
          className="sign-up__input"
          type="password"
          placeholder="Пароль"
          name="Пароль"
          onChange={props.onPassword}
        />
        <button className="sign-up__button">Войти</button>
      </form>
    </section>
  );
}

export default Login;
