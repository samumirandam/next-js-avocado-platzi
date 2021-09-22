import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
=======
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
>>>>>>> 4-ui

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
<<<<<<< HEAD
      .then(({ data, length }) => {
=======
      .then(({ data }: TAPIAvoResponse) => {
>>>>>>> 4-ui
        setProductList(data)
      })
  }, [])

  return (
<<<<<<< HEAD
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
=======
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
>>>>>>> 4-ui
  )
}

export default HomePage
