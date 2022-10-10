import { BaseURL } from "../../utils/baseurl";
import { NewsCard, useRecentlyLikedData } from "../../components/newsCard.js";
import styles from "../../styles/pages.module.css";
import { PaginationTab } from "../../components/PaginationTab";

export default function Pages({ data }) {
  console.log(data);

  return (
    <>
      <div className={styles.page}>
        {data.map((post) => (
          <>
            <NewsCard key={post.id} post={post} />
          </>
        ))}
      </div>
      <div className={styles.pagination}>
        <PaginationTab />
      </div>
      <div>
        {typeof window !== "undefined" &&
          JSON.parse(sessionStorage.getItem("post")).map((post) => (
            <p>{post.title}</p>
          ))}
      </div>
    </>
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pageid: "1" } },
      { params: { pageid: "2" } },
      { params: { pageid: "3" } },
    ],

    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`${BaseURL}/posts/${params.pageid}.json`);
  const { data } = await res.json();
  return { props: { data } };
}
