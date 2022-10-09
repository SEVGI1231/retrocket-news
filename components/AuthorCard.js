import { Card } from "react-bootstrap";
import styles from "./AuthorCard.module.css";
import { BaseURL } from "../utils/baseurl";

export function AuthorCard({ imgURL, name, surname }) {
  return (
    <div>
      <Card style={{ width: "16rem" }} className="text-center">
        <Card.Body>
          <Card.Img className={styles.image} src={`${BaseURL}/${imgURL}`} />
          <Card.Title>{`${name} ${surname}`}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
