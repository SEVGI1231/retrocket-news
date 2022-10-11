import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
import styles from "./header.module.scss";

export function Header() {
  const router = useRouter();
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
