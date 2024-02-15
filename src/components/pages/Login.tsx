import * as React from 'react';
import style from '../Login.module.scss';

function Home() {
  return (
    <div className={style.Login}>
      <main className={style.main}>
        <form action="/" className={style.form}>
          <h1 className={style.h1}>Регистрация</h1>
          <h2 className={style.h2}>Имя</h2>
          <input type="text" placeholder="Артур" className={style.input} required />
          <h2 className={style.h2}>Электронная почта</h2>
          <input type="email" placeholder="example@mail.ru" className={style.input} required />
          <h2 className={style.h2}>Пароль</h2>
          <input type="password" placeholder="******" className={style.input} required />
          <h2 className={style.h2}>Подтвердите пароль</h2>
          <input type="password" placeholder="******" className={style.input} required />
          <button className={style.button_next}>Зарегистрироваться</button>
        </form>
      </main>
    </div>
  );
}

export default Home;
