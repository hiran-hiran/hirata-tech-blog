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
		<StyledDiv>
			<Layout categories={categories}>
				<p>大阪のweb制作会社でコーダーしてます。</p>
				<p>大きい企業でフロントエンドしたいです。</p>
				<p>ちょっとだけデザイナーしてましたので、たまにデザインもやります。</p>
        <p>React, Next.jsをちょこちょこ勉強してます。</p>
        <p>このブログはNext.js(SSG), microCMSで構築しました。</p>
			</Layout>
		</StyledDiv>
	);
};

export default about;

const StyledDiv = styled.div`
  line-height: 1.8;
`;
