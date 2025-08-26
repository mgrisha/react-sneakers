import { useEffect, useState } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Card from "../components/Card";
import Info from "../components/Info";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://dac388a4ca4c80b3.mokky.dev/orders"
        );
        // setOrders(data.map((order) => order.item).flat());
        setOrders(data.reduce((prev, order) => [...prev, ...order.items], []));
        setIsLoading(false);
      } catch (err) {
        console.log("Помилка при отриманні замовлень", err);
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <h1>Мої замовлення</h1>
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
          <Loader />
        </div>
      ) : (
        <div className="content-products">
          {orders.length > 0 ? (
            orders.map((order) => {
              return <Card key={order.uniqId} {...order} />;
            })
          ) : (
            <Info
              image="static/images/orders-empty.jpg"
              title="У вас не має замовлень"
              description="Оформіть хоча б одне замовлення."
              typePage="order"
            />
          )}
        </div>
      )}
    </div>
  );
}
