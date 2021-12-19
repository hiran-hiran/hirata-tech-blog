import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import styled from "@emotion/styled";

const Layout = ({ children, categories }) => {
  return (
    <StyledDiv>
      <Header />
      <div className="content-wrap">
        <main>{children}</main>
        <Sidebar categories={categories} />
      </div>
      <Footer />
    </StyledDiv>
  );
};

export default Layout;

const StyledDiv = styled.div`
  padding: 0 30px;
  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;
