import { Card, Button } from "react-bootstrap";
import { BaseURL } from "../utils/baseurl";
import styles from "./newsCard.module.css";
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
    <>
      <Button
        variant="light"
        className="p0 m2"
        style={{ width: "20rem", height: "33rem" }}
        onClick={() => handleClick(post.id, post)}
      >
        <Card className={styles.card} style={{ width: "90%" }}>
          <Card.Body>
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
    </>
  );
}
