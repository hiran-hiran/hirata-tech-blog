import { useState, useEffect } from "react";

import Card from "../../../components/Card";
import Layout from "../../../components/Layout";
import Pager from "../../../components/Pager";

import { getAllPosts, getCategories, getPagePosts } from "../../../lib/api";
import { getPagesCount } from "../../../lib/createPager";

export const getStaticPaths = async () => {
	const posts = await getAllPosts();
	const pagesCount = await getPagesCount(posts);

	const paths = pagesCount.map((page) => ({
		params: { page: (page + 1).toString() },
	}));
	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const posts = await getPagePosts(params.page);
	const categories = await getCategories();

	return { props: { posts, categories } };
};

const Page = ({ posts, categories }) => {
	const [pages, setPages] = useState([]);

	useEffect(() => {
		const pagesCount = getPagesCount(posts);
		setPages(pagesCount);
	}, []);
	// console.log(pages);

	return (
		<>
			<Layout categories={categories}>
				<ul>
					{posts.contents.map((post) => (
						<Card post={post} className="" key={post.id} />
					))}
				</ul>
				<Pager pages={pages} />
			</Layout>
		</>
	);
};

export default Page;
