import { Card, Button } from "react-bootstrap";
import { BaseURL } from "../utils/baseurl";
import styles from "./newsCard.module.scss";
import { useRouter } from "next/router";

export function NewsCard({ post, recentlyLiked, setRecentlyLiked }) {
  const router = useRouter();

  function handleClick(id, post) {
    router.push(`/posts/${id}`);
    if (sessionStorage.getItem("post") == null) {
      sessionStorage.setItem("post", "[]");
    }
    let oldData = JSON.parse(sessionStorage.getItem("post"));
    oldData.push(post);
    sessionStorage.setItem("post", JSON.stringify(oldData));
  }

  return (
    <div>
      <Button
        variant="light"
        className={styles.button}
        style={{ width: "250px", height: "525px" }}
        onClick={() => handleClick(post.id, post)}
      >
        <Card className={styles.card}>
          <Card.Body className={styles.body}>
            <Card.Img
              variant="top"
              height="300px"
              width="350px"
              src={`${BaseURL}${post.featured_image_url.replace(
                "post/",
                "posts/"
              )}`}
            />
            <Card.Title> {post.title}</Card.Title>
          </Card.Body>

          <Card.Footer className={styles.footer}>
            <Card.Img
              src={`${BaseURL}${post.user.profile_image}`}
              className={styles.image}
            />
            <div className={styles.footerText}>
              <Card.Title>{`${post.user.name} ${post.user.surname}`}</Card.Title>
              <small className="text-muted">{post.published_at}</small>
            </div>
          </Card.Footer>
        </Card>
      </Button>
    </div>
  );
}
