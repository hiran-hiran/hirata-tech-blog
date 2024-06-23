import React from "react";
// import styled from "@emotion/styled";
import Link from "next/link";

import { useRouter } from "next/router";

const Pager = ({ pages }) => {
  const router = useRouter();
  // console.log(router.query.page)

  return (
    <div>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              href="/blog/page/[page]"
              as={`/blog/page/${page + 1}`}
              className="is-active"
              aria-disabled={true}
            >
              {router.query.page === (page + 1).toString()
                ? page + 1
                : page + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pager;

// const StyledDiv = styled.div`
//   margin: 50px auto 0;
//   font-size: 20px;
//   ul {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     li {
//       a {
//         display: block;
//         width: 40px;
//         line-height: 40px;
//         border: 1px solid #052936;
//         margin: 0 10px;
//         border-radius: 5px;
//         color: #052936;
//         box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
//         &.is-active {
//           background: #052936;
//           color: #fff;
//           box-shadow: none;
//         }
//       }
//     }
//   }
// `;
