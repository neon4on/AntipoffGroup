import * as React from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
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
  }, []);
  return (
    <div className="App">
      <div className="header">
        <div className="aboutUs">
          <h1>Наша команда</h1>
          <p>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
            плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.{' '}
          </p>
        </div>

        <div className="exit">
          <button className="buttonExit">Выход</button>
        </div>
      </div>

      <div className="cart">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user['id']}>
                <p>
                  <strong>{user['first_name']}</strong>
                </p>
                <p>{user['email']}</p>
                <img key={user['avatar']} src={user['avatar']} />
              </div>
            );
          })}
      </div>

      <div className="optionally">
        <button>Показать ещё</button>
      </div>
    </div>
  );
}

export default App;
