import { useState, useEffect } from "react";

export const useGetPostTime = (post) => {
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();

  useEffect(() => {
    const date = new Date(post.publishedAt);
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
    setDay(date.getDate());
  }, []);

  return `${year}/${month}/${day}`;
};
