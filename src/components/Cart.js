import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-xl font-bold ">Cart</h1>
      <div className="w-6/12 m-auto ">
        <button
          className="p-2 m-2 text-white rounded-lg bg-slate-900"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length ? (
          <ItemList items={cartItems}></ItemList>
        ) : (
          <div> Please add Items to Card</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
