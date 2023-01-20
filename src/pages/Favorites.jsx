import Loader from "../components/Loader";
import Card from "../components/Card";

import AppContext from "../context";
import { useContext } from "react";

export default function Favorites ({ onAddToFavorite, isLoading, onAddToCart }) {
    const state = useContext(AppContext)
    const favItems = state.favItems;
    return (
        <div className="content">
            <div className="d-flex align-items-center justify-content-between mb-5">
                <h1>Мої вибрані товари</h1>
            </div>
            {
                isLoading ? (
                    <div className="d-flex justify-content-center align-items-center mt-5 mb-5"><Loader /></div>
                ) : (
                    <div className="content-products">
                        {
                            favItems.length > 0 && favItems.map((favItem) => {
                                return (
                                    <Card
                                        key={favItem.uniqId}
                                        {...favItem}
                                        onAddToCart={onAddToCart}
                                        onAddToFavorite={onAddToFavorite}
                                        favorite={true}
                                    />
                                );
                            })
                        }
                    </div>
                )
            }
        </div>
    );
}
