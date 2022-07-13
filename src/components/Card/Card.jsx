import React from "react";
import styles from "./Card.module.css";
// import search from "./search.svg";
// import remove from "./btn-remove.svg";
import shoesImage from "./adidas-ozweego.jpg";
import { Link } from "react-router-dom";

function Card({items}) {
  console.log(items);

  return (
    <div className={styles.cards}>
      {items.map((item) =>
        <div className={styles.card} key={item.id}>
            <Link key={item.id} to={`/shoes/${item.id}`}>
              <img src={shoesImage} className={styles.shoesImg} alt="" width={260} height={265} />
              <h5>{item.name}</h5>
              <span className={styles.price}>{item.price} руб.</span>
            </Link>
        </div>
      )}

    </div>
  );
}

export default Card