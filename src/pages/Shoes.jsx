import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card/Card";
import Sort from "../components/Sort/Sort";
import Skeleton from "../components/Card/Skeleton";
// import Header from "../components/Header/Header";
// import styles from "../components/Card/Card.module.css";
import "../App.css";

export const Shoes = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://61f82c0d783c1d0017c44616.mockapi.io/shoes")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Banner />
      <Sort></Sort>
      <div className="cards">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton className="skeleton" key={index} />)
          : items.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
