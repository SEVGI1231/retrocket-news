import { AuthorCard } from "../components/AuthorCard";
import { BaseURL } from "../utils/baseurl";
import styles from "../styles/authors.module.css";

export default function Authors({ authors }) {
  return (
    <div className={styles.page}>
      {authors.map((author) => (
        <AuthorCard
          key={author.id}
          imgURL={author.profile_image}
          name={author.name}
          surname={author.surname}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response1 = await fetch(`${BaseURL}/users/1.json`);
  const data1 = await response1.json();
  const response2 = await fetch(`${BaseURL}/users/2.json`);
  const data2 = await response2.json();
  const response3 = await fetch(`${BaseURL}/users/3.json`);
  const data3 = await response3.json();
  const authorsInfo = [data1, data2, data3];

  return {
    props: {
      authors: authorsInfo,
    },
  };
}
