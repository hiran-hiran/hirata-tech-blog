import styled from "@emotion/styled"
import Link from "next/link"



const Categories = ({ categories }) => {

    return (
        <div>
            <h3>categories</h3>
            <ul>
                {categories.contents.map(cate => (
                    <li key={cate.id}>
                        <Link href="/category/[category]" as={`/category/${cate.url}`}>
                            <a>{cate.category}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}



export default Categories


