import React from 'react'
// import PropTypes from 'prop-types'

import Navbar from '@components/Navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <section className="container">
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </section>
  )
}

Layout.propTypes = {}

export default Layout
