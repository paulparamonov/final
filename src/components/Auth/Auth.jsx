import React from "react";
import { useAuth } from "../../contexts/authContext";
import ProductList from "../ProductsList/ProductsList";
import Login from "./Login";

const Auth = () => {
  const { user } = useAuth();
  return <div>{user ? <ProductList /> : <Login />}</div>;
};

export default Auth;
