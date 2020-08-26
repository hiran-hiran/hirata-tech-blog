import styled from "@emotion/styled"
import Link from "next/link"



const Card = ({ post }) => {
    // console.log(post);
    return (
        <StyledCard>
            <Link href="/blog/[blog]" as={`/blog/${post.id}`}>
                <a>
                <h2>{post.title}</h2>
                </a>
            </Link>
        </StyledCard>
    )
}


const StyledCard = styled.li`
     width: 100%;
     border-bottom: 1px solid #ccc;
     padding: 10px;
`;

export default Card
