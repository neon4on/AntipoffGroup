import * as React from 'react';
import style from '../User.module.scss';
import { useParams } from 'react-router-dom';

function user() {
  const { id } = useParams();

  const [info, setInfo] = React.useState();

  React.useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
    // const ff = f(id);
    // console.log(ff);
  }, []);

  return (
    <div className={style.wrapper}>
      <header>
        <div className={style.header}>
          <div className={style.aboutUs}>
            <div className={style.cart_items}>
              <img src={info?.data.avatar} />
              <p>
                <strong>
                  {info?.data.first_name} {info?.data.last_name}
                </strong>
              </p>
              <div className={style.exit}>
                <button className={style.button}>Выход</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={style.cart}>
          <div className={style.cart_items}>
            <p> {info?.data.first_name}</p>
            <strong>{info?.data.email}</strong>
          </div>
        </div>
      </main>
    </div>
  );
}

export default user;
