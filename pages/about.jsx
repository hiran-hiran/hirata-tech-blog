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
				<p>大阪のweb制作会社でマークアップしてます。</p>
        <p>最近参加したNext.js案件が、楽しくやりがいもあったので、</p>
        <p>もっとフロントエンドとしてキャリアを歩んでいきたいです。</p>
				<p>ちょっとだけデザイナーしてましたので、たまにデザインもやります。</p>
				<p>このブログはNext.js(SSG), microCMSで構築しました。</p>
			</StyledDiv>
		</Layout>
	);
};

export default about;

const StyledDiv = styled.div`
	line-height: 2;
`;
