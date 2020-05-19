import React from 'react'
import { Header, Footer } from './Layouts'
import Practise from './PractiseComponents'

export default class extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Practise />
        <Footer />
      </>
    )
  }
}
