import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Card } from "antd";
import {
  ShoppingOutlined ,
  HeartOutlined 
} from "@ant-design/icons";

import { cartContext } from "../../contexts/cartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";

const ProductCard = ({ item }) => {

  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));


  const { addProductToFavorites, checkItemInFavorites } = useContext(FavoritesContext);
  const [checkInFavorites, setCheckInFavorites] = useState(checkItemInFavorites(item.id));

  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id))
    setCheckInFavorites(checkItemInFavorites(item.id))
  }, [item.id, checkItemInCart, checkItemInFavorites])

  return (
    
    <Card
      hoverable
      key={item.id}
      style={{ width: "280px",  margin: "10px" }}
      cover={<Link to={`/products/${item.id}`}><img className="imgCard" alt="example" src={item.image1} onClick/></Link>}
      actions={[
        <HeartOutlined   style={{ color: checkInFavorites ? "red" : "black", fontSize: "25px" }}
        onClick={() => {
            addProductToFavorites(item);
            setCheckInFavorites(checkItemInFavorites(item.id));
          }}
         />,
        <ShoppingOutlined 
          style={{ color: checkInCart ? "red" : "black", fontSize: "25px" }}
          onClick={() => {
            addProductToCart(item);
            setCheckInCart(checkItemInCart(item.id));
          }}
        />,
       
      ]}
    >
      <Card.Meta
        title={item.brand}
        description={
          <>
            <h6>{item.model}</h6>
            <h2>{"$" + item.price}</h2>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;
