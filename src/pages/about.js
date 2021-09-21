import React from 'react'
import Layout from '../components/Layout';
import {StaticImage} from 'gatsby-plugin-image'
import {Link,graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const About = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
 // console.log(data);
    return (
        <Layout>
          <SEO title="about page" description="this is the about page" />
        <main className='page'>
          <section className='about-page'>
          <article>
          <h2>about here</h2>  
          <p>
                    Etsy pour-over cornhole ramps chartreuse. Brooklyn coloring book +1 banh mi unicorn etsy. Fixie gastropub viral yr actually single-origin</p>
                  <p>coffee kickstarter artisan tumblr 3 wolf moon. Subway tile lo-fi marfa, waistcoat scenester leggings DIYown, shabby chic put a bird on it tumeric whatever </p>
          <Link to='/contact' className='btn'>contact</Link>
          </article>
          <StaticImage 
             src='../assets/images/about.jpeg'
             alt='person poring salt'
             className='about-img'
             placeholder='blurred'
             />

          </section>
          <section className="featured-recipes">
            <h5>Look at these recipes!</h5>
            <RecipesList recipes={recipes}/>
          </section>

        </main>
         
          
       
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`


export default About
