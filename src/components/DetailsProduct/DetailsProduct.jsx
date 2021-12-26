import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { Carousel, Button  } from "antd";
import { HeartOutlined } from "@ant-design/icons";

import Comments from '../Comments/Comments'
import AddComment from "../Comments/ComentItem";
import { productsContext } from "../../contexts/productsContext";
import { cartContext } from "../../contexts/cartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";


import "./DetailsProduct.css";
// import ProductCard from "./ProductList/ProductCard";

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);

  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(id));


  const { addProductToFavorites, checkItemInFavorites } = useContext(FavoritesContext);
  const [checkInFavorites, setCheckInFavorites] = useState(checkItemInFavorites(id));

  useEffect(() => {
    setCheckInCart(checkItemInCart(id))
    setCheckInFavorites(checkItemInFavorites(id))
  }, [id, checkItemInCart, checkItemInFavorites])

//  ProductCard({item})

  useEffect(() => {
    getOneProduct(id);
  }, []);


  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      { product? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
              
            }}
          >
            <div className="item-image" style={{ maxWidth: "35vw", border: "1px solid violet"  ,alignSelf:"start" }}>
              <Carousel 
               autoplay>
                <div>
                  <img width="100%" src={product.image1} alt="" />
                </div>
                <div>
                  <img width="100%" src={product.image2} alt="" />
                </div>
              </Carousel>
            </div>
            <div style={{
              display: "flex",
              flexDirection:"column",
              justifyContent: "center",
              alignItems:"center",
               width: "40vw",
               marginLeft:"50px"
                }}>
            <div className="item-imag" style={{ width: "35vw", border: "1px solid black" ,alignSelf:"start" }}>
              <Carousel 
               autoplay>
                <div>
                  <img width="100%" src={product.image1} alt="" />
                </div>
                <div>
                  <img width="100%" src={product.image2} alt="" />
                </div>
              </Carousel>
            </div>
              <h2>{product.brand}</h2>
              <h3>{product.model}</h3>
              
              <h2
              style={{ color:"whitesmoke"}}
              >{"$" + product.price}</h2>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
                onClick={() => addProductToCart(product)}
          
              >
                {checkItemInCart(product.id) ? 'REMOVE FROM CART' : 'ADD TO CART'}
              </Button>
              <Button
                // size="large"
                style={{ margin: "15px 0px", width: "100%" }}
                onClick={() => addProductToFavorites(product)}
              >
                {checkItemInFavorites(product.id) ? 'REMOVE FROM FAV' : 'ADD TO FAV'}
              </Button>
              <Link to="/payment">
              <Button
                // size="large"
                style={{ margin: "15px 0px", width: "100%" }}
                onClick={() => addProductToCart(product)}
              >
                BUY
              </Button>
              </Link>
              
                {/* <HeartOutlined
                style={{ margin: "15px 0px", width: "100%", fontSize:"30px" }}
                /> */}
                <span style={{marginBottom:"15px"}} id={product.id} class="likebtn-wrapper" data-lang="ru" data-identifier={"pavel" + product.id}> </span>
              
              <div  className="desc" style={{textOverflow:"ellipsis",color:"whitesmoke"}}>{product.description}</div>
            </div>
          </div>
          <AddComment id={product.id}/>
          <Comments
          style={{textOverflow:"ellipsis",color:"whitesmoke"}} id={product.id} />
          
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;
