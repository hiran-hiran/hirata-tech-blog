import React from "react";
// import styled from "@emotion/styled";

const PostBody = ({ body }) => {
  return <div dangerouslySetInnerHTML={{ __html: `${body}` }} />;
};
export default PostBody;

// const StyledSection = styled.section`
//   line-height: 2;
//   font-size: 15px;

//   h1 {
//     margin-bottom: 20px;
//     padding: 15px;
//     font-size: 30px;
//     font-weight: 700;
//     background-color: #eee;
//     border-left: 5px solid #2db2a4;
//     line-height: 1.2;
//   }
//   h2 {
//     margin-bottom: 20px;
//     padding: 5px 0;
//     font-size: 28px;
//     font-weight: 700;
//     border-bottom: 1px solid #eee;
//     line-height: 1.2;
//   }
//   h3 {
//     margin-bottom: 20px;
//     padding-left: 1rem;
//     font-size: 24px;
//     font-weight: 700;
//     border-left: 5px solid #f28488;
//     line-height: 1.2;
//   }
//   h4 {
//     margin-bottom: 10px;
//     font-size: 20px;
//     font-weight: 700;
//     line-height: 1.2;
//   }

//   pre {
//     margin-bottom: 20px;
//     white-space: pre-wrap;
//     word-wrap: break-word;
//     line-height: 1.5;
//     code {
//       padding: 20px;
//     }
//   }
//   p {
//     margin-bottom: 10px;
//   }
//   img {
//     display: block;
//     max-width: 100%;
//   }
//   a {
//     color: #2db2a4;
//     font-size: 14px;
//     text-decoration: underline;
//   }
//   ul {
//     padding-left: 30px;
//     list-style: disc;
//   }
// `;
