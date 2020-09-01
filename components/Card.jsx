import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Link from "next/link"




const Card = ({ post }) => {
    const [year, setYear] = useState("")
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")


    useEffect(() => {
        const date = new Date(post.publishedAt)
        setYear(date.getFullYear())
        setMonth(date.getMonth() + 1)
        setDay(date.getDate())
    }, [])


    return (
        <StyledCard>
            <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                <a>
                    <div className="flex">
                        <div className="img">
                            {post.thumbnail ? <img src={post.thumbnail.url} alt={post.title} /> : <img src="/img/common/not-found.png" alt={post.title} />}
                        </div>
                        <div className="text">
                            <h2 className="title">{post.title}</h2>
                            <span className="category">{post.category[0].category}</span>
                            <time>{`${year}/${month}/${day}`}</time>
                        </div>
                    </div>
                </a>
            </Link>
        </StyledCard>
    )
}


const StyledCard = styled.li`
     width: 100%;
     border-bottom: 1px solid #ccc;
     padding: 20px;
     &:last-child{
        border-bottom: none;
     }

     .flex{
         display: flex;
         .img{
             width: 300px;
             height: 170px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 10px;
                object-fit: cover;
            }
         }
         .text{
             padding-left: 20px;
             time{
                 display: block;
             }
             .category{
                margin-bottom: 10px;
                display: inline-block;
                padding: 5px 10px;
                border: 1px solid #ccc;
                border-radius: 20px;
            }
             .title{
                margin-bottom: 20px;
                 font-size: 24px;
                 font-weight: 700;
             }
         }
     }
`;

export default Card
