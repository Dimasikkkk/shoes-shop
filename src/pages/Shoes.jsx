import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card/Card";
import Sort from "../components/Sort/Sort";
import Skeleton from "../components/Card/Skeleton";
import { useSelector, useDispatch} from "react-redux";
// import Header from "../components/Header/Header";
// import styles from "../components/Card/Card.module.css";
import "../App.css";
import { setCategoryId } from "../redux/slices/filterSlice";

export const Shoes = () => {
  const dispatch = useDispatch()
  const categoryId = useSelector((state) => state.filter.categoryId);
  const onChangeCategory = (id) => {
    console.log(id);
    dispatch(setCategoryId(id))
  };

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(`https://61f82c0d783c1d0017c44616.mockapi.io/shoes?${category}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId]);
  return (
    <>
      <Banner />
      <Sort value={categoryId} onChangeCategory={onChangeCategory}></Sort>
      <div className="cards">
        {isLoading
          ? [...new Array(8)].map((_, index) => (
              <Skeleton className="skeleton" key={index} />
            ))
          : items.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
