import Head from 'next/head'
import Card from '../components/Card';





const Home = ({ posts }) => {
	// console.log(posts.contents);

	return (
		<div>
			<main>
				<ul>
					{posts.contents.map(post => (
						<Card
							post={post}
							className=""
							key={post.id}
						/>
					))}
				</ul>

			</main>
			<aside>
				sidebar
			</aside>
		</div>
	)
}




export const getStaticProps = async () => {
	const key = { headers: {"X-API-KEY": process.env.API_KEY} }
	const res = await fetch(process.env.END_POINT + "blog", key)
	const posts = await res.json()
	return { props: { posts } }
}

export default Home;
