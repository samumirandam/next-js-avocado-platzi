import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { GetStaticProps } from 'next'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticPaths = async () => {
  const response = await fetch(
    'https://next-js-avocado-platzi.vercel.app/api/avo'
  )
  const { data }: TAPIAvoResponse = await response.json()

  const paths = data.map((avo) => ({
    params: {
      id: avo.id,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(
    `https://next-js-avocado-platzi.vercel.app/api/avo/${id}`
  )
  const product: TProduct = await response.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
