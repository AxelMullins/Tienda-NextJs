import React from 'react'
import Layout from '../../components/layout'
import Products from '../../components/Products'
import { getItemData, getPathsFromTitle } from '../../lib/utils'

const ProductPage = ({productInfo}) => {
  return (
    <Layout title={productInfo.data.title}>
        <Products item={productInfo.data} showAs="Page" />
    </Layout>
  )
}

export const getStaticPaths = async () => {
    const paths = await getPathsFromTitle();

    return {
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const id = params.id;
    const productInfo = await getItemData(id);

    return {
        props: {
            productInfo
        }
    }
}

export default ProductPage