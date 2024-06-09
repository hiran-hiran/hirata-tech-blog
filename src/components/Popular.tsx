import styled from "@emotion/styled";
import Link from "next/link";

const Popular = () => {
  return (
    <StyledDiv>
      <h3>よく読まれている記事</h3>
      <ul>
        <li>
          <Link href="/">記事のタイトルが入ります</Link>
        </li>
        <li>
          <Link href="/">記事のタイトルが入ります</Link>
        </li>
        <li>
          <Link href="/">
            記事のタイトルが入ります。記事のタイトルが入ります。
          </Link>
        </li>
        <li>
          <Link href="/">記事のタイトルが入ります</Link>
        </li>
        <li>
          <Link href="/">
            記事のタイトルが入ります。記事のタイトルが入ります。
          </Link>
        </li>
      </ul>
    </StyledDiv>
  );
};

export default Popular;

const StyledDiv = styled.div`
  h3 {
    margin-bottom: 15px;
    padding: 7px;
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    color: #052936;
    border: 1px solid #052936;
  }
  ul {
    li {
      padding: 20px 0 10px 10px;
      color: #2db2a4;
      border-bottom: 1px solid #eee;
      a {
        display: block;
      }
    }
  }
`;
