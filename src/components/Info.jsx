import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import AppContext from "../context";

export default function Info({ image, title, description, typePage }) {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="cart-empty">
      <img className="cart-empty__image" src={image} alt="cart empty" />
      <div className="cart-empty__title">{title}</div>
      <div className="cart-empty__subtitle">{description}</div>
      {typePage === "favorite" ? (
        <Link className="cart--button cart-empty__button" to="/">
          <BsArrowLeft />
          <span>Повернутися назад</span>
        </Link>
      ) : (
        <div
          className="cart--button cart-empty__button"
          onClick={() => setCartOpened(false)}
        >
          <BsArrowLeft />
          <span>Повернутися назад</span>
        </div>
      )}
    </div>
  );
}
