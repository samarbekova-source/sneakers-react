import logo from "../src/img/logo.png";
import user from "../src/img/user.png";
import cart from "../src/img/cart.svg";
import plus from "../src/img/plusiconr.png";
import pic1 from "../src/img/sneakers/1.png";
import pic2 from "../src/img/sneakers/2.png";
import pic3 from "../src/img/sneakers/3.png";
import pic4 from "../src/img/sneakers/4.png";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src={logo} alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img width={20} height={15} src={cart} alt="cart" />
            <span>1205 сом.</span>
          </li>
          <li>
            <img width={20} height={15} src={user} alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src={pic1} alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12 999 сом.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src={plus} alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src={pic2} alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12 999 сом.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src={plus} alt="plus" />
              </button>
            </div>
          </div>{" "}
          <div className="card">
            <img width={133} height={112} src={pic3} alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12 999 сом.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src={plus} alt="plus" />
              </button>
            </div>
          </div>{" "}
          <div className="card">
            <img width={133} height={112} src={pic4} alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12 999 сом.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src={plus} alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
