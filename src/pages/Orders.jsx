import {useEffect, useState} from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Card from "../components/Card";

export default function Orders () {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/orders');
                // setOrders(data.map((order) => order.item).flat());
                setOrders(data.reduce((prev, order) => [...prev, ...order.items], []));
                setIsLoading(false);
            } catch (err) {
                console.log('Помилка при отриманні замовлень', err);
            }
        })();
    }, []);

    return (
        <div className="content">
            <div className="d-flex align-items-center justify-content-between mb-5">
                <h1>Мої замовлення</h1>
            </div>
            {
                isLoading ? (
                    <div className="d-flex justify-content-center align-items-center mt-5 mb-5"><Loader /></div>
                ) : (
                    <div className="content-products">
                        {
                            orders.length > 0 && orders.map((order) => {
                                return (
                                    <Card
                                        key={order.uniqId}
                                        {...order}
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
