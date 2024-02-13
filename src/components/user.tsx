import * as React from 'react';
import '../App.css';
function user() {
  const [info, setInfo] = React.useState([]);

  const f = async () => {
    const res = await fetch('https://reqres.in/api/users/');
    const json = await res.json();
    setInfo(json.data);
  };

  React.useEffect(() => {
    f();
    console.log(info);
  }, []);

  return (
    <div className="wrapper">
      <header>
        <div className="header">
          <div className="aboutUs">
            <div className="exit">
              <button className="button button-exit">Выход</button>
            </div>
            {info.length &&
              info.map((info) => {
                return (
                  <div key={info['id']} className="cart-items">
                    <img key={info['avatar']} src={info['avatar']} />
                    <p>
                      <strong>{info['first_name']}</strong>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </header>
      <main>
        <div className="cart">
          {info.length &&
            info.map((info) => {
              return (
                <div key={info['id']} className="cart-items">
                  <p> {info['first_name']}</p>
                  <strong>{info['email']}</strong>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default user;
