import styled from "@emotion/styled"
import Link from "next/link"
import Layout from "../../components/Layout";
import { getAllPosts, getPost, getCategories } from "../../lib/api";


export const getStaticPaths = async () => {
	const posts = await getAllPosts()
    const paths = posts.contents.map(post => ({
        params: { id: post.id }
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async context => {
    const id = context.params.id
    const post = await getPost(id)
	const categories = await getCategories()

    return { props: { post, categories } }
}



const Blog = ({ post, categories }) => {

    return (
        <Layout categories={categories}>
            <div>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: `${post.body}` }}></div>
            </div>
        </Layout>

    )
}

export default Blog






