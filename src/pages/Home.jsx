import { BsSearch } from "react-icons/bs";
import Card from "../components/Card";
import Loader from "../components/Loader";

export default function Home ({ searchItem, searchItems, items, cartItems, favItems, onAddToCart, onAddToFavorite, isLoading }) {
    console.log(favItems)
    return (
        <>
            <div className="main-slider">Main Slider</div>
            <div className="content">
                <div className="d-flex align-items-center justify-content-between mb-5">
                    <h1>{searchItem ? `Пошук за запитом "${searchItem}"` : 'Всі кросівки'}</h1>
                    <div className="search-block d-flex">
                        <BsSearch className="search-icon" />
                        <input type="search" placeholder="Пошук..." onChange={searchItems} />
                    </div>
                </div>
                {
                    isLoading ? (
                        <div className="d-flex justify-content-center align-items-center mt-5 mb-5"><Loader /></div>
                    ) : (
                        <div className="content-products">
                            {
                                items.length > 0 && items.filter((item) => item.title.toLowerCase().includes(searchItem)).map((item) => {
                                    return (
                                        <Card
                                            favorited={favItems.some(favItem => favItem.uniqId === item.uniqId)}
                                            added={cartItems.some(cartItem => Number(cartItem.id) === Number(item.id))}
                                            key={item.uniqId}
                                            {...item}
                                            onAddToCart={onAddToCart}
                                            onAddToFavorite={onAddToFavorite}
                                            isLoading={isLoading}
                                        />
                                    );
                                })
                            }
                        </div>
                    )
                }
            </div>
        </>
    );
}
