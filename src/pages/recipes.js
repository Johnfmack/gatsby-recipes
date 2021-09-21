import React from 'react'
import Layout from '../components/Layout';
import AllRecipes from '../components/AllRecipes'
import SEO from '../components/SEO'

const Recipes = () => {
    return (
        <Layout>
            <SEO title="recipes page" description="this is the recipes page" />
            <main className="page">
                <AllRecipes />
            </main>
        </Layout>
    )
}

export default Recipes
