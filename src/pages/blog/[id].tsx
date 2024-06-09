import { useState, useEffect } from "react";

import styled from "@emotion/styled";
// import Link from "next/link"
import NextImage from "next/image";
import Layout from "../../components/Layout";
import { getAllPosts, getPost, getCategories } from "../../lib/api";
import { useGetPostTime } from "../../lib/hooks/useGetPostTime";
import PostBody from "../../components/PostBody";

export const getStaticPaths = async () => {
  const posts = await getAllPosts(1000);
  const paths = posts.contents.map((post) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const post = await getPost(id);
  const categories = await getCategories();

  return { props: { post, categories } };
};

const Blog = ({ post, categories }) => {
  const postTime = useGetPostTime(post);

  return (
    <Layout categories={categories}>
      <StyledDiv>
        <div className="post-title-wrap">
          {/* <div className="mv">
                        {post.thumbnail ? <img src={post.thumbnail.url} alt={post.title} /> : <img src="/img/common/not-found.png" alt={post.title} />}
                    </div> */}
          <h1>{post.title}</h1>
          <div className="info">
            <div className="category">
              <NextImage
                src="/img/icons/category-icon.svg"
                width={15}
                height={15}
                alt="カテゴリ"
              />
              <p>{post?.category[0]?.category}</p>
            </div>
            <div className="time">
              <NextImage
                src="/img/icons/time-icon.svg"
                width={15}
                height={15}
                alt="時間"
              />
              <time>{postTime}</time>
            </div>
          </div>
        </div>
        <PostBody body={post.body} />
      </StyledDiv>
    </Layout>
  );
};

export default Blog;

const StyledDiv = styled.div`
  .post-title-wrap {
    .mv {
      margin-bottom: 30px;
      text-align: center;
      /* background-color: #999; */
      img {
        max-width: 100%;
      }
    }
    h1 {
      margin-bottom: 30px;
      font-size: 34px;
      font-weight: 700;
      line-height: 1.5;
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-bottom: 30px;
      margin-bottom: 30px;
      border-bottom: 1px solid #eee;
      color: #999;
      .time {
        display: flex;
        align-items: center;
      }
      .category {
        display: flex;
        align-items: center;
      }
    }
    svg {
      font-size: 1.2rem;
      margin-right: 5px;
    }
  }
`;
