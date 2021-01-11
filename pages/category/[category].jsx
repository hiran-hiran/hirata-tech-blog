import Head from "next/head";
import { getAllPosts, getCategories, getCategoryPosts } from "../../lib/api";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

export const getStaticPaths = async () => {
	const categories = await getCategories();
	const paths = categories.contents.map((category) => ({
		params: {
			category: category.url,
			// id: category.id
		},
	}));
	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const cate = params.category;
	const categories = await getCategories();

	const newArray = categories.contents.filter((item, index) => {
		if (item.url === cate) {
			return true;
		}
	});
	const posts = await getCategoryPosts(newArray[0].id);

	return { props: { posts, categories } };
};

const Category = ({ posts, categories }) => {

	return (
    <>
      <Head>
        <title>{  } | ヒラタのブログ</title>
      </Head>
			<Layout categories={categories}>
				<ul>
					{posts.contents.map((post) => (
						<Card post={post} className="" key={post.id} />
					))}
				</ul>
			</Layout>
		</>
	);
};

export default Category;
