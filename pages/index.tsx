import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

// export const getStaticProps = async () => {
export const getServerSideProps = async () => {
  const response = await fetch(
    'https://next-js-avocado-platzi.vercel.app/api/avo'
  )
  const { data }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList: data,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  useEffect(() => {}, [])

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
