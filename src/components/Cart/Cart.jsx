import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List } from "antd";
import { cartContext } from "../../contexts/cartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <div className="container" style={{marginTop:"90px"}}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={<h2 style={{color:"whitesmoke"}}>Total: {cart?.totalPrice}$</h2>}
        renderItem={(item) => <CartItem item={item} />}
      />
      <Link
      to="/payment"
      style={{color:"whitesmoke", fontSize:"20px",padding:"5px" ,border:"2px solid whitesmoke", borderRadius:"5px"}} >
              Оформить заказ
            </Link>
    </div>
  );
};

export default Cart;
