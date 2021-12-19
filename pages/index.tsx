import Head from "next/head";
import { InferGetStaticPropsType, NextPage } from "next";

import { useState, useEffect } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { getAllPosts, getCategories } from "../lib/api";
import Pager from "../components/Pager";
import { getPagesCount } from "../lib/createPager";

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const categories = await getCategories();
  return { props: { posts, categories } };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts, categories }) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const pagesCount = getPagesCount(posts);
    setPages(pagesCount);
  }, []);

  return (
    <>
      <Head>
        <title>ヒラタのブログ</title>
      </Head>
      <Layout categories={categories}>
        <ul>
          {posts.contents.map((post) => (
            <Card post={post} key={post.id} />
          ))}
        </ul>
        <Pager pages={pages} />
      </Layout>
    </>
  );
};

export default Home;
