import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
// import TopTitle from './TopTitle'
import styled from "@emotion/styled";

const Layout = ({ children, categories }) => {
	return (
		<StyledDiv>
			<Header />
			{/* <TopTitle /> */}
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
`;
