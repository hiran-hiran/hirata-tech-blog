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
    console.log(post);

    return (
        <Layout categories={categories}>
            <StyledDiv>
                <div className="post-title-wrap">
                    <h1>{post.title}</h1>
                    <span>{post.category[0].category}</span>
                </div>

                <div dangerouslySetInnerHTML={{ __html: `${post.body}` }}></div>
            </StyledDiv>
        </Layout>

    )
}

export default Blog





const StyledDiv = styled.div`
.post-title-wrap{
    h1{
        font-size: 36px;
        font-weight: 700;
    }

}
`;

