import { Accordion, Card } from "react-bootstrap";
import { BaseURL } from "../utils/baseurl";
import styles from "./recentlyViewed.module.scss";

export function RecentlyViewed({ posts }) {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Recently Viewed News</Accordion.Header>
          <Accordion.Body>
            {posts.map((post) => (
              <Card key={post.id}>
                <Card.Text>{post.title}</Card.Text>
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
