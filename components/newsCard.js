import Card from "react-bootstrap/Card";
import { BaseURL } from "../utils/baseurl";
import styles from "./newsCard.module.css";

export function NewsCard({
  title,
  date,
  postImage,
  authorImage,
  name,
  surname,
}) {
  return (
    <>
      <Card className={styles.card} style={{ width: "40%" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            height="300px"
            width="350px"
            src={`${BaseURL}${postImage.replace("post/", "posts/")}`}
          />
          <Card.Title> {title}</Card.Title>
        </Card.Body>

        <Card.Footer className={styles.footer}>
          <Card.Img src={`${BaseURL}${authorImage}`} className={styles.image} />
          <div className={styles.footerText}>
            <Card.Title>{`${name} ${surname}`}</Card.Title>
            <small className="text-muted">{date}</small>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
