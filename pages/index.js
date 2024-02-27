import Link from 'next/link';
import { client } from '../libs/client';
import styles from '../styles/Home.module.scss';

//ssg
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' });
  const categorie = await client.get({ endpoint: 'categories' });
  // console.log(data.eyecatch);

  return {
    props: {
      blog: data.contents,
      categories: categorie.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            {blog.title}
            <img className={styles.eyecatch} src={blog.eyecatch.url}></img>
          </Link>
        </li>
      ))}
    </div>
  );
}
