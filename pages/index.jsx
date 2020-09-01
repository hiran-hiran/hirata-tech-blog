import Head from 'next/head'
import Card from '../components/Card';
import Layout from '../components/Layout';
import { getAllPosts, getCategories } from '../lib/api';



export const getStaticProps = async () => {
	const posts = await getAllPosts()
	const categories = await getCategories()
	
	return { props: { posts, categories } }
}


const Home = ({posts, categories}) => {

	return (
		<Layout categories={categories}>
			<ul>
				{posts.contents.map(post => (
					<Card
						post={post}
						className=""
						key={post.id}
					/>
				))}
			</ul>
		</Layout>
	)
}





export default Home
