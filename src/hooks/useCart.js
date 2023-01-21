import { useContext } from "react";
import AppContext from "../context";

export const useCart = () => {
    const { cartItems, setCartItems } = useContext(AppContext);
    const totalSum = cartItems.reduce((sum, cartItem) => Number(cartItem.price) + sum, 0);

    return { cartItems, setCartItems, totalSum };
}
