import Head from 'next/head'
import { useState } from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import { getAllPosts, getCategories } from '../lib/api';
import { useEffect } from 'react';
import Pager from '../components/Pager';



export const getStaticProps = async () => {
	const posts = await getAllPosts()
	const categories = await getCategories()

	return { props: { posts, categories } }
}


const Home = ({ posts, categories }) => {
	const [page, setPage] = useState(1)
	const createPager = () => {
		const pageLength = Math.ceil((posts.totalCount / 10))
		setPage(pageLength)
	}
	useEffect(() => {
		createPager()
	}, [])


	return (
		<>
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
				<Pager page={page} />
			</Layout>
		</>
	)
}





export default Home
