import Nav from "react-bootstrap/Nav";
import styles from "./header.module.scss";

export function Header() {
  return (
    <>
      <Nav
        className={styles.navbar}
        justify
        variant="tabs"
        defaultActiveKey="/home"
      >
        <Nav.Item className={styles.item}>
          <Nav.Link className={styles.link} href="/newspages/1">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.item}>
          <Nav.Link className={styles.link} href="/authors">
            Authors
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
