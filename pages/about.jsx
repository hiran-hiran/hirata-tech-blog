import React from 'react'
import Layout from '../components/Layout'
import { getCategories } from '../lib/api'


export const getStaticProps = async () => {
	const categories = await getCategories()
	return { props: { categories } }
}


const about = ({categories}) => {
    return (
        <Layout categories={categories}>
            <p>大阪のweb制作会社のコーダー</p>
            <p>大きい企業でフロントエンドしたい</p>
            <p>ちょっとだけデザイナーしてました</p>
        </Layout>
    )
}

export default about
