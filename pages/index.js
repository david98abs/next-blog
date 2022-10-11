import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { getUsersData } from "../lib/users";

export default function Home({allPostsData, allUsersData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="main-content">
        <p className="main-text">
          Hello, I&#39;m David. I am Software Engineer and a React Developer.
          You can Contact me on <span className="twitter"><Link href="http://twitter.com">Twitter</Link></span>
        </p>
        <h3 className="gonext">
          <Link href="/posts/first-post">go to Next Page...</Link>
        </h3>
      </section>
      <div>
        <ul>
          {allPostsData.map(({id, title, date})=>(
            <li key={id}>{title}<br />{id}<br />{date}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {allUsersData.map((data)=>(
            <li key={data.id}>{data.id}<br />{data.name}<br />{data.email}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allUsersData = await getUsersData();
  return {
    props: {
      allPostsData,
      allUsersData
    },
  };
}

