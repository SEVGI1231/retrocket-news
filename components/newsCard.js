import Card from "react-bootstrap/Card";
import { BaseURL } from "../utils/formatApi";
import styles from "./newsCard.module.css";

export function NewsCard({ title, date, image }) {
  return (
    <>
      <Card className={styles.card} style={{ width: "40%" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            height="300px"
            width="350px"
            src={`${BaseURL}${image.replace("post", "posts")}`}
          />
          <Card.Title> {title}</Card.Title>
        </Card.Body>
        <Card.Footer>{date}</Card.Footer>
      </Card>
    </>
  );
}
