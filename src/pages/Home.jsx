import { BsSearch } from "react-icons/bs";
import Card from "../components/Card";

export default function Home ({ searchItem, searchItems, items, onAddToCart, onAddToFavorite }) {
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
                <div className="content-products">
                    {
                        items.filter((item) => item.title.toLowerCase().includes(searchItem)).map((item) => {
                            return (
                                <Card
                                    key={item.uniqId}
                                    {...item}
                                    onAddToCart={onAddToCart}
                                    onAddToFavorite={onAddToFavorite}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}
