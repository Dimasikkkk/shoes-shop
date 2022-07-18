import React from "react";
import { useParams } from "react-router-dom";
// import Header from "../components/Header/Header";
import ProductBlock from "../components/ProductBlock/ProductBlock";

export const ProductFull = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://61f82c0d783c1d0017c44616.mockapi.io/shoes/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <>
      <ProductBlock
        id={item.id}
        name={item.name}
        article={item.article}
        price={item.price}
        color={item.color}
        sizes={item.sizes}
        images={item.images}
      />
    </>
  );
};

