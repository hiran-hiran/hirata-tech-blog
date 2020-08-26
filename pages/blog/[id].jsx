import styled from "@emotion/styled"
import Link from "next/link"



const Blog = ({ post }) => {
    console.log("post", post);
    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: `${post.body}`}}></div>
        </div>
    )
}

export default Blog



export const getStaticPaths = async () => {
    const key = { headers: {"X-API-KEY": process.env.API_KEY} }
    const res = await fetch(process.env.END_POINT + "blog", key)
    const posts = await res.json()
    const paths = posts.contents.map(post => ({ params: { id: post.id } }))
    return { paths, fallback: false }
}

export const getStaticProps = async context => {
    const key = { headers: { "X-API-KEY": process.env.API_KEY } }
    const id = context.params.id
	const res = await fetch(process.env.END_POINT + "blog/" + id, key)
    const post = await res.json()
    return { props: { post } }
}


