import Loader from "../components/Loader";
import Card from "../components/Card";
import Info from "../components/Info";

import AppContext from "../context";
import { useContext } from "react";

export default function Favorites({ onAddToFavorite, isLoading, onAddToCart }) {
  const state = useContext(AppContext);
  const favItems = state.favItems;
  return (
    <div className="content">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <h1>Мої обрані товари</h1>
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
          <Loader />
        </div>
      ) : (
        <div>
          {favItems.length > 0 ? (
            <div className="content-products">
              {favItems.map((favItem) => {
                return (
                  <Card
                    key={favItem.uniqId}
                    {...favItem}
                    onAddToCart={onAddToCart}
                    onAddToFavorite={onAddToFavorite}
                    favorite={true}
                  />
                );
              })}
            </div>
          ) : (
            <div style={{ maxWidth: "350px", margin: "0 auto" }}>
              <Info
                image="static/images/favorites-empty.jpg"
                title="Обраних товарів немає :("
                description="Ви нічого не добавили до обраних товарів."
                typePage="favorite"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
