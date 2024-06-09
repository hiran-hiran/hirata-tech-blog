import styled from "@emotion/styled";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <StyledDiv>
      <h3>カテゴリ</h3>
      <ul>
        {categories.contents.map((cate) => (
          <li key={cate.id} className={`list_${cate.url}`}>
            <Link href="/category/[category]" as={`/category/${cate.url}`}>
              {cate.category}
            </Link>
          </li>
        ))}
      </ul>
    </StyledDiv>
  );
};

export default Categories;

const StyledDiv = styled.div`
  margin-bottom: 60px;
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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 50%;
      a {
        display: block;
        padding: 10px;
        margin-bottom: 5px;
        text-align: left;
        color: #2db2a4;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;
