import { useState, useEffect, useCallback } from "react";
// import styled from "@emotion/styled";
import Link from "next/link";
import NextImage from "next/image";
import { useGetPostTime } from "../lib/hooks/useGetPostTime";

export const Card = ({ post }) => {
  const [bodyText, setBodyText] = useState(post.body);

  const postTime = useGetPostTime(post);

  const cutText = useCallback(() => {
    const max = 100;
    if (bodyText) {
      const newText = bodyText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
      if (newText.length > max) {
        const silceText = newText.substr(0, max) + "...";
        setBodyText(silceText);
      } else {
        setBodyText(newText);
      }
    }
  }, []);

  useEffect(() => {
    cutText();
  }, []);

  return (
    <div className="border-b-[1px] border-[#eee] last:border-none">
      <Link href={`/blog/${post.id}`} className="group block p-7 max-md:px-0">
        <div className="flex">
          {/* <div className="img">
                {post.thumbnail ? <img src={post.thumbnail.url} alt={post.title} /> : <img src="/img/common/not-found.png" alt={post.title} />}
            </div> */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between mt-3">
              <div className="flex items-center">
                <NextImage
                  src="/img/icons/category-icon.svg"
                  width={15}
                  height={15}
                  alt="カテゴリ"
                />
                <p>{post?.category[0]?.category}</p>
              </div>
              <div className="flex items-center">
                <NextImage
                  src="/img/icons/time-icon.svg"
                  width={15}
                  height={15}
                  alt="時間"
                />
                <time>{postTime}</time>
              </div>
            </div>
            <h2 className="group-hover:text-[#2db2a4] transition-colors ease-in-out text-3xl font-bold">
              {post.title}
            </h2>
            <p className="leading-6">{bodyText}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
