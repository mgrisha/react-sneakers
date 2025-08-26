import React, { useContext, useState } from "react";
import { BsHeart, BsPlus, BsCheck } from "react-icons/bs";

import styles from "./Card.module.scss";
import AppContext from "../../context";

export default function Card({
  id,
  uniqId,
  title,
  image,
  price,
  onAddToCart,
  onAddToFavorite,
  favorite = false,
}) {
  const { cartItemIsAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const itemIsAddedIntoCart = cartItemIsAdded(uniqId);

  const itemObj = { id, uniqId, title, image, price };

  const addToCart = () => {
    onAddToCart(itemObj);
  };

  const addToFavorite = () => {
    onAddToFavorite(itemObj);
    setIsFavorite(!isFavorite);
  };

  const classButtonAddCart =
    styles["card-add"] + (itemIsAddedIntoCart ? " " + styles["is-active"] : "");

  const classButtonAddFavorite =
    styles["card-favorite"] + (isFavorite ? " " + styles["is-active"] : "");

  return (
    <div className={styles.card}>
      {onAddToFavorite && (
        <button className={classButtonAddFavorite} onClick={addToFavorite}>
          <BsHeart />
        </button>
      )}
      <img
        className={styles["card-image"]}
        src={`/static/images/products/${image}`}
        alt={title}
      />
      <div>{title}</div>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex flex-column">
          <div className={styles["card-price__title"]}>Ціна:</div>
          <div className={styles["card-price__price"]}>{price} грн</div>
        </div>
        {onAddToCart && (
          <button className={classButtonAddCart} onClick={addToCart}>
            {itemIsAddedIntoCart ? <BsCheck /> : <BsPlus />}
          </button>
        )}
      </div>
    </div>
  );
}
