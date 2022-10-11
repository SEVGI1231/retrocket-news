import { Accordion, Card } from "react-bootstrap";
import { BaseURL } from "../utils/baseurl";
import styles from "./recentlyViewed.module.scss";

export function RecentlyViewed({ posts }) {
  return (
    <>
      <Accordion style={{ width: "100%" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h2 className={styles.title}>Recently Viewed News</h2>
          </Accordion.Header>
          <Accordion.Body>
            {posts.map((post) => (
              <Card className={styles.card} key={post.id}>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                </Card.Body>
                <Card.Footer className={styles.footer}>
                  <Card.Img
                    className={styles.image}
                    src={`${BaseURL}${post.user.profile_image}`}
                  />
                  <div className={styles.footerText}>
                    <Card.Title>{`${post.user.name} ${post.user.surname}`}</Card.Title>
                    <small className="text-muted">{post.published_at}</small>
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
