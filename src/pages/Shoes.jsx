import axios from "axios";
import React from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
// import styles from "../components/Card/Card.module.css";


const Shoes = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://61f82c0d783c1d0017c44616.mockapi.io/api/shoes")
      .then((res) => {
        setItems(res.data)
      })
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Card items={items}/>
    </>
  );
};

export default Shoes;
