import React from "react";
import styles from "./Sort.module.css";


function Sort() {

  const [isMobile, setIsMobile] = React.useState(false);

  return (
    <>
      <div className={styles.contentTop}>
        <h1>Все кроссовки</h1>
        <div className={styles.sort}>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span>популярности</span>
        </div>
        <div className={styles.sortMobile}>
          <div className={styles.sorting} onClick={() => setIsMobile(!isMobile)}>
            <span>Сортировка</span>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5517 8.72412L11 13.2758L6.44824 8.72412" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

          </div>
          <div className={styles.filter} onClick={() => setIsMobile(!isMobile)}>
              <span>Фильтр</span>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4669 8.06676H2.93353C2.73904 8.06676 2.55251 7.9895 2.41498 7.85198C2.27746 7.71445 2.2002 7.52792 2.2002 7.33343C2.2002 7.13894 2.27746 6.95241 2.41498 6.81489C2.55251 6.67736 2.73904 6.6001 2.93353 6.6001H12.4669C12.6614 6.6001 12.8479 6.67736 12.9854 6.81489C13.1229 6.95241 13.2002 7.13894 13.2002 7.33343C13.2002 7.52792 13.1229 7.71445 12.9854 7.85198C12.8479 7.9895 12.6614 8.06676 12.4669 8.06676ZM19.0669 8.06676H16.1335C15.939 8.06676 15.7525 7.9895 15.615 7.85198C15.4775 7.71445 15.4002 7.52792 15.4002 7.33343C15.4002 7.13894 15.4775 6.95241 15.615 6.81489C15.7525 6.67736 15.939 6.6001 16.1335 6.6001H19.0669C19.2614 6.6001 19.4479 6.67736 19.5854 6.81489C19.7229 6.95241 19.8002 7.13894 19.8002 7.33343C19.8002 7.52792 19.7229 7.71445 19.5854 7.85198C19.4479 7.9895 19.2614 8.06676 19.0669 8.06676Z" fill="#111224"/>
              <path d="M14.3002 9.89994C13.7926 9.89994 13.2963 9.7494 12.8742 9.46737C12.4521 9.18535 12.1232 8.78449 11.9289 8.31549C11.7346 7.84649 11.6838 7.33042 11.7828 6.83254C11.8819 6.33465 12.1263 5.87732 12.4853 5.51836C12.8442 5.15941 13.3016 4.91496 13.7995 4.81592C14.2973 4.71689 14.8134 4.76771 15.2824 4.96198C15.7514 5.15624 16.1523 5.48522 16.4343 5.90731C16.7163 6.32939 16.8669 6.82563 16.8669 7.33327C16.8669 8.01399 16.5964 8.66683 16.1151 9.14818C15.6338 9.62952 14.9809 9.89994 14.3002 9.89994ZM14.3002 6.23327C14.0826 6.23327 13.87 6.29778 13.6891 6.41865C13.5082 6.53952 13.3672 6.71132 13.2839 6.91232C13.2007 7.11332 13.1789 7.33449 13.2213 7.54787C13.2638 7.76125 13.3685 7.95725 13.5224 8.11109C13.6762 8.26492 13.8722 8.36969 14.0856 8.41213C14.299 8.45458 14.5201 8.43279 14.7211 8.34954C14.9221 8.26628 15.0939 8.12529 15.2148 7.9444C15.3357 7.7635 15.4002 7.55083 15.4002 7.33327C15.4002 7.04153 15.2843 6.76174 15.078 6.55545C14.8717 6.34916 14.5919 6.23327 14.3002 6.23327ZM19.0669 15.3999H9.53353C9.33904 15.3999 9.15251 15.3227 9.01498 15.1851C8.87746 15.0476 8.8002 14.8611 8.8002 14.6666C8.8002 14.4721 8.87746 14.2856 9.01498 14.1481C9.15251 14.0105 9.33904 13.9333 9.53353 13.9333H19.0669C19.2614 13.9333 19.4479 14.0105 19.5854 14.1481C19.7229 14.2856 19.8002 14.4721 19.8002 14.6666C19.8002 14.8611 19.7229 15.0476 19.5854 15.1851C19.4479 15.3227 19.2614 15.3999 19.0669 15.3999ZM5.86686 15.3999H2.93353C2.73904 15.3999 2.55251 15.3227 2.41498 15.1851C2.27746 15.0476 2.2002 14.8611 2.2002 14.6666C2.2002 14.4721 2.27746 14.2856 2.41498 14.1481C2.55251 14.0105 2.73904 13.9333 2.93353 13.9333H5.86686C6.06135 13.9333 6.24788 14.0105 6.38541 14.1481C6.52293 14.2856 6.6002 14.4721 6.6002 14.6666C6.6002 14.8611 6.52293 15.0476 6.38541 15.1851C6.24788 15.3227 6.06135 15.3999 5.86686 15.3999Z" fill="#111224"/>
              <path d="M7.69997 17.2334C7.19233 17.2334 6.69609 17.0829 6.274 16.8009C5.85192 16.5188 5.52294 16.118 5.32868 15.649C5.13441 15.18 5.08358 14.6639 5.18262 14.166C5.28166 13.6681 5.52611 13.2108 5.88506 12.8519C6.24402 12.4929 6.70135 12.2485 7.19924 12.1494C7.69712 12.0504 8.21319 12.1012 8.68219 12.2955C9.15119 12.4897 9.55204 12.8187 9.83407 13.2408C10.1161 13.6629 10.2666 14.1591 10.2666 14.6668C10.2666 15.3475 9.99622 16.0003 9.51488 16.4817C9.03353 16.963 8.38069 17.2334 7.69997 17.2334ZM7.69997 13.5668C7.48241 13.5668 7.26974 13.6313 7.08884 13.7521C6.90795 13.873 6.76696 14.0448 6.6837 14.2458C6.60044 14.4468 6.57866 14.668 6.6211 14.8814C6.66355 15.0947 6.76831 15.2907 6.92215 15.4446C7.07599 15.5984 7.27199 15.7032 7.48537 15.7456C7.69875 15.7881 7.91992 15.7663 8.12092 15.683C8.32192 15.5998 8.49372 15.4588 8.61459 15.2779C8.73545 15.097 8.79997 14.8843 8.79997 14.6668C8.79997 14.375 8.68408 14.0952 8.47779 13.8889C8.2715 13.6827 7.99171 13.5668 7.69997 13.5668Z" fill="#111224"/>
              </svg>

          </div>
        </div>
      </div>
      <div className={isMobile ? styles.sortDialogActive : styles.sortDialog}>
        <div className={styles.sorts}>
          <a className={styles.sortSelectActive} href="/">Сначала дороже</a>
          <a className={styles.sortSelect} href="/">Сначала дешевле</a>
          <a className={styles.sortSelect} href="/">По размеру скидки</a>
          <a className={styles.sortSelect} href="/">Сначала популярные</a>
        </div>

      </div>
      <div className={isMobile ? styles.filterModalActive : styles.filterModal }>
        <div className={styles.headerModal}>
            <span>Фильтр</span>
            <svg onClick={() => setIsMobile(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.695202 0.257223C0.474702 0.356403 0.254202 0.648544 0.204702 0.907564C0.122082 1.35954 0.0504422 1.27674 4.0297 5.26716L7.75552 8.99856L4.02412 12.7354C1.97392 14.7857 0.270762 16.5218 0.237642 16.5881C0.149442 16.7645 0.166002 17.1392 0.265182 17.3542C0.436002 17.7124 0.970602 17.9109 1.3675 17.762C1.45012 17.7289 3.20836 16.0313 5.27512 13.9865L9.02848 10.2717L12.7215 13.97C14.8436 16.092 16.4859 17.6958 16.5851 17.7399C17.3346 18.0652 18.0897 17.2604 17.7259 16.5328C17.6762 16.4336 15.9842 14.6974 13.9616 12.6747L10.2908 8.98758L13.9947 5.31684C17.9849 1.34856 17.8803 1.4697 17.7921 0.984783C17.693 0.450182 17.0261 0.130503 16.53 0.378542C16.4308 0.428043 14.7111 2.10924 12.705 4.10994L9.0508 7.75854L5.34694 4.05468C3.30754 2.02086 1.56046 0.317883 1.46128 0.268204C1.24636 0.163443 0.926682 0.158043 0.695202 0.257223Z" fill="black"/>
            </svg>

        </div>
        <div className={styles.brandsModal}>
          <span>Бренд</span>
            <ul>
              <li className={styles.brandSelect}>Puma</li>
              <li className={styles.brandSelect}>Jordan</li>
              <li className={styles.brandSelect}>adidas Originals</li>
              <li className={styles.brandSelect}>Reebok</li>
              <li className={styles.brandSelect}>New Balance</li>
            </ul>
        </div>
        <div className={styles.sizesModal}>
          <span>Размер</span>
            <div className={styles.sizesSelects}>
              <ul>
                <li className={styles.sizeSelect}>40</li>
                <li className={styles.sizeSelect}>41</li>
                <li className={styles.sizeSelect}>42</li>
                <li className={styles.sizeSelect}>43</li>
                <li className={styles.sizeSelect}>44</li>
                <li className={styles.sizeSelect}>45</li>
                <li className={styles.sizeSelect}>46</li>
                <li className={styles.sizeSelect}>47</li>
              </ul>
            </div>
        </div>
        <button className={styles.apply}>Применить</button>
      </div>
      <div className={styles.brand}>
        <ul>
          <li>Nike</li>
          <li>Puma</li>
          {/* <li className={styles.active}>Puma</li> */}
          <li>Reebok</li>
          <li>New Balance</li>
          <li>adidas Originals</li>
        </ul>
      </div>
    </>
  );
}

export default Sort;
