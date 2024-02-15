import * as React from 'react';
import styles from '../../App.module.scss';
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

  return (
    <div className={styles.App}>
      <header>
        <div className={styles.header}>
          <div className={styles.aboutUs}>
            <div className={styles.exit}>
              <form action="/Login">
                <Link to="/login">
                  <button className={styles.button}>Выход</button>
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
        <div className={styles.cart}>
          {users.length &&
            users.map((user) => {
              return (
                <div key={user['id']} className={styles.cart_items}>
                  <Link to={{ pathname: `/user/${user['id']}` }}>
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
        <div className={styles.optionally}>
          <Link to="/">
            <button className={styles.button}>Показать ещё</button>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
