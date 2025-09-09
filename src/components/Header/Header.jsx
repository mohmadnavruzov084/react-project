import Meta from "../meta";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Meta />

      <header className={styles.header}>
        <div className="container">
          <div className={styles["header-box"]}>
            <div className={styles["header__logo"]}>
              <a href="#">MovieHub</a>
            </div>
            <nav className={styles["header__nav"]}>
              <ul className={styles["header__nav-list"]}>
                <li className={styles["header__nav-item"]}>
                  <Link to="">Главная</Link>
                </li>
                <li className={styles["header__nav-item"]}>
                  <Link to="/categories">Категории</Link>
                </li>
                <li className={styles["header__nav-item"]}>
                  <a href="">Поиск</a>
                </li>
                <li className={styles["header__nav-item"]}>
                  <Link to="/about">Обо мне</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <hr className={styles["header-hr"]} />
      </header>
    </>
  );
}

export default Header;
