import * as React from 'react';
import './App.css';

function App() {
  const [users, setUsers] = React.useState([]);

  const f = async () => {
    const res = await fetch('https://reqres.in/api/users/');
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
    console.log(users);
  }, []);

  return (
    <div className="App">
      <header>
        <div className="header">
          <div className="aboutUs">
            <div className="exit">
              <button className="button button-exit">Выход</button>
            </div>
            <h1>Наша команда</h1>
            <p>
              Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
              плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.{' '}
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="cart">
          {users.length &&
            users.map((user) => {
              return (
                <div key={user['id']} className="cart-items">
                  <img key={user['avatar']} src={user['avatar']} />
                  <p>
                    <strong>{user['first_name']}</strong>
                  </p>
                </div>
              );
            })}
        </div>
      </main>

      <footer>
        <div className="optionally">
          <button className="button optionally-button">Показать ещё</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
