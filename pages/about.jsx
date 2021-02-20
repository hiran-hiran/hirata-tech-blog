import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { getCategories } from "../lib/api";

export const getStaticProps = async () => {
	const categories = await getCategories();
	return { props: { categories } };
};

const about = ({ categories }) => {
	return (
		<Layout categories={categories}>
			<StyledDiv>
				<p>大阪のweb制作会社でコーダーしてます。</p>
				<p>フロントエンド開発したいです。</p>
				<p>ちょっとだけデザイナーしてましたので、たまにデザインもやります。</p>
				<p>React, Next.jsをちょこちょこ勉強してます。</p>
				<p>このブログはNext.js(SSG), microCMSで構築しました。</p>
			</StyledDiv>
		</Layout>
	);
};

export default about;

const StyledDiv = styled.div`
	line-height: 2;
`;
