import * as React from 'react';
import '../../App.css';
import User from './User';
import { Link } from 'react-router-dom';
function Home() {
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

  const currentUser = (currentId: any) => {
    console.log(1);
    return <User key={currentId} {...currentId} />;
  };
  return (
    <div className="App">
      <header>
        <div className="header">
          <div className="aboutUs">
            <div className="exit">
              <form action="/Login">
                <Link to="/login">
                  <button className="button button-exit">Выход</button>
                </Link>
              </form>
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
                  <Link to={{ pathname: `/user/:${user['id']}` }}>
                    <img key={user['avatar']} src={user['avatar']} />
                    <p>
                      <strong>{user['first_name']}</strong>
                    </p>
                  </Link>
                </div>
              );
            })}
        </div>
      </main>

      <footer>
        <div className="optionally">
          <Link to="/">
            <button className="button optionally-button">Показать ещё</button>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
