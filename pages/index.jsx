import Head from 'next/head'
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import { getAllPosts, getCategories } from '../lib/api';
import Pager from '../components/Pager';
import { getPagesCount } from '../lib/createPager';


export const getStaticProps = async () => {
	const posts = await getAllPosts()
	const categories = await getCategories()

	return { props: { posts, categories } }
}



const Home = ({ posts, categories }) => {
    const [pages, setPages] = useState([])

	useEffect(() => {
		const pagesCount = getPagesCount(posts)
		setPages(pagesCount)
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
				<Pager pages={pages} />
			</Layout>
		</>
	)
}





export default Home
