import { BaseURL } from "../../utils/baseurl";
import { NewsCard } from "../../components/newsCard.js";
import styles from "../../styles/pages.module.css";
import { PaginationTab } from "../../components/PaginationTab";
import { RecentlyViewed } from "../../components/recentlyViewed";
import { useEffect, useState } from "react";

export default function Pages({ data }) {
  const [recentlyViewedData, setRecentlyViewedData] = useState([]);
  useEffect(() => {
    let recentlyViewedData = JSON.parse(sessionStorage.getItem("post"));
    setRecentlyViewedData(recentlyViewedData);
  }, []);

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
        <RecentlyViewed posts={recentlyViewedData} />
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
