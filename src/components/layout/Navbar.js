import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";


function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Share Account" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/order">Create Order</Link>
          </li>
          <li className={styles.item}>
            <Link to="/myorder">My Orders</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
