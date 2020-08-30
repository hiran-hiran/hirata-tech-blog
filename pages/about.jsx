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
            Aboutページ
        </Layout>
    )
}

export default about
