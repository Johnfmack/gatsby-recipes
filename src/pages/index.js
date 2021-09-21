import React from "react"
import Layout from '../components/Layout';
import {StaticImage} from 'gatsby-plugin-image'
import FetchData from '../examples/fetchData'
import AllRecipes from '../components/AllRecipes'
import SEO from '../components/SEO'

export default function Home() {
  return (
  <Layout>
    <SEO title="Home Page" description="the home page" />
      <main className='page'>
        <header className='hero'>
          <StaticImage 
            src='../assets/images/main.jpeg' alt='eggs' 
            className='hero-img'    
            placeholder='tracedSVG'
            layout='fullWidth'
            ></StaticImage>
            <div className='hero-container'>
              <div className='hero-text'>
                <h1>simply recipes</h1>
                <h4>no fluff, just recipes</h4>
              </div>
            </div>
        </header>
        <FetchData />
      </main>
      <AllRecipes />
      
  </Layout>
  )
}
