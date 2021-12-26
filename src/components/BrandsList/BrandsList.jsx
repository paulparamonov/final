import React, { useContext, useEffect } from "react";
import { Card } from "antd";

import { brandsContext } from "../../contexts/brandsContext";

const BrandsList = () => {
  const { getBrands, brands } = useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);
  //   console.log(brands);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "90px",
        alignItems:"center"
      }}
    >
      {brands.map((item) => (
        <Card
          hoverable
          style={{ width: "240px", height: "240px",borderRadius:"50%", margin: "10px" , background:"black" , border:"none" }}
          cover={<img style={{alignSelf:"center"}} alt="example" src={item.logo} />}
        />
      ))}
    </div>
  );
};

export default BrandsList;
