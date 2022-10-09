import { BaseURL } from "../../utils/baseurl";
import Image from "next/image";
import styles from "../../styles/posts.module.scss";

export default function Posts({ data }) {
  console.log(data);
  return (
    <>
      <div className={styles.page}>
        <h1>{data.title}</h1>
        <div className={styles.writerinfo}>
          <img
            className={styles.profileimg}
            src={`${BaseURL}${data.user.profile_image.replace(
              "post/",
              "posts/"
            )}`}
          ></img>
          <p>
            {data.user.name} {data.user.surname}
          </p>
        </div>
        <br />
        <img
          src={`${BaseURL}${data.featured_image_url.replace(
            "post/",
            "posts/"
          )}`}
          alt="featured_image"
        />
        <br />
        <p>{data.content}</p>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  let paths = [];
  for (let number = 1; number <= 15; number++) {
    paths.push({ params: { postid: `${number}` } });
  }
  return { paths: paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`${BaseURL}/post-details/${params.postid}.json`);
  const data = await res.json();
  return { props: { data } };
}
