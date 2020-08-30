import { getAllPosts, getCategories } from "../../lib/api"
import Layout from "../../components/Layout"
import Card from "../../components/Card"



export const getStaticPaths = async () => {
	const categories = await getCategories()
    const paths = categories.contents.map(category => ({
        params: { category: category.url }
    }))
    return { paths, fallback: false}
}

export const getStaticProps = async ({params}) => {
	const posts = await getAllPosts()
    const categories = await getCategories()

    const cate = params.category
    console.log(cate);
    const newPosts = posts.contents.filter(post => {
        return post.category[0].url === cate
    })
	
	return { props: { newPosts, categories } }
}


const Category = ({ newPosts, categories }) => {
    console.log(newPosts);
    return (
        <Layout categories={categories}>
            <ul>
				{newPosts.map(post => (
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

export default Category
