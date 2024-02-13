import * as React from 'react';
import '../Login.css';

function Home() {
  return (
    <div className="Login">
      <main className="main">
        <form action="/" className="form">
          <h1 className="h1">Регистрация</h1>
          <h2 className="h2">Имя</h2>
          <input type="text" placeholder="Артур" className="input" />
          <h2 className="h2">Электронная почта</h2>
          <input type="text" placeholder="example@mail.ru" className="input" />
          <h2 className="h2">Пароль</h2>
          <input type="text" placeholder="******" className="input" />
          <h2 className="h2">Подтвердите пароль</h2>
          <input type="text" placeholder="******" className="input" />
          <button className="button-next">Зарегистрироваться</button>
        </form>
      </main>
    </div>
  );
}

export default Home;
