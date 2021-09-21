import React from 'react'
import Layout from '../components/Layout';
import {graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'



const contact = ({data}) => {

    const recipes = data.allContentfulRecipe.nodes
    return (
        <Layout>
            <SEO title="contact page" description="this is the contact page" />
            <main className="page">
                <section className="contact-page">
                 <article className="contact-info">
                  <h3>Want to get in touch?</h3>
                   <p>
                    Etsy pour-over cornhole ramps chartreuse. Brooklyn coloring book +1 banh mi unicorn etsy. Fixie gastropub viral yr actually single-origin</p>
                  <p>coffee kickstarter artisan tumblr 3 wolf moon. Subway tile lo-fi marfa, waistcoat scenester leggings DIYown, shabby chic put a bird on it tumeric whatever </p>
                  <p>shabby chic put a bird on it tumeric whatever woke hexagon cronut roof party gastropub. Four loko you prpost-ironic XOXO letterpress fashion axe pop-up salvia.</p>
                  </article>
                  <article>

                      <form action="https://formspree.io/f/xvodlwlg"
                            method="POST"
                            className="form contact-form">
                        <div className="form-row">
                            <label htmlFor="name">your name</label> 
                            <input type="text" name="name" id="name"/> 
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">your email</label> 
                            <input type="text" name="email" id="email"/> 
                       </div>
                       <div className="form-row">
                           <label htmlFor="message">message</label>
                           <textarea name="message" id="message"></textarea>
                       </div>
                       <button type="submit" className="btn block">submit</button>

                      </form>
                   </article>
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

export default contact
