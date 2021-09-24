import React from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

// export const getServerSideProps = async () => {
export const getStaticProps: GetStaticProps = async () => {
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
  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href="/yes-or-no">
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
